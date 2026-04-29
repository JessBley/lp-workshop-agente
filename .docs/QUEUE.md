# 📋 QUEUE — Fila de Tarefas (Otimizada)

## 🔴 Alta Prioridade (Imediato)

### 📂 Infraestrutura & Assets
- [x] **Mover Assets**: Mover conteúdo de `public/assets/assets/img` para `public/assets/img`.
- [x] **Limpar Redundância**: Excluir pasta recursiva `public/assets/assets`.
- [ ] **Auditoria de Assets**: Verificar se `public/assets/images` pode ser fundida com `public/assets/img` para evitar confusão.

### ⚛️ Refatoração de Componentes (JSX)
- [ ] **Header.jsx**: Substituir `/workshopagente/` fixo pelas constantes `LOGO_PATH` e `BASE_URL`.
- [ ] **MentorSection.jsx**: Migrar caminhos de imagem para a constante `IMG_PATH`.
- [ ] **Cases.jsx**: Migrar caminhos de imagem para a constante `IMG_PATH`.

## 🟡 Média Prioridade

### 🎨 Refatoração de Estilos (CSS)
- [ ] **CSS Paths**: Corrigir referências a `/workshopagente/` nos arquivos:
  - `src/styles/bundle.css`
  - `src/styles/hero.css`
  - `src/styles/pages.css`
- [ ] **Fonts Check**: Validar caminhos em `src/styles/fonts.css`.

### 🧪 Validação & Build
- [ ] **Debug 404**: Rodar `npm run dev` e caçar erros de carregamento no console do navegador.
- [ ] **Build Check**: Rodar `npm run build` e inspecionar a pasta `dist` para garantir que os assets estão no lugar certo.

## 🟢 Baixa Prioridade / Documentação

### 📝 Controle & SEO
- [ ] **Atualizar DECISIONS.md**: Registrar a estratégia de prefixo dinâmico para assets.
- [ ] **SEO Final**: Implementar meta tags dinâmicas e títulos para cada seção.
- [ ] **Sincronizar PROGRESS**: Marcar conclusão das tarefas de infraestrutura.
