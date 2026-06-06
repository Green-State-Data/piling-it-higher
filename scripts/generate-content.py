"""
Pilin' It Higher Farms — Content Generation Script
Uses Claude API with agent system prompts from /agents/
"""

import anthropic
import json
import sys
from pathlib import Path

AGENTS_DIR = Path(__file__).parent.parent / "agents"
BRAND_DIR = Path(__file__).parent.parent / "brand"

AGENT_FILES = {
    "brand-voice": AGENTS_DIR / "brand-voice-agent.md",
    "social": AGENTS_DIR / "social-content-agent.md",
    "website": AGENTS_DIR / "website-copy-agent.md",
}


def load_system_prompt(agent_name: str) -> str:
    path = AGENT_FILES.get(agent_name)
    if not path or not path.exists():
        raise ValueError(f"Unknown agent or missing file: {agent_name}")
    return path.read_text()


def load_brand_identity() -> dict:
    brand_file = BRAND_DIR / "brand-identity.json"
    return json.loads(brand_file.read_text())


def run_agent(agent_name: str, user_prompt: str, verbose: bool = False) -> str:
    client = anthropic.Anthropic()

    system_prompt = load_system_prompt(agent_name)

    # Append brand identity as structured context
    brand = load_brand_identity()
    system_prompt += f"\n\n## Structured Brand Data (authoritative)\n```json\n{json.dumps(brand, indent=2)}\n```"

    if verbose:
        print(f"\n[Agent: {agent_name}]")
        print(f"[Prompt: {user_prompt[:100]}...]")
        print("-" * 60)

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=2048,
        system=system_prompt,
        messages=[
            {"role": "user", "content": user_prompt}
        ]
    )

    return message.content[0].text


def review_content(content: str) -> str:
    """Run brand voice review on existing content."""
    prompt = f"""Please review the following content for brand voice, accuracy, and compliance.

CONTENT TO REVIEW:
---
{content}
---

Score it on voice match, accuracy, and compliance risk, then provide a revised version."""
    return run_agent("brand-voice", prompt, verbose=True)


def generate_social(brief: str) -> str:
    """Generate a social post from a brief."""
    return run_agent("social", brief, verbose=True)


def generate_web_copy(brief: str) -> str:
    """Generate website copy from a brief."""
    return run_agent("website", brief, verbose=True)


if __name__ == "__main__":
    # Quick CLI: python generate-content.py social "Instagram post about Snowberry strain"
    if len(sys.argv) < 3:
        print("Usage: python generate-content.py [social|website|review] '<brief>'")
        sys.exit(1)

    mode = sys.argv[1]
    brief = sys.argv[2]

    if mode == "social":
        result = generate_social(brief)
    elif mode == "website":
        result = generate_web_copy(brief)
    elif mode == "review":
        result = review_content(brief)
    else:
        print(f"Unknown mode: {mode}. Use: social, website, review")
        sys.exit(1)

    print(result)
