/**
 * modal.js - Implementação de modais, pop-ups e notificações para Edugital+
 */

/**
 * Inicializa funcionalidades de modais
 */
function initModal() {
    // Configurar modais existentes na página
    setupModals();
    
    // Configurar notificações
    setupNotifications();
    
    console.log('Modais inicializados');
}

/**
 * Configurar modais existentes no documento
 */
function setupModals() {
    // Configurar links que abrem modais
    const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetModal = document.querySelector(this.getAttribute('data-target'));
            
            if (targetModal) {
                openModal(targetModal);
            }
        });
    });
    
    // Configurar botões para fechar modais
    const closeButtons = document.querySelectorAll('.modal-close, [data-dismiss="modal"]');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            
            if (modal) {
                closeModal(modal);
            }
        });
    });
    
    // Fechar modal ao clicar fora
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal') && !e.target.hasAttribute('data-static')) {
            closeModal(e.target);
        }
    });
    
    // Suporte a tecla ESC para fechar modais
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal.active');
            
            openModals.forEach(modal => {
                if (!modal.hasAttribute('data-static')) {
                    closeModal(modal);
                }
            });
        }
    });
}

/**
 * Abrir um modal
 * @param {HTMLElement} modal - Elemento do modal a ser aberto
 */
function openModal(modal) {
    // Adicionar classe de modal ativo
    modal.classList.add('active');
    
    // Adicionar classe ao body para evitar scroll
    document.body.classList.add('modal-open');
    
    // Focar no primeiro elemento interativo do modal para acessibilidade
    setTimeout(() => {
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        
        if (focusable.length) {
            focusable[0].focus();
        }
    }, 100);
    
    // Disparar evento
    modal.dispatchEvent(new CustomEvent('modal:open'));
}

/**
 * Fechar um modal
 * @param {HTMLElement} modal - Elemento do modal a ser fechado
 */
function closeModal(modal) {
    // Remover classe ativa
    modal.classList.remove('active');
    
    // Verificar se há outros modais abertos
    const openModals = document.querySelectorAll('.modal.active');
    
    if (openModals.length === 0) {
        // Remover classe do body apenas se não houver outros modais
        document.body.classList.remove('modal-open');
    }
    
    // Disparar evento
    modal.dispatchEvent(new CustomEvent('modal:close'));
}

/**
 * Criar um novo modal dinamicamente
 * @param {Object} options - Opções de configuração do modal
 * @returns {HTMLElement} - Elemento do modal criado
 */
function createModal(options = {}) {
    const defaults = {
        id: 'dynamic-modal-' + Date.now(),
        title: 'Modal',
        content: '',
        size: 'medium', // small, medium, large
        closeButton: true,
        backdrop: true,
        buttons: [],
        onOpen: null,
        onClose: null
    };
    
    const config = { ...defaults, ...options };
    
    // Criar estrutura do modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = config.id;
    
    if (!config.backdrop) {
        modal.setAttribute('data-static', 'true');
    }
    
    const modalDialog = document.createElement('div');
    modalDialog.className = `modal-dialog modal-${config.size}`;
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Header do modal
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'modal-title';
    modalTitle.innerHTML = config.title;
    
    modalHeader.appendChild(modalTitle);
    
    if (config.closeButton) {
        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close';
        closeButton.setAttribute('aria-label', 'Fechar');
        closeButton.innerHTML = '&times;';
        
        closeButton.addEventListener('click', () => {
            closeModal(modal);
        });
        
        modalHeader.appendChild(closeButton);
    }
    
    // Body do modal
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    
    if (typeof config.content === 'string') {
        modalBody.innerHTML = config.content;
    } else if (config.content instanceof HTMLElement) {
        modalBody.appendChild(config.content);
    }
    
    // Footer do modal (se houver botões)
    let modalFooter = null;
    
    if (config.buttons.length > 0) {
        modalFooter = document.createElement('div');
        modalFooter.className = 'modal-footer';
        
        config.buttons.forEach(button => {
            const btnElement = document.createElement('button');
            btnElement.type = 'button';
            btnElement.className = `btn ${button.class || 'btn-secondary'}`;
            btnElement.innerHTML = button.text;
            
            if (button.id) {
                btnElement.id = button.id;
            }
            
            if (typeof button.handler === 'function') {
                btnElement.addEventListener('click', (e) => {
                    button.handler(e, modal);
                });
            }
            
            modalFooter.appendChild(btnElement);
        });
    }
    
    // Montar estrutura
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    
    if (modalFooter) {
        modalContent.appendChild(modalFooter);
    }
    
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);
    
    // Adicionar ao body
    document.body.appendChild(modal);
    
    // Adicionar eventos
    if (typeof config.onOpen === 'function') {
        modal.addEventListener('modal:open', config.onOpen);
    }
    
    if (typeof config.onClose === 'function') {
        modal.addEventListener('modal:close', config.onClose);
    }
    
    // Fechar ao clicar fora (se backdrop permitir)
    if (config.backdrop) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    }
    
    return modal;
}

/**
 * Configurar sistema de notificações
 */
function setupNotifications() {
    // Criar container para notificações se não existir
    let notificationContainer = document.querySelector('.notification-container');
    
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
    }
}

/**
 * Mostrar uma notificação
 * @param {Object} options - Opções da notificação
 */
function showNotification(options = {}) {
    const defaults = {
        type: 'info', // info, success, warning, error
        title: '',
        message: '',
        duration: 5000,
        closable: true,
        position: 'top-right' // top-right, top-left, bottom-right, bottom-left
    };
    
    const config = { ...defaults, ...options };
    
    // Obter container de notificações
    let container = document.querySelector('.notification-container');
    
    // Criar container se não existir
    if (!container) {
        container = document.createElement('div');
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    
    // Adicionar classe de posição
    container.className = `notification-container ${config.position}`;
    
    // Criar notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${config.type}`;
    
    // Adicionar título se especificado
    if (config.title) {
        const title = document.createElement('div');
        title.className = 'notification-title';
        title.innerHTML = config.title;
        notification.appendChild(title);
    }
    
    // Adicionar mensagem
    const message = document.createElement('div');
    message.className = 'notification-message';
    message.innerHTML = config.message;
    notification.appendChild(message);
    
    // Adicionar botão de fechar
    if (config.closable) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'notification-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.setAttribute('aria-label', 'Fechar');
        
        closeBtn.addEventListener('click', () => {
            closeNotification(notification);
        });
        
        notification.appendChild(closeBtn);
    }
    
    // Adicionar ao container
    container.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto-fechar após duração especificada
    if (config.duration > 0) {
        setTimeout(() => {
            closeNotification(notification);
        }, config.duration);
    }
    
    return notification;
}

/**
 * Fechar uma notificação
 * @param {HTMLElement} notification - Elemento da notificação
 */
function closeNotification(notification) {
    // Animar saída
    notification.classList.remove('show');
    
    // Remover após animação
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

/**
 * Helpers para tipos específicos de notificações
 */
const notify = {
    success: function(message, options = {}) {
        return showNotification({
            type: 'success',
            title: 'Sucesso',
            message,
            ...options
        });
    },
    
    error: function(message, options = {}) {
        return showNotification({
            type: 'error',
            title: 'Erro',
            message,
            ...options
        });
    },
    
    warning: function(message, options = {}) {
        return showNotification({
            type: 'warning',
            title: 'Atenção',
            message,
            ...options
        });
    },
    
    info: function(message, options = {}) {
        return showNotification({
            type: 'info',
            title: 'Informação',
            message,
            ...options
        });
    }
}; 