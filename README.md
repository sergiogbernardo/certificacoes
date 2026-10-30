# Certificações · Sabion Labs

Projeto independente do portfólio Sabion Labs, publicado via GitHub Pages. O portfólio mantém apenas um link para esta aplicação.

## SC-200

O quiz oferece sessões de **50**, **80** ou **150** perguntas quando o banco revisado atingir cada quantidade. Após o término, exibe porcentagem de acertos, respostas erradas, explicações, desempenho por área do SC-200 e opção de refazer a sessão completa.

**Estado atual:** oito perguntas autorais de demonstração. Os três modos completos ficam bloqueados até haver questões suficientes e revisadas; não repetimos perguntas para simular volume. As fontes candidatas estão em [`SC-200/fontes-dumps-e-materiais.md`](SC-200/fontes-dumps-e-materiais.md), e o mapa de estudo em [`SC-200/README.md`](SC-200/README.md).

## Desenvolvimento local

Abra `index.html` com um servidor HTTP local para que os módulos JavaScript funcionem:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000/`.

## Publicação

O workflow `.github/workflows/pages.yml` publica somente os arquivos do site em `_site` quando há push para `main`. Configure o GitHub Pages para usar **GitHub Actions** como origem, como nos demais projetos.
