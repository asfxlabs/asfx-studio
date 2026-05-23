# ASFX Studio

AI-powered desktop toolkit for automating video editing workflows.

ASFX Studio helps creators remove silent sections, generate subtitles, export Premiere Pro timelines, and speed up post-production using fully local AI processing.

Built with Electron, FFmpeg, Python, and Faster-Whisper.

---

## Features

### AI Subtitle Generation

* Offline Whisper transcription
* SRT subtitle export
* UTF-8 multilingual support
* Improved punctuation and timing

### Premiere Pro XML Export

* Automatically removes silent sections
* Exports editable Premiere Pro XML timelines
* Optimized for lectures, tutorials, and talking-head videos

### Word Timing Export

* Word-level timestamp generation
* Useful for animated captions and motion graphics

### Local AI Processing

* Fully offline workflow
* No cloud APIs
* No subscriptions
* Local Whisper inference

### Desktop Application

* Built with Electron
* Modern creator-focused interface
* Integrated debug console
* Real-time processing feedback

---

## Tech Stack

* Electron
* Node.js
* Python
* FFmpeg
* Faster-Whisper
* Auto-Editor

---

## Installation

```bash
git clone https://github.com/asfxlabs/asfx-studio.git
cd asfx-studio
npm install
npm start
```

---

## Build

```bash
npm run build
```

---

## Project Structure

```bash
asfx-studio/
├── scripts/
├── renderer/
├── assets/
├── main.js
├── package.json
└── README.md
```

---

## Current Capabilities

* AI subtitle generation
* Premiere Pro XML export
* Silence detection
* Word timing extraction
* Offline AI transcription
* Local video processing

---

## Roadmap

* Multi-clip merging
* AI chapter generation
* Speaker detection
* Motion caption templates
* GPU acceleration
* macOS support

---

## Why I Built This

Editing long educational recordings manually became repetitive and time-consuming.

Removing pauses, generating subtitles, and preparing timelines for Premiere Pro consumed too much production time during real editing work.

ASFX Studio was built to automate those workflows locally using AI-powered tools.

---

## License

MIT License

---

## Author

ASFX Labs

Full Stack Development • Multimedia Tools • AI Workflow Automation
