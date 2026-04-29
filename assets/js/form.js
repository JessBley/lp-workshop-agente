/**
 * form.js - Validação e manipulação de formulários da Edugital+
 */

/**
 * Inicializa a validação de formulários
 */
function initForms() {
    // Inicializar validação em formulários de contato
    setupContactForm();
    
    // Inicializar validação em formulários de inscrição
    setupSubscriptionForm();
    
    // Inicializar máscaras para campos
    setupInputMasks();
    
    console.log('Formulários inicializados');
}

/**
 * Configura validação e envio do formulário de contato
 */
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    // Adicionar validação aos campos
    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');
    
    // Validação de dados ao enviar
    contactForm.addEventListener('submit', function(e) {
        let isValid = true;
        
        // Validar nome
        if (nameInput && nameInput.value.trim() === '') {
            showError(nameInput, 'Por favor, informe seu nome');
            isValid = false;
        } else if (nameInput) {
            clearError(nameInput);
        }
        
        // Validar email
        if (emailInput && !isValidEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, informe um email válido');
            isValid = false;
        } else if (emailInput) {
            clearError(emailInput);
        }
        
        // Validar mensagem
        if (messageInput && messageInput.value.trim() === '') {
            showError(messageInput, 'Por favor, escreva sua mensagem');
            isValid = false;
        } else if (messageInput) {
            clearError(messageInput);
        }
        
        // Impedir envio se houver erros
        if (!isValid) {
            e.preventDefault();
            return;
        }
        
        // Enviar via Ajax se necessário
        if (contactForm.getAttribute('data-ajax') === 'true') {
            e.preventDefault();
            submitFormAjax(contactForm, handleContactFormResponse);
        }
    });
    
    // Validação em tempo real
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                showError(this, 'Por favor, informe seu nome');
            } else {
                clearError(this);
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (!isValidEmail(this.value)) {
                showError(this, 'Por favor, informe um email válido');
            } else {
                clearError(this);
            }
        });
    }
}

/**
 * Configura validação e envio do formulário de inscrição
 */
function setupSubscriptionForm() {
    const subscriptionForm = document.getElementById('subscription-form');
    
    if (!subscriptionForm) return;
    
    // Adicionar validação aos campos
    const nameInput = subscriptionForm.querySelector('input[name="name"]');
    const emailInput = subscriptionForm.querySelector('input[name="email"]');
    const phoneInput = subscriptionForm.querySelector('input[name="phone"]');
    const planInput = subscriptionForm.querySelector('select[name="plan"]');
    
    // Validação de dados ao enviar
    subscriptionForm.addEventListener('submit', function(e) {
        let isValid = true;
        
        // Validar nome
        if (nameInput && nameInput.value.trim() === '') {
            showError(nameInput, 'Por favor, informe seu nome');
            isValid = false;
        } else if (nameInput) {
            clearError(nameInput);
        }
        
        // Validar email
        if (emailInput && !isValidEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, informe um email válido');
            isValid = false;
        } else if (emailInput) {
            clearError(emailInput);
        }
        
        // Validar telefone
        if (phoneInput && !isValidPhone(phoneInput.value)) {
            showError(phoneInput, 'Por favor, informe um telefone válido');
            isValid = false;
        } else if (phoneInput) {
            clearError(phoneInput);
        }
        
        // Validar plano
        if (planInput && planInput.value === '') {
            showError(planInput, 'Por favor, selecione um plano');
            isValid = false;
        } else if (planInput) {
            clearError(planInput);
        }
        
        // Impedir envio se houver erros
        if (!isValid) {
            e.preventDefault();
            return;
        }
        
        // Enviar via Ajax se necessário
        if (subscriptionForm.getAttribute('data-ajax') === 'true') {
            e.preventDefault();
            submitFormAjax(subscriptionForm, handleSubscriptionFormResponse);
        }
    });
}

/**
 * Configura máscaras para inputs específicos
 */
function setupInputMasks() {
    // Máscara para telefone
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                if (value.length > 2) {
                    value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
                }
                if (value.length > 10) {
                    value = value.substring(0, 10) + '-' + value.substring(10);
                }
            }
            
            e.target.value = value;
        });
    });
    
    // Máscara para CPF
    const cpfInputs = document.querySelectorAll('input[data-mask="cpf"]');
    
    cpfInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                if (value.length > 3) {
                    value = value.substring(0, 3) + '.' + value.substring(3);
                }
                if (value.length > 7) {
                    value = value.substring(0, 7) + '.' + value.substring(7);
                }
                if (value.length > 11) {
                    value = value.substring(0, 11) + '-' + value.substring(11);
                }
            }
            
            e.target.value = value;
        });
    });
}

