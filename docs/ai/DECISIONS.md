# 🧠 DECISIONS — Registro de Decisões e Padrões

## 1. Stack Tecnológica
- **React (Vite)**: Escolhido para permitir uma interface mais dinâmica e modular, facilitando a criação de variações para diferentes campanhas (A/B Testing futuro).
- **GSAP**: Preferido sobre animações CSS puras pela precisão do `ScrollTrigger` e controle de timeline complexa.
- **Vanilla CSS**: Decidido manter CSS puro para manter o controle total sobre a estética visual premium, sem as limitações de design de frameworks de componentes.

## 2. Padrões de Implementação
- **Modularização por Seção**: Cada bloco visual da LP é um componente React independente em `/layout/`.
- **Configuração Centralizada**: Uso de `src/config.js` para gerenciar o prefixo de deploy (`/workshopagente/`). *Nota: Esta regra está sendo aplicada retroativamente, pois alguns componentes antigos ainda possuem paths manuais.*
- **Estratégia de Assets**: Todos os recursos estáticos são servidos pela pasta `public/` para garantir compatibilidade com o servidor Apache do cliente.

## 3. Desvios e Inconsistências Arquiteturais
- **Duplicidade de Assets**: No início da migração, uma estrutura de pastas de backup foi criada dentro da pasta `public` (`assets/assets`), o que agora é considerado um antipadrão a ser corrigido.
- **Legado vs Novo**: A coexistência de arquivos PHP na raiz foi mantida para segurança, mas a recomendação é isolar o projeto React como a única fonte de verdade da Landing Page.
