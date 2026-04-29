import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[Anty Gravity] Falha ao carregar o chunk da seção Lazy:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
          <h2>Ops! Tivemos um problema na rede.</h2>
          <p>Ocorreu uma falha ao carregar o conteúdo desta seção. Verifique sua conexão e tente carregar novamente.</p>
          <button 
            className="btn btn-primary" 
            onClick={() => window.location.reload()}
            style={{ marginTop: '20px' }}>
            Recarregar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
