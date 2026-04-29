# Fontes e imagens – onde colocar

## Imagem de fundo da hero (bg-hero)
- **Onde:** `assets/img/bg-hero.png`
- **Uso:** Fundo da primeira seção (Edugital). Definido em `assets/css/hero.css`.
- Se trocar a extensão (ex.: `.jpg` / `.webp`), altere em `hero.css` a linha do `url('../img/bg-hero.png')` para a extensão correta.

## Fonte Mokoto (títulos)
- **Onde:** os arquivos estão em:
  - `assets/fonts/otf/mokoto-mokoto-regular-400.otf`
  - `assets/fonts/ttf/mokoto-mokoto-regular-400.ttf`
- **Configuração:** carregados por `assets/css/fonts.css`.
- **Uso:** títulos (h1, h2, .section__title, etc.) via variável `--font-title` em `variables.css`.
- Se a fonte não carregar (404), o navegador usa Poppins. Confira no DevTools (aba Rede) se os arquivos estão sendo carregados.
