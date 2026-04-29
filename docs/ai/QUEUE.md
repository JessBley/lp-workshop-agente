# 📋 QUEUE — Lista de Tarefas Priorizadas

## 🎯 Fase 1: Saneamento e Padronização (Urgente)
1. **[TASK-001] Centralizar Caminhos de Assets**: Refatorar `Cases.jsx`, `MentorSection.jsx` e `Footer.jsx` para utilizarem as constantes `IMG_PATH` e `LOGO_PATH` do `config.js`.
2. **[TASK-002] Limpeza de Redundância Física**: Remover a pasta `public/assets/assets` e garantir que todos os arquivos necessários estejam em `public/assets/img/` ou `public/assets/logos/`.
3. **[TASK-003] Correção de Assets Específicos**: Renomear `alan-dantas.webp.jpg` para `alan-dantas.jpg` (ou webp correto) e atualizar referência no `MentorSection.jsx`.
4. **[TASK-004] Centralizar Links de Venda**: Mover os links da Hotmart para o `config.js` para facilitar a troca rápida se o carrinho mudar.

## 🚀 Fase 2: Polimento e UX
1. **[TASK-005] Otimização de Imagens**: Passar as imagens da pasta `logos/` por compressão para reduzir o LCP.
2. **[TASK-006] Refino do Error Boundary**: Customizar o fallback do `ErrorBoundary` para exibir um botão "Recarregar Página" amigável.
3. **[TASK-007] Validação de Meta Tags**: Revisar o `index.html` do Vite para garantir que SEO (Title, Description, Favicon) esteja alinhado com a nova campanha.

## 🧹 Fase 3: Higiene de Repositório
1. **[TASK-008] Archiving Legacy Files**: Mover `index.html` (legada), `equipe.html`, `php/`, etc, para uma pasta `_legacy_v1/` para despoluir a raiz do projeto.
2. **[TASK-009] README Atualizado**: Criar um `README.md` na raiz explicando como rodar o ambiente React e o fluxo de build.
