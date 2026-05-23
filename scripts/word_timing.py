from faster_whisper import WhisperModel
import sys
import json
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
    word_timestamps=True
)

all_words = []

for segment in segments:

    if not segment.words:
        continue

    for word in segment.words:

        if (
            word.start is None or
            word.end is None
        ):
            continue

        word_data = {

            "word": word.word.strip(),

            "start": round(word.start, 2),

            "end": round(word.end, 2)
        }

        all_words.append(word_data)

        print(
            f"{word.word.strip()} "
            f"({word.start:.2f}s)",
            flush=True
        )

with open(output_path, "w", encoding="utf-8") as f:

    json.dump(
        all_words,
        f,
        indent=2,
        ensure_ascii=False
    )

print("Word timing export complete!")