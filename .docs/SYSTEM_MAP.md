# 🗺️ SYSTEM_MAP — Edugital Landing Page

## Arquitetura de Pastas

```text
/ (Project Root)
├── .docs/                 # Central de documentação e controle
├── react-migration/       # Projeto principal em React (Vite)
│   ├── src/
│   │   ├── components/    # Layout e UI components
│   │   ├── styles/       # Estilização modularizada
│   │   └── App.jsx       # Componente raiz
│   └── public/            # Assets estáticos (Imagens, Fonts)
└── [Legacy Files]         # Arquivos HTML/CSS originais (Backup/Referência)
```

## Hierarquia de Componentes (React)

- `App.jsx`
  - `Header` (Sticky)
  - `Hero` (Com Countdown e Partículas)
  - `ProblemSection`
  - `SolutionSection`
  - `Cases`
  - `Pricing`
  - `MentorSection`
  - `FAQ`
  - `Footer`
  - `UI: CookieBanner`, `ContactModal`, `StickyCTA`, `ErrorBoundary`

- `Obrigado Page (obrigado.html)`
  - `Hero` (Confirmação)
  - `WorkshopInfo`
  - `DateTime`
  - `SupportSection`


## Fluxo de Deploy
O projeto é buildado via `npm run build` dentro de `react-migration` e enviado para o servidor via SSH/SCP para o subdiretório `/workshopagente/`.
