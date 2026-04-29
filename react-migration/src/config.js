// Global constant defined in vite.config.js for reliable path resolution
const prefix = typeof __ASSET_PREFIX__ !== 'undefined' ? __ASSET_PREFIX__ : '/workshopagente/';

export const BASE_URL = prefix; 
export const ASSETS_PATH = `${BASE_URL}assets/`;
export const IMG_PATH = `${ASSETS_PATH}img/`;
export const LOGO_PATH = `${ASSETS_PATH}logos/`;

// Contatos de Suporte
export const SUPPORT_EMAIL = 'contato@edugital.com.br';
export const SUPPORT_WHATSAPP = '5548998422247';
export const SUPPORT_WHATSAPP_LINK = `https://wa.me/${SUPPORT_WHATSAPP}`;

