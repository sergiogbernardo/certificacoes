"""Generate the browser question bank from SC-200/conteudo_sc200.md."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "SC-200" / "conteudo_sc200.md"
OUTPUT = ROOT / "assets" / "sc200-question-bank.js"


def main() -> None:
    content = SOURCE.read_text(encoding="utf-8")
    references = dict(
        re.findall(r"^- \*\*\[(M\d{2})\]\*\* \[[^]]+\]\((https://[^)]+)\)", content, re.M)
    )
    blocks = re.split(r"(?=^### Q\d{3} —)", content, flags=re.M)[1:]
    questions = []

    for block in blocks:
        number = int(re.match(r"### Q(\d{3}) —", block).group(1))

        def field(name: str) -> str:
            match = re.search(rf"^\*\*{name}:\*\* (.+)$", block, re.M)
            if not match:
                raise ValueError(f"Q{number:03d}: falta {name}")
            return match.group(1)

        raw_options = field("Opções").split(" · ")
        options = []
        for index, value in enumerate(raw_options):
            prefix = f"{chr(65 + index)}) "
            if not value.startswith(prefix):
                raise ValueError(f"Q{number:03d}: alternativas inválidas")
            options.append(value[len(prefix) :])
        if len(options) != 4 or len(set(options)) != 4:
            raise ValueError(f"Q{number:03d}: são necessárias quatro alternativas distintas")

        answer_text = field("Resposta")
        answer = re.fullmatch(r"([A-D])\. (.+)", answer_text)
        if not answer:
            raise ValueError(f"Q{number:03d}: gabarito inválido")

        source_ids = re.findall(r"\[(M\d{2})\]", field("Fonte"))
        if not source_ids or any(ref not in references for ref in source_ids):
            raise ValueError(f"Q{number:03d}: fonte não definida")

        area = (
            "ambiente" if number <= 26 or 61 <= number <= 98
            else "resposta" if 27 <= number <= 48 or 99 <= number <= 131
            else "caca"
        )
        questions.append(
            {
                "id": f"SC200-{number:03d}",
                "area": area,
                "prompt": field("Pergunta"),
                "options": options,
                "answer": ord(answer.group(1)) - 65,
                "explanation": answer.group(2),
                "source": references[source_ids[0]],
            }
        )

    numbers = [int(question["id"].split("-")[1]) for question in questions]
    if numbers != list(range(1, 151)):
        raise ValueError("O banco precisa conter Q001–Q150 em ordem, sem lacunas")

    output = (
        "// Gerado de SC-200/conteudo_sc200.md por scripts/build-question-bank.py.\n"
        "// Edite o Markdown e execute npm run build:questions para atualizar.\n"
        "export const questions = "
        + json.dumps(questions, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUTPUT.write_text(output, encoding="utf-8")
    print(f"Geradas {len(questions)} questões em {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
