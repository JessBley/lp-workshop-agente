class FAQ {
    constructor() {
        this.init();
    }

    init() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            
            if (question && answer && toggle) {
                // Set initial state
                answer.style.maxHeight = '0px';
                answer.style.overflow = 'hidden';
                answer.style.transition = 'max-height 0.3s ease-out';
                
                question.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                            const otherAnswer = otherItem.querySelector('.faq-answer');
                            const otherToggle = otherItem.querySelector('.faq-toggle');
                            if (otherAnswer && otherToggle) {
                                otherAnswer.style.maxHeight = '0px';
                                otherToggle.textContent = '+';
                            }
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                    if (!isActive) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        toggle.textContent = '−';
                    } else {
                        answer.style.maxHeight = '0px';
                        toggle.textContent = '+';
                    }
                });
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FAQ();
}); 