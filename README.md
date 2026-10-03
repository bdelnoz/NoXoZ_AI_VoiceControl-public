################################################################################
# DOCUMENT INFORMATION
################################################################################
# Document Name    : README.md
# Document Full Path & name : README.md
# Author         : Bruno DELNOZ
# Email          : bruno.delnoz@protonmail.com
# Version        : V1.0
# Date  / Time   : 2026-02-09 19:22:16
# Project : NoXoZ_AI_VoiceControl-public
# Short description : Project overview
################################################################################
# Document Name    : README.md
# Document Full Path & name : README.md
# Author         : Bruno DELNOZ
# Email          : bruno.delnoz@protonmail.com
# Version        : V1.0
# Date  / Time   : 2026-02-09 19:22:16
# Project : NoXoZ_AI_VoiceControl-public
# Short description : Project overview
################################################################################
# Document Name    : README.md
# Document Full Path & name : README.md
# Author         : Bruno DELNOZ
# Email          : bruno.delnoz@protonmail.com
# Version        : V1.0
# Date  / Time   : 2026-02-09 19:22:16
# Project : NoXoZ_AI_VoiceControl-public
# Short description : Project overview
################################################################################
<div align="center">

# AI Voice Control — by NoXoZ.be

**v8.10.0 Private UI Refactor** · Brave / Chrome / Chromium extension

</div>

> Independent project. Not affiliated with, endorsed by, sponsored by, or officially connected to OpenAI or Anthropic.
> Author: **Bruno DELNOZ** / **@NoXoZ_be**

---

## Overview

AI Voice Control automates the normal browser voice-transcription workflow around supported AI web chats while keeping the standard text conversation interface.

This build keeps the validated v8.9.4 workflow and completely refactors the widget interface to follow the same visual structure and dimensions as **ChatGPT Export by NoXoZ.be**, using a green theme.

## Main workflow

1. Voice recording / transcription.
2. Time Of Silence detection.
3. Transcript validation.
4. Optional AutoSend.
5. Wait for the assistant response.
6. Optional automatic Read Aloud.
7. Restart the next voice-transcription cycle while the global flow remains active.

## Interface modes

| Mode | Description |
|---|---|
| Button | Minimal 62 px shell, same footprint as ChatGPT Export button mode |
| Mini | Compact 126 px interface |
| Maxi | Full interface, default width 274 px, resizable |
| Developer | Maxi developer layout, default width 314 px, resizable with runtime state panel |

## Main controls

| Control | Role |
|---|---|
| `ACTIVATED / NOT ACTIVATED` | Global flow state |
| `New Transcription + TOS` | Voice-transcription / silence-detection control |
| `AutoSend` | Automatic sending of a validated transcript |
| `Trigger ReadAloud` | Automatic Read Aloud after an assistant response |
| `Time Of Silence` | Silence duration before transcription validation |
| `Threshold` | Microphone level threshold |
| `Set ReadAloud Mode` | Sends the Read Aloud activation/deactivation command to the chat |
| `ReadAloud Last Message` | Manual playback of the latest assistant message |
| `Stop ReadAloud` | Stops the current playback |
| `Dev / User` | Opens or closes Developer mode |
| `Reload Ext` | Developer-only unpacked-extension reload |
| `Support This Project` | Opens the Stripe donation page only when clicked |

## Interface baseline

The v8.10.0 interface intentionally matches the ChatGPT Export family for:

- Mini / Maxi / Developer widths;
- header controls;
- button proportions;
- border radii and spacing;
- Maxi resize handles;
- Developer mode placement;
- donation button placement;
- compact button mode footprint.

The color identity remains green for AI Voice Control.

## Privacy

The extension operates locally in the browser and does not include a NoXoZ telemetry or analytics backend. See [`PRIVACY.md`](PRIVACY.md).

## Documentation

| Document | Content |
|---|---|
| [`INSTALL.md`](INSTALL.md) | Installation instructions |
| [`PRIVACY.md`](PRIVACY.md) | Local data and microphone processing |
| [`SECURITY.md`](SECURITY.md) | Security model |
| [`DONATE.md`](DONATE.md) | Voluntary project support |
| [`LICENSE`](LICENSE) | License terms |

---

<div align="center">

© 2026 Bruno DELNOZ / NoXoZ.be — All rights reserved.

</div>
