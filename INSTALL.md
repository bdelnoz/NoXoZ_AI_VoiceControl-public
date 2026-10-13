<!--
PATH: INSTALL.md
PROJECT: NoXoZ AI Voice Control
VERSION: v10.0.0
AUTHOR: Bruno DELNOZ / @NoXoZ.be
DATE: 2026-10-13
PURPOSE: Browser installation and upgrade instructions
-->

# Install — NoXoZ AI Voice Control v10.0.0

This independent Chromium Manifest V3 extension is distributed as an unpacked directory, **not** as an installer.

## Brave / Chrome / Chromium

1. Download and extract `NoXoZ_AI_VoiceControl-public.zip` to a **permanent** location.
2. Open `brave://extensions/` (Brave) or `chrome://extensions/` (Chrome / Chromium).
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the extracted folder containing `manifest.json`.
6. Open or refresh `https://chatgpt.com/`.
7. Use the toolbar icon to open the widget; configure Full Flow, New Transcription + TOS, AutoSend, and Trigger Read Aloud to your preference.
8. Authorize microphone access when requested, verify the input device and test a short dictated sentence before automated sending.

## Updating

Replace the extension files in the **same folder**, reload the extension from the browser extensions page, and refresh the ChatGPT page. The Developer **Reload Ext** control can also be used when available.

## Safe initial test

First use **AutoSend OFF**: activate Full Flow and New Transcription + TOS, speak and wait for silence, then check that the transcript remains editable in PROMPT. Only enable AutoSend once you have confirmed the intended audio source and silence threshold.

## Declared supported site URLs

- `https://chatgpt.com/*`
- `https://chat.openai.com/*`
- `https://claude.ai/*`
- `https://www.claude.ai/*`

The release's live test history specifically covers ChatGPT. The manifest listing of a host does not guarantee parity across all versions of that site.

For settings, troubleshooting, limitations and privacy information, read `README.md`, `PRIVACY.md` and `SECURITY.md`.
