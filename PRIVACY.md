# Privacy — AI Voice Control by NoXoZ.be v8.10.0

> Independent project. Not affiliated with, endorsed by, sponsored by, or officially connected to OpenAI or Anthropic.

AI Voice Control is designed as a local browser-side workflow extension.

## What the extension processes

The extension can inspect the supported AI page state required for its workflow, including:

- whether voice transcription is active;
- whether a transcript is present in the composer;
- whether Send is available;
- whether an assistant response is still being generated;
- whether Read Aloud / Stop Read Aloud controls are available;
- microphone amplitude used for Time Of Silence detection;
- locally stored extension settings.

## Microphone

The extension uses browser microphone access for level / silence detection. It does not deliberately save microphone audio as files and does not upload microphone audio to a NoXoZ backend.

The AI website may separately process microphone audio for its own transcription feature under that provider's terms and privacy policy.

## Local storage

`chrome.storage.local` is used for extension settings such as flow state, TOS seconds, threshold, UI mode, widget position/size, Developer mode, AutoSend, Read Aloud settings, and platform selection.

## Telemetry

The extension contains no NoXoZ analytics or telemetry service.

## Donation link

The support button opens a Stripe payment page only when the user explicitly clicks it. Stripe is an external service and handles payment processing directly.
