# ⚖️ DECISIONS — Registro de Decisões

## [2026-04-13] — Organização da Documentação
- **Decisão**: Criar a pasta `.docs` na raiz para centralizar o controle de progresso e arquitetura.
- **Motivo**: Solicitação do usuário para manter a raiz limpa e organizada.

## [2026-04-03] — Escolha do Framework e Tecnologia
- **Decisão**: Utilizar Vite + React + GSAP.
- **Motivo**: Alta performance de build e animações premium condizentes com a marca Edugital.

## [2026-04-06] — Configuração do Base Path
- **Decisão**: Definir `base: '/workshopagente/'` no `vite.config.js`.
- **Motivo**: O projeto será servido em um subdiretório no servidor de produção.

## [2026-04-15] — Centralização de Paths via `config.js`
- **Decisão**: Adotar o arquivo `src/config.js` (alimentado por `__ASSET_PREFIX__` do Vite) como a única fonte de verdade para caminhos de imagens e assets.
- **Motivo**: Garantir que o projeto funcione em qualquer subdiretório (local `/`, prod `/workshopagente/`) sem a necessidade de alterar strings hardcoded em múltiplos componentes.
