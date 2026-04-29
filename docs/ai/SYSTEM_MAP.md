# 🗺️ SYSTEM_MAP — Edugital: Workshop Eliminando o Gargalo

## 1. Visão Geral
Sistema de Landing Page (LP) em fase final de migração de uma arquitetura legada (HTML/CSS estático) para um Single Page Application (SPA) moderno utilizando **React (Vite)**. O objetivo principal é a conversão para o workshop/mentoria "Eliminando o Gargalo".

## 2. Arquitetura de Pastas
```text
/ (Project Root)
├── .docs/                 # Documentação de auditoria (Legacy/Internal)
├── docs/ai/               # Documentação estratégica de engenharia (Atual)
├── react-migration/       # Projeto principal React (Vite)
│   ├── src/
│   │   ├── components/    # Componentes de layout e UI modularizados
│   │   ├── styles/        # CSS puro modularizado (Variables, Base, Sections)
│   │   ├── config.js      # Gerenciamento central de caminhos e constantes
│   │   └── App.jsx        # Ponto de entrada e orquestração de seções
│   └── public/            # Assets estáticos (Imagens, Logos, Fontes)
├── php/                   # Backend legada para captura de formulários (contact.php)
└── [Legacy Root Files]    # index.html, equipe.html, etc. (Manter apenas para referência)
```

## 3. Fluxos Principais
- **Conversão**: O usuário clica em botões de CTA ("Quero me inscrever agora") que o direcionam para o checkout da Hotmart ou abrem um modal de contato.
- **Engajamento**: Countdown timer e animações GSAP para criar senso de urgência e proposta de valor.
- **Interatividade**: Accordion de FAQ e Modal de captura de leads.

## 4. Integrações
- **Hotmart**: Link direto de checkout (`https://pay.hotmart.com/...`).
- **Google Forms**: Incorporado via Iframe no `ContactModal`.
- **PHP Mail**: Endpoint local `php/contact.php` para envio direto de e-mails (não está sendo usado ativamente no React, que foca no modal/link externo).

## 5. Dependências Críticas
- **React 18**: Framework core.
- **GSAP & @gsap/react**: Motor de animação para scroll e efeitos visuais.
- **tsParticles**: Efeito de background na seção Hero.
- **Vite**: Build tool com configuração de base path específica para deploy em subpastas.