/**
 * Funções auxiliares para validação
 */

/**
 * Verificar se um email é válido
 * @param {string} email - Email a ser verificado
 * @returns {boolean} - true se for válido, false caso contrário
 */
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Verificar se um telefone é válido
 * @param {string} phone - Telefone a ser verificado
 * @returns {boolean} - true se for válido, false caso contrário
 */
function isValidPhone(phone) {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 11;
}

/**
 * Exibir mensagem de erro para um campo
 * @param {HTMLElement} input - Campo com erro
 * @param {string} message - Mensagem de erro
 */
function showError(input, message) {
    // Remover mensagem anterior se existir
    clearError(input);
    
    // Adicionar classe de erro
    input.classList.add('error');
    
    // Criar elemento de mensagem
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error-message';
    errorMsg.textContent = message;
    
    // Inserir após o input
    input.parentNode.insertBefore(errorMsg, input.nextSibling);
}

/**
 * Remover mensagem de erro de um campo
 * @param {HTMLElement} input - Campo a limpar
 */
function clearError(input) {
    input.classList.remove('error');
    
    const errorMsg = input.parentNode.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

/**
 * Enviar formulário via Ajax
 * @param {HTMLFormElement} form - Formulário a enviar
 * @param {Function} callback - Função para tratar a resposta
 */
function submitFormAjax(form, callback) {
    // Mostrar feedback de envio
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        const originalText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Enviando...';
    }
    
    // Obter dados do formulário
    const formData = new FormData(form);
    
    // Configurar requisição
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Restaurar botão
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }
        
        // Processar resposta
        if (typeof callback === 'function') {
            callback(data, form);
        }
    })
    .catch(error => {
        console.error('Erro ao enviar formulário:', error);
        
        // Restaurar botão
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }
        
        // Mostrar mensagem de erro
        const formMessage = form.querySelector('.form-message') || document.createElement('div');
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Ocorreu um erro ao enviar o formulário. Tente novamente.';
        
        if (!form.querySelector('.form-message')) {
            form.prepend(formMessage);
        }
    });
}

/**
 * Tratar resposta do formulário de contato
 * @param {Object} data - Dados da resposta
 * @param {HTMLFormElement} form - Formulário enviado
 */
function handleContactFormResponse(data, form) {
    const formMessage = form.querySelector('.form-message') || document.createElement('div');
    formMessage.className = 'form-message';
    
    if (data.success) {
        // Limpar formulário
        form.reset();
        
        // Mostrar mensagem de sucesso
        formMessage.classList.add('success');
        formMessage.textContent = data.message || 'Mensagem enviada com sucesso!';
    } else {
        // Mostrar erros
        formMessage.classList.add('error');
        formMessage.textContent = data.message || 'Ocorreu um erro ao enviar sua mensagem.';
    }
    
    if (!form.querySelector('.form-message')) {
        form.prepend(formMessage);
    }
}

/**
 * Tratar resposta do formulário de inscrição
 * @param {Object} data - Dados da resposta
 * @param {HTMLFormElement} form - Formulário enviado
 */
function handleSubscriptionFormResponse(data, form) {
    const formMessage = form.querySelector('.form-message') || document.createElement('div');
    formMessage.className = 'form-message';
    
    if (data.success) {
        // Limpar formulário
        form.reset();
        
        // Mostrar mensagem de sucesso
        formMessage.classList.add('success');
        formMessage.textContent = data.message || 'Inscrição realizada com sucesso!';
        
        // Redirecionar para página de pagamento se necessário
        if (data.redirect) {
            setTimeout(() => {
                window.location.href = data.redirect;
            }, 1500);
        }
    } else {
        // Mostrar erros
        formMessage.classList.add('error');
        formMessage.textContent = data.message || 'Ocorreu um erro ao processar sua inscrição.';
        
        // Adicionar erros específicos por campo se existirem
        if (data.errors && typeof data.errors === 'object') {
            Object.keys(data.errors).forEach(field => {
                const input = form.querySelector(`[name="${field}"]`);
                if (input) {
                    showError(input, data.errors[field]);
                }
            });
        }
    }
    
    if (!form.querySelector('.form-message')) {
        form.prepend(formMessage);
    }
} 