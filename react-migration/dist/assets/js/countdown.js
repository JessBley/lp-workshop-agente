/**
 * countdown.js - Implementação de contador regressivo para ofertas da Edugital+
 */

/**
 * Inicializa os contadores regressivos na página
 */
function initCountdown() {
    // Inicializar contador na seção de oferta
    setupOfferCountdown();
    
    console.log('Contador inicializado');
}

/**
 * Configura o contador regressivo para ofertas limitadas
 * @param {Date|string|number} targetDate - Data alvo para o fim da contagem (Date, string ISO ou timestamp)
 * @param {string} containerId - ID do elemento que conterá o contador
 */
function setupOfferCountdown(targetDate = null, containerId = 'offer-countdown') {
    const countdownContainer = document.getElementById(containerId);
    
    if (!countdownContainer) return;
    
    // Configurar para 5 dias a partir de agora
    if (!targetDate) {
        targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 5); // 5 dias em vez de 24 horas
    } else if (typeof targetDate === 'string') {
        targetDate = new Date(targetDate);
    } else if (typeof targetDate === 'number') {
        targetDate = new Date(targetDate);
    }
    
    // Criar estrutura do contador
    const countdownItems = [
        { label: 'DIAS', value: 0, id: 'days' },
        { label: 'HORAS', value: 0, id: 'hours' },
        { label: 'MINUTOS', value: 0, id: 'minutes' },
        { label: 'SEGUNDOS', value: 0, id: 'seconds' }
    ];
    
    // Criar elementos HTML
    const countdownWrapper = document.createElement('div');
    countdownWrapper.className = 'countdown';
    
    countdownItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'countdown-item';
        
        const numberElement = document.createElement('div');
        numberElement.className = 'countdown-number';
        numberElement.id = item.id;
        numberElement.textContent = '00';
        
        const labelElement = document.createElement('div');
        labelElement.className = 'countdown-label';
        labelElement.textContent = item.label;
        
        itemElement.appendChild(numberElement);
        itemElement.appendChild(labelElement);
        countdownWrapper.appendChild(itemElement);
    });
    
    // Adicionar ao container
    countdownContainer.appendChild(countdownWrapper);
    
    // Função para atualizar o contador
    function updateCountdown() {
        const now = new Date();
        const distance = targetDate - now;
        
        // Verificar se a contagem acabou
        if (distance <= 0) {
            // Em vez de encerrar, reiniciar para mais 5 dias
            targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + 5);
            
            // Disparar evento para notificar que a oferta foi reiniciada
            const event = new CustomEvent('countdownRestarted', {
                detail: {
                    containerId: containerId,
                    newTargetDate: targetDate
                }
            });
            document.dispatchEvent(event);
            
            // Continuar a execução para atualizar imediatamente com os novos valores
        }
        
        // Calcular valores
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Atualizar interface
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        // Adicionar animação de pulso ao contador de segundos
        const secondsElement = document.getElementById('seconds');
        secondsElement.classList.add('pulse');
        
        // Remover a classe após a animação
        setTimeout(() => {
            secondsElement.classList.remove('pulse');
        }, 500);
    }
    
    // Atualizar imediatamente e depois a cada segundo
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Limpar intervalo quando a página for fechada ou alterada
    window.addEventListener('beforeunload', () => {
        clearInterval(countdownInterval);
    });
}

/**
 * Cria um contador simples de dias, horas, minutos e segundos
 * @param {number} duration - Duração em segundos
 * @param {string} elementId - ID do elemento que receberá o contador
 * @param {Function} callback - Função a ser chamada quando o contador chegar a zero
 */
function startSimpleCountdown(duration, elementId, callback) {
    const timerElement = document.getElementById(elementId);
    
    if (!timerElement) return;
    
    let timer = duration;
    let hours, minutes, seconds;
    
    function updateTimer() {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        
        timerElement.textContent = `${hours}:${minutes}:${seconds}`;
        
        if (--timer < 0) {
            clearInterval(interval);
            timer = 0;
            
            if (typeof callback === 'function') {
                callback();
            }
        }
    }
    
    // Atualizar imediatamente e depois a cada segundo
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return {
        clear: function() {
            clearInterval(interval);
        },
        reset: function(newDuration) {
            timer = newDuration || duration;
            updateTimer();
        }
    };
} 