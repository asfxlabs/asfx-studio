
from faster_whisper import WhisperModel
import sys

from faster_whisper import WhisperModel
import sys

sys.stdout.reconfigure(encoding="utf-8")

import os
os.environ["HF_HUB_DISABLE_TELEMETRY"] = "1"

video_path = sys.argv[1]
output_path = sys.argv[2]

model = WhisperModel(
    "models/small",
    device="cpu",
    compute_type="int8"
)

segments, info = model.transcribe(
    video_path,
    vad_filter=True,
    beam_size=5,
    word_timestamps=True
)

model.transcribe(
    video_path,
    vad_filter=True
)

def format_time(seconds):

    hrs = int(seconds // 3600)
    mins = int((seconds % 3600) // 60)
    secs = int(seconds % 60)

    millis = int((seconds - int(seconds)) * 1000)

    return f"{hrs:02}:{mins:02}:{secs:02},{millis:03}"

with open(output_path, "w", encoding="utf-8") as f:

    count = 1

    for segment in segments:

        f.write(f"{count}\n")

        f.write(
            f"{format_time(segment.start)} --> "
            f"{format_time(segment.end)}\n"
        )

        f.write(f"{segment.text.strip()}\n\n")

        print(
    f"Subtitle {count}: {segment.text.strip()}",
    flush=True
)

        count += 1

print("Transcription complete!")