/**
 * api.js - Comunicação com APIs externas da Edugital+
 */

/**
 * Classe para gerenciar comunicação com API
 */
class EdugitalAPI {
    /**
     * Inicializar API com configurações básicas
     * @param {Object} options - Opções de configuração
     */
    constructor(options = {}) {
        this.baseURL = options.baseURL || '/api';
        this.timeout = options.timeout || 30000;
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options.headers
        };
        
        // Token de autenticação (se disponível)
        this.token = localStorage.getItem('auth_token') || null;
        
        if (this.token) {
            this.headers['Authorization'] = `Bearer ${this.token}`;
        }
    }
    
    /**
     * Definir token de autenticação
     * @param {string} token - Token JWT ou similar
     */
    setToken(token) {
        this.token = token;
        this.headers['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('auth_token', token);
    }
    
    /**
     * Remover token de autenticação
     */
    removeToken() {
        this.token = null;
        delete this.headers['Authorization'];
        localStorage.removeItem('auth_token');
    }
    
    /**
     * Fazer requisição para a API
     * @param {string} endpoint - Endpoint da API
     * @param {Object} options - Opções da requisição
     * @returns {Promise} - Promise com a resposta
     */
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        
        const fetchOptions = {
            method: options.method || 'GET',
            headers: {
                ...this.headers,
                ...options.headers
            },
            credentials: 'include'
        };
        
        // Adicionar corpo da requisição se necessário
        if (options.data) {
            fetchOptions.body = JSON.stringify(options.data);
        }
        
        try {
            // Adicionar timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);
            fetchOptions.signal = controller.signal;
            
            const response = await fetch(url, fetchOptions);
            
            // Limpar timeout
            clearTimeout(timeoutId);
            
            // Verificar se a resposta foi bem-sucedida
            if (!response.ok) {
                const errorData = await response.json();
                throw {
                    status: response.status,
                    statusText: response.statusText,
                    data: errorData
                };
            }
            
            // Verificar tipo de conteúdo
            const contentType = response.headers.get('content-type');
            
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            } else {
                return await response.text();
            }
        } catch (error) {
            // Tratar erros de timeout
            if (error.name === 'AbortError') {
                throw {
                    status: 408,
                    statusText: 'Request Timeout',
                    data: { message: 'A requisição excedeu o tempo limite.' }
                };
            }
            
            throw error;
        }
    }
    
    /**
     * Métodos simplificados para diferentes verbos HTTP
     */
    
    /**
     * Fazer requisição GET
     * @param {string} endpoint - Endpoint da API
     * @param {Object} params - Parâmetros da query
     * @returns {Promise} - Promise com a resposta
     */
    async get(endpoint, params = {}) {
        const url = new URL(`${this.baseURL}${endpoint}`, window.location.origin);
        
        // Adicionar parâmetros à URL
        Object.keys(params).forEach(key => {
            url.searchParams.append(key, params[key]);
        });
        
        return this.request(url.pathname + url.search, { method: 'GET' });
    }
    
    /**
     * Fazer requisição POST
     * @param {string} endpoint - Endpoint da API
     * @param {Object} data - Dados a serem enviados
     * @returns {Promise} - Promise com a resposta
     */
    async post(endpoint, data = {}) {
        return this.request(endpoint, {
            method: 'POST',
            data
        });
    }
    
    /**
     * Fazer requisição PUT
     * @param {string} endpoint - Endpoint da API
     * @param {Object} data - Dados a serem enviados
     * @returns {Promise} - Promise com a resposta
     */
    async put(endpoint, data = {}) {
        return this.request(endpoint, {
            method: 'PUT',
            data
        });
    }
    
    /**
     * Fazer requisição PATCH
     * @param {string} endpoint - Endpoint da API
     * @param {Object} data - Dados a serem enviados
     * @returns {Promise} - Promise com a resposta
     */
    async patch(endpoint, data = {}) {
        return this.request(endpoint, {
            method: 'PATCH',
            data
        });
    }
    
    /**
     * Fazer requisição DELETE
     * @param {string} endpoint - Endpoint da API
     * @returns {Promise} - Promise com a resposta
     */
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}

/**
 * API para cursos
 */
class CourseAPI extends EdugitalAPI {
    /**
     * Obter lista de cursos
     * @param {Object} filters - Filtros para a busca
     * @returns {Promise} - Promise com a lista de cursos
     */
    async getCourses(filters = {}) {
        return this.get('/courses', filters);
    }
    
    /**
     * Obter detalhes de um curso
     * @param {string|number} id - ID do curso
     * @returns {Promise} - Promise com os detalhes do curso
     */
    async getCourse(id) {
        return this.get(`/courses/${id}`);
    }
    
    /**
     * Obter aulas de um curso
     * @param {string|number} courseId - ID do curso
     * @returns {Promise} - Promise com as aulas do curso
     */
    async getLessons(courseId) {
        return this.get(`/courses/${courseId}/lessons`);
    }
    
    /**
     * Marcar aula como concluída
     * @param {string|number} lessonId - ID da aula
     * @returns {Promise} - Promise com a confirmação
     */
    async markLessonAsCompleted(lessonId) {
        return this.post(`/lessons/${lessonId}/complete`);
    }
}

/**
 * API para usuários
 */
class UserAPI extends EdugitalAPI {
    /**
     * Fazer login
     * @param {string} email - Email do usuário
     * @param {string} password - Senha do usuário
     * @returns {Promise} - Promise com os dados do usuário
     */
    async login(email, password) {
        const response = await this.post('/auth/login', { email, password });
        
        if (response.token) {
            this.setToken(response.token);
        }
        
        return response;
    }
    
    /**
     * Fazer logout
     * @returns {Promise} - Promise com a confirmação
     */
    async logout() {
        const response = await this.post('/auth/logout');
        this.removeToken();
        return response;
    }
    
    /**
     * Registrar novo usuário
     * @param {Object} userData - Dados do usuário
     * @returns {Promise} - Promise com os dados do usuário
     */
    async register(userData) {
        return this.post('/auth/register', userData);
    }
    
    /**
     * Obter dados do usuário atual
     * @returns {Promise} - Promise com os dados do usuário
     */
    async me() {
        return this.get('/users/me');
    }
    
    /**
     * Atualizar dados do usuário
     * @param {Object} userData - Novos dados do usuário
     * @returns {Promise} - Promise com os dados atualizados
     */
    async updateProfile(userData) {
        return this.put('/users/me', userData);
    }
    
    /**
     * Alterar senha
     * @param {string} currentPassword - Senha atual
     * @param {string} newPassword - Nova senha
     * @returns {Promise} - Promise com a confirmação
     */
    async changePassword(currentPassword, newPassword) {
        return this.post('/users/change-password', {
            current_password: currentPassword,
            new_password: newPassword
        });
    }
}

/**
 * API para assinaturas e pagamentos
 */
class SubscriptionAPI extends EdugitalAPI {
    /**
     * Obter planos disponíveis
     * @returns {Promise} - Promise com os planos
     */
    async getPlans() {
        return this.get('/plans');
    }
    
    /**
     * Assinar um plano
     * @param {string|number} planId - ID do plano
     * @param {Object} paymentData - Dados de pagamento
     * @returns {Promise} - Promise com os detalhes da assinatura
     */
    async subscribe(planId, paymentData) {
        return this.post('/subscriptions', {
            plan_id: planId,
            payment: paymentData
        });
    }
    
    /**
     * Obter assinatura atual
     * @returns {Promise} - Promise com os detalhes da assinatura
     */
    async getCurrentSubscription() {
        return this.get('/subscriptions/current');
    }
    
    /**
     * Cancelar assinatura
     * @param {string} reason - Motivo do cancelamento
     * @returns {Promise} - Promise com a confirmação
     */
    async cancelSubscription(reason = '') {
        return this.post('/subscriptions/cancel', { reason });
    }
}

// Exportar instâncias das APIs
const api = {
    courses: new CourseAPI(),
    users: new UserAPI(),
    subscriptions: new SubscriptionAPI()
};

// Expor globalmente
window.edugitalAPI = api; 