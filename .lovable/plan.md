# Design System — Acelera SaaS (PDF visual)

Vou gerar um PDF único, design-forward, no espírito de um style guide de agência — não um relatório técnico. A linguagem visual será a própria linguagem do site: fundo escuro roxo/preto, acentos magenta/roxo, elementos F1, tipografia Plus Jakarta Sans + Inter.

## Filosofia visual

**"Velocity Grid"** — precisão de telemetria de corrida encontrando o rigor de um manual suíço. Grid denso, marcações finas, muito preto, campos de cor magenta como faróis. Tipografia como escultura. Nada de decoração vazia.

## Estrutura (6 páginas)

1. **Capa** — Wordmark gigante "ACELERA / SAAS" tratado como pôster, com paleta magenta/roxo em bloco, coordenadas tipo telemetria, subtítulo "Design System · v1".
2. **Identidade & princípios** — Speed, Precision, Depth. Três blocos verticais, tipografia dominante, texto mínimo.
3. **Paleta de cores** — Swatches grandes com HSL + HEX + token CSS (`--primary`, `--background`, `--magenta-primary`, etc.). Layout tipo carta Pantone.
4. **Gradientes & sombras** — Amostras dos 4 gradientes (`--gradient-hero`, `--gradient-accent`, `--gradient-button`, `--gradient-card`) e das 3 sombras, cada um com o CSS ao lado em mono.
5. **Tipografia** — Plus Jakarta Sans (display) e Inter (body). Espécime em várias escalas (H1→caption), com o gradiente do heading demonstrado.
6. **Componentes** — Botão gradiente, card glass, badge, input — mostrados como amostras físicas com anotação de spec ao lado (raio, sombra, borda).

## Execução técnica

- Python + ReportLab, fonte DejaVu Sans registrada (acentos PT-BR corretos).
- Fundo `#1c0f22` (mapeando `--background` 280 30% 10%) em todas as páginas.
- Acento magenta `#d428a6` e roxo `#a855f7`.
- Elementos F1: grid de telemetria fino, marcadores de canto, numeração de página estilo "P.03 / 06".
- Saída em `/mnt/documents/acelera-saas-design-system.pdf`.

## QA obrigatório

Depois de gerar, converto cada página em imagem (`pdftoppm`) e inspeciono uma por uma buscando: overlaps, texto cortado, contraste ruim, margens irregulares. Corrijo e re-renderizo até passar limpo. Só entrego depois desse ciclo.

## Entrega

Arquivo disponibilizado via `<presentation-artifact>` no chat para download direto.
