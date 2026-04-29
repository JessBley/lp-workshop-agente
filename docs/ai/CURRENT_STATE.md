# 📊 CURRENT_STATE — Edugital: Workshop Eliminando o Gargalo

## Status Atual: `🛠️ REFORMA ARQUITETURAL / CONSOLIDAÇÃO`

O projeto está migrado em termos de conteúdo e estrutura, mas apresenta inconsistências técnicas que podem quebrar em produção se não resolvidas.

### O que está funcionando ✅
- **Estrutura SPA**: Navegação fluida e renderização de componentes completa.
- **Animações**: GSAP (ScrollTrigger) e Particles devidamente configurados e performáticos.
- **Responsividade**: Layout adaptado para dispositivos móveis (via CSS em `styles/`).
- **Base Path**: Vite configurado para rodar em `/workshopagente/`.

### O que está quebrado/instável ⚠️
- **Resolução de Assets**: Caminhos de imagens estão "duros" (hardcoded) em vários componentes (ex: `Cases.jsx`, `MentorSection.jsx`), ignorando o centralizador `config.js`.
- **Nomes de Arquivos**: Arquivos com erros de digitação como `alan-dantas.webp.jpg`.
- **Links Externos**: Links da Hotmart embutidos diretamente em componentes, dificultando a gestão de campanhas futuras.

### O que está incompleto 🛠️
- **Padronização de Assets**: Redundância física de arquivos na pasta `public/assets/assets`.
- **Limpeza de Legado**: Presença de arquivos `.html` e `.css` na raiz que não fazem parte do novo projeto React.
- **Tratamento de Erros**: `ErrorBoundary.jsx` implementado mas pouco customizado para feedback real do usuário.

### Inconsistências Identificadas
- **Código vs Ref**: O `SYSTEM_MAP` interno diz seguir o `config.js`, mas o código real (`Cases.jsx`) ignora essa regra.
- **Asset Tree**: Existe uma duplicidade de estrutura de diretórios que desnecessariamente aumenta o tamanho do build e confunde o desenvolvedor.
