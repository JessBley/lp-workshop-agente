# ⚠️ RISKS — Gestão de Riscos

## [R01] Divergência de Paths no Deploy
- **Risco**: Imagens que funcionam localmente podem quebrar no servidor se a estrutura `public/` não for replicada exatamente.
- **Impacto**: Experiência do usuário degradada (Imagens quebradas).
- **Mitigação**: Uso rigoroso de `${import.meta.env.BASE_URL}` e validação via `npm run build` antes de cada deploy.

## [R02] Performance do Mobile
- **Risco**: Uso intenso de GSAP e Particles pode afetar aparelhos mobile mais antigos.
- **Impacto**: Baixa taxa de conversão no mobile.
- **Mitigação**: Lazy loading de componentes e desativação seletiva de partículas em viewports pequenos.

## [R03] Cache do Navegador (Assets)
- **Risco**: O servidor pode cachear imagens antigas se os nomes não forem versionados.
- **Impacto**: Usuários vendo versões desatualizadas do site.
- **Mitigação**: Garantir que o build do Vite gere hashes para arquivos em `src/assets` ou forçar cache-busting se necessário.

## [R04] Débito Técnico: Paths Hardcoded
- **Risco**: A existência de caminhos manuais (`/workshopagente/...`) espalhados pelo código torna o projeto rígido.
- **Impacto**: Dificuldade extrema em mover o projeto para outro subdiretório ou domínio.
- **Mitigação**: Concluir a refatoração de todos os componentes para utilizarem as constantes de `config.js`.
