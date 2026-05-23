ASFX Studio

AI-powered desktop video editing toolkit built with Electron, FFmpeg, and Faster-Whisper.

ASFX Studio helps creators automatically remove silent sections, generate subtitles, export Premiere Pro XML timelines, and streamline long-form editing workflows using local AI processing.

No cloud APIs. No subscriptions. Everything runs locally on your machine. Because apparently software can still do that.

Features
AI Subtitle Generation
Offline Whisper transcription
UTF-8 subtitle support
SRT export
Improved punctuation and sentence detection
Multilingual support
Premiere Pro XML Export
Automatically removes silent sections
Generates editable Premiere Pro XML timelines
Keeps speaking segments only
Speeds up lecture and tutorial editing workflows
Word Timing Export
Word-level timestamp generation
Useful for animated captions and motion graphics
Creator-focused subtitle timing pipeline
Local AI Processing
Runs fully offline
Uses Faster-Whisper
No API keys required
No cloud dependency
Desktop Application
Built with Electron
Modern UI
Native file importing
Integrated debug console
Real-time processing feedback
Tech Stack
Electron
Node.js
FFmpeg
Python
Faster-Whisper
Auto-Editor
Screenshots
Main Dashboard
<img width="100%" src="screenshots/dashboard.png" />
Subtitle Generation
<img width="100%" src="screenshots/subtitles.png" />
Premiere XML Export
<img width="100%" src="screenshots/xml-export.png" />
Debug Console
<img width="100%" src="screenshots/debug-console.png" />
Installation
Clone Repository
git clone https://github.com/asfxlabs/asfx-studio.git
cd asfx-studio
Install Dependencies
npm install
Run Application
npm start
Build Desktop App
npm run build
Required Runtime Components

The application depends on:

Embedded Python
FFmpeg
Faster-Whisper
Whisper models

These are bundled separately during production builds.

Current Capabilities
Subtitle generation
Premiere Pro XML export
Silence detection
Word timing extraction
Offline AI transcription
Real-time debug console
Roadmap
Multi-clip merging
AI chapter generation
Speaker detection
Motion caption templates
GPU acceleration
MacOS support
Timeline preview system
Why ASFX Studio Exists

Editing long educational recordings and tutorials manually takes an absurd amount of time.

Removing silent sections, generating subtitles, and preparing timelines for Premiere Pro became repetitive and exhausting during real production work.

ASFX Studio was built to automate those workflows and reduce editing time using local AI-powered tools.

License

MIT License

Author

ASFX Labs

Full Stack Development • Multimedia Tools • AI Workflow Automation

GitHub: https://github.com/asfxlabs

Disclaimer

This project is still under active development.
