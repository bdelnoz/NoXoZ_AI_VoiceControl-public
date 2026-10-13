<!--
PATH: README.md
PROJECT: NoXoZ AI Voice Control
VERSION: v10.0.0
AUTHOR: Bruno DELNOZ / @NoXoZ.be
DATE: 2026-10-13
PURPOSE: Public overview, workflows and user reference
-->

# AI Voice Control — by NoXoZ.be

**Public release v10.0.0** · Brave / Chrome / Chromium · Manifest V3

> **Independent software.** Not affiliated with, endorsed, sponsored or officially connected to OpenAI or Anthropic.

AI Voice Control provides a browser-side **hands-free conversational workflow** for supported AI chats. It uses the website's own dictation and Read Aloud controls, with configurable silence detection, optional automatic sending, response completion detection and automatic conversation continuation.

**Release policy:** v10.0.0 is the documented/public packaging of the live-tested **v9.0.7** baseline. The voice-flow implementation is retained without intentional feature changes. One intermittent case of `Waiting current assistant message` after the network response ended was seen during testing; it remains under observation. See **Known limitations** below.

## Main features

- **Full Flow ACTIVATED / NOT ACTIVATED:** master controller; OFF permits normal use of the ChatGPT prompt and selected manual actions.
- **New Transcription + TOS:** start/stop the extension-controlled dictation stage; **Time Of Silence** (seconds) determines when a spoken turn is finished.
- **Threshold:** adjustable microphone amplitude trigger for voice/silence recognition.
- **AutoSend:** choose automatic submission or retain a transcript in the normal prompt.
- **Trigger Read Aloud:** automatically read the new assistant response after generation completes, or skip playback and proceed.
- **Read Aloud Last Message** and **Stop Read Aloud:** manual playback and manual interruption, independently of the automatic trigger. A manual stop during Full Flow should continue to the following stage.
- **Set Read Aloud Mode:** in-chat mode control (distinct from triggering the site's playback button).
- **Modes:** Button, Mini, Maxi User, Maxi Developer; adjustable positioning and sizes where supported.
- **Developer controls:** diagnostic status, Copy Log, Export Log, Clear Log, and Reload Ext for testing.
- **Optional Donate button:** opens Stripe only following an explicit click.

## Full Flow: prompt-centered lifecycle

1. **PROMPT** is the initial and return state. You may write or edit text and attach files normally.
2. With **Full Flow ON** and **New Transcription + TOS OFF**, remain at PROMPT: no dictation is started automatically.
3. With **New Transcription + TOS ON**, the extension clicks the website's **Dictate** control and waits for microphone/dictation readiness.
4. Once voice input is detected, a continuous silence interval of the configured length finishes the dictation turn.
5. **AutoSend OFF:** click **Stop Dictation**, wait for transcription to appear in PROMPT, then stop and wait for user action. At that point, the user can edit, click Send manually, re-arm dictation, or switch AutoSend ON to send the retained transcript.
6. **AutoSend ON:** use the named **Send Dictated Message** control if it is available; otherwise finalize dictation, wait for the transcript to stabilize and submit the composer once through the ordinary Send action.
7. The extension waits for **the current new assistant message** to complete, using the site response lifecycle and the current rendered answer/action controls.
8. **Trigger Read Aloud ON:** click Read Aloud for the current assistant answer, wait for actual playback, and then for its completion or a manual Stop. **OFF:** skip the playback stage.
9. If Full Flow remains active and New Transcription + TOS is ON, restart Dictate for the next turn. Otherwise return to PROMPT and wait.

**Mutual exclusion:** normal operation prevents a new dictation stage from overlapping assistant Thinking, Writing or Read Aloud playback. Manual control changes during an active stage affect subsequent steps according to the active state.

## Toggle combinations

| Full Flow | New Transcription + TOS | AutoSend | Trigger Read Aloud | Expected result |
|---|---|---|---|---|
| OFF | any | any | any | No automatic loop; manual Read Aloud controls remain available. |
| ON | OFF | any | any | Remain at PROMPT; no automatic recording. |
| ON | ON | OFF | any | Transcribe and retain prompt; do not send automatically. |
| ON | ON | ON | OFF | Dictate, transcribe, send, wait for answer, skip playback, dictate again. |
| ON | ON | ON | ON | Full voice cycle with the new answer read aloud before next dictation. |

**Switching AutoSend OFF → ON with retained text:** sends the retained completed transcript rather than discarding the draft. A deliberate manual Send also enters the response pipeline.

## Interface modes

| Mode | Intended use | Notes |
|---|---|---|
| Button | Minimal footprint | Expand or switch mode when controls are needed. |
| Mini | Compact day-to-day control | Short labels and live status. |
| Maxi User | Full daily controls | Resizable widget. |
| Maxi Developer | Diagnostic and testing | On Reload Ext/page bootstrap, upper-left (4,4), approximately 300 px wide; drag/resize is supported. |

**User / Developer** changes diagnostics and panel presentation, not the intended underlying voice-flow behavior. Switching between Mini and Maxi while recording is supported by the UI but should be retested after major website changes.

## Control reference

| UI control | Function |
|---|---|
| ACTIVATED / NOT ACTIVATED | Turn the global Full Flow on or off. |
| New Transcription + TOS | Enable new voice dictation after prompt/response stages. |
| Time Of Silence | Seconds of quiet required before completing a dictation. |
| Threshold | Microphone level boundary used by the extension. |
| AutoSend | Send dictated prompt automatically when ready. |
| Trigger Read Aloud | Play the latest *current* assistant response when finished. |
| Set Read Aloud Mode | Issue the intended Read Aloud mode prompt. |
| Read Aloud Last Message | Start playback of the latest assistant message on demand. |
| Stop Read Aloud | Interrupt current playback; in Full Flow, continue to next eligible stage. |
| Developer / User | Switch diagnostic controls. |
| Reload Ext | Developer-only extension reload mechanism. |
| Copy Log / Export Log / Clear Log | Collect, save, or clear local diagnostic messages. |
| Support This Project | Open the voluntary Stripe contribution link. |

## Installation — Brave, Chrome and Chromium

1. Extract `NoXoZ_AI_VoiceControl-public.zip` to a directory that will remain available.
2. Visit `brave://extensions/` in Brave or `chrome://extensions/` in Chrome / Chromium.
3. Enable **Developer mode** and select **Load unpacked**.
4. Select the extracted directory containing `manifest.json` (not the ZIP file itself).
5. Open or reload `https://chatgpt.com/` and use the extension toolbar icon.
6. Allow microphone access when the browser/site requests it and confirm input works before enabling Full Flow.

The extension is designed for Chromium-based browsers. The manifest additionally declares Claude hosts; the current release's **live validation described here applies to ChatGPT**, not to a guaranteed identical Claude workflow.

For updates, replace the files in the unpacked-extension directory and reload it from the extensions page; a hard page refresh may be needed to reload its content script.

## Browser permissions and data

The manifest declares `storage`, `tabs`, `activeTab`, `scripting`, and `downloads`, and website access to the declared ChatGPT and Claude domains. Preferences and interface state are stored locally. The extension needs awareness of the chat composer and current response controls in order to operate.

The browser/website may handle audio and transcription under its own privacy terms. **AI Voice Control has no NoXoZ analytics backend** and is not designed to upload raw microphone recordings, chat transcripts, or developer logs to a NoXoZ server. Do not share exported logs or chat text without checking for sensitive information.

Read [`PRIVACY.md`](PRIVACY.md), [`SECURITY.md`](SECURITY.md), and [`LICENSE`](LICENSE).

## Diagnostics and troubleshooting

| Symptom | First check |
|---|---|
| No microphone level or voice detection | Check microphone permission, selected input device and the site dictation UI. |
| Silence does not finish dictation | Confirm New Transcription + TOS ON, microphone UI ready, threshold and configured quiet interval. |
| AutoSend OFF left text in PROMPT | Expected: edit, send manually, restart TOS or switch AutoSend ON. |
| Read Aloud not triggered | Confirm Trigger ON and inspect whether the *current* answer became detectable and the Read Aloud button appeared. |
| `Waiting current assistant message` persists | Observed intermittent issue with assistant DOM detection. Save developer log and identify the completed network response; do not assume playback itself is faulty. |
| Wrong/stale message reads aloud | Stop playback and capture developer log; do not accept previous message as a substitute for the current one. |
| UI seems misplaced after reload | Switch Developer/User or drag/resize; Developer default is upper-left. |
| Unexpected transcription while TV plays | Background sound may exceed the volume threshold; adjust threshold and monitor input. |

## Known limitations (v10.0.0)

- ChatGPT's page markup and action toolbar can change without notice; selectors and message detection may then need maintenance.
- One live v9.0.7 diagnostic observed a completed `/backend-api/f/conversation` request followed by `Waiting current assistant message`: the detector still saw the same baseline response. The cause in the exact DOM structure is not conclusively established. This release **does not claim** that issue is corrected.
- Offline regression tests are not a substitute for running the extension in Brave with a real microphone, real ChatGPT replies, and site-native Read Aloud playback.
- AutoSend can send text as soon as TOS is reached. Avoid activating it while discussing private information in the presence of background noises.
- The extension is an independent utility, not an official ChatGPT audio API integration.

## Public package contents

```text
NoXoZ_AI_VoiceControl-public.zip
├── manifest.json
├── background.js
├── content-autosend.js
├── autosend-style.css
├── donate-mini.js
├── icons/
├── README.md
├── INSTALL.md
├── PRIVACY.md
├── SECURITY.md
├── DONATE.md
├── LICENSE
└── AI_Voice_Control_v10.0.0_Product_Guide.pdf
```

The installation ZIP intentionally omits `.gitignore`, hidden work/history, test scripts, and internal development material. The source/repository GLOBAL ZIP may additionally contain Git-ignored local tests and historical notes.

## Project support and license

The code is publicly viewable, but public visibility does not grant permission beyond the terms in **NoXoZ Personal License v1.0** (`LICENSE`). The software is free for the personal non-commercial use allowed by that license. Voluntary contributions through the user-clicked Stripe link are welcome; there are no paid features.

- Developer: **Bruno DELNOZ / @NoXoZ.be**
- Contact: **bruno.delnoz@protonmail.com**
- Release: **v10.0.0 — 2026-10-13**

© 2026 Bruno DELNOZ / NoXoZ.be. All rights reserved.
