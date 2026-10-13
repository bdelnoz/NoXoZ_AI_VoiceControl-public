<!--
PATH: PRIVACY.md
PROJECT: NoXoZ AI Voice Control
VERSION: v10.0.0
AUTHOR: Bruno DELNOZ / @NoXoZ.be
DATE: 2026-10-13
PURPOSE: Public local-data and microphone privacy information
-->

# Privacy — NoXoZ AI Voice Control v10.0.0

> Independent project; not affiliated with, endorsed by, sponsored by or officially connected to OpenAI or Anthropic.

AI Voice Control uses local browser extension logic to coordinate the dictation and Read Aloud functions visible on supported AI websites.

## Data processed in the browser

It observes the status of voice dictation, text in the composer, available Send controls, whether the active assistant answer has finished rendering, playback controls, microphone level for TOS, and extension configuration. Developer logs can include UI state, event timing and page-interaction details.

## Microphone and transcription

The extension uses microphone input for amplitude/silence monitoring. **It is not designed to archive raw microphone audio or to transmit recordings to a NoXoZ backend.** The website's dictation feature may separately send audio to that website's provider for transcription, under the provider's own terms and privacy policy. The extension does not make the website's processing local or private.

## Local settings

`chrome.storage.local` holds options such as Full Flow, TOS duration, threshold, AutoSend, Trigger Read Aloud, platform selection, widget mode/position/size and Developer state.

## Diagnostics

Developer logs are collected locally. If you copy or export a log, **review it before sharing**; page state, messages, timing or attachments may reveal personal or confidential information. The extension does not automatically upload a diagnostic log to NoXoZ.

## Telemetry and donations

This release contains no NoXoZ analytics SDK or NoXoZ telemetry backend. When you click the support link, Stripe opens independently and applies its own privacy practices. Payment information is not processed by the extension.

## Scope of claims

No claim here replaces OpenAI, Anthropic, browser or Stripe privacy notices. The practical network behavior is subject to the installed release, the browser and site updates. For permissions and security reporting see `SECURITY.md`.
