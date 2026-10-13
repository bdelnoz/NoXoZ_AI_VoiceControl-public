<!--
PATH: SECURITY.md
PROJECT: NoXoZ AI Voice Control
VERSION: v10.0.0
AUTHOR: Bruno DELNOZ / @NoXoZ.be
DATE: 2026-10-13
PURPOSE: Public extension security and reporting policy
-->

# Security — NoXoZ AI Voice Control v10.0.0

> Independent project; not affiliated with, endorsed by, sponsored by or officially connected to OpenAI or Anthropic.

## Security architecture

- Chromium Manifest V3 extension with a local background service worker and content scripts.
- Uses the declared browser permissions `storage`, `tabs`, `activeTab`, `scripting`, and `downloads`.
- Interacts with the supported AI websites listed in the manifest, rather than arbitrary websites.
- Does not contain a NoXoZ analytics SDK or backend for automatic telemetry.
- Designed without automatic upload of conversations, dictation audio, transcripts or developer logs to NoXoZ.
- Stores UI preferences and flow state in local browser extension storage.

## Risks and responsibilities

- AutoSend can submit dictated text to the selected AI website. Confirm configuration before leaving it unattended.
- The website's own dictation/Read Aloud services and their terms remain applicable.
- Web UI markup changes can affect the extension's ability to find the correct action; a known intermittent current-assistant detection issue is documented in README.md.
- Developer logs, chat text, attachments and account sessions can contain sensitive information. Share diagnostics only after review.
- Use official project packages; inspect unpacked-extension permissions before loading.

## Reporting vulnerabilities

Send a private report with the affected extension version, steps to reproduce and potential impact to:

**Bruno DELNOZ** — bruno.delnoz@protonmail.com

Avoid posting secrets, personal transcripts or exploit details publicly before coordination.
