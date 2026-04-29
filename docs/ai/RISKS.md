# ⚠️ RISKS — Análise de Riscos e Pontos Frágeis

## 1. Riscos Técnicos
- **Quebra de Assets em Produção**: A dependência de caminhos absolutos como `/workshopagente/` no código React (hardcoded) torna o projeto frágil se o subpath de deploy mudar no futuro.
- **Conflito de Versão**: A presença do projeto React dentro de uma subpasta (`react-migration`) enquanto a raiz contém arquivos HTML legados pode causar confusão em ferramentas de deploy automático (CI/CD).
- **Sobrescrita de Arquivos**: O processo de build manual e upload via SSH (conforme documentado no `SYSTEM_MAP` interno) é propenso a erro humano, como apagar a pasta de imagens errada.

## 2. Pontos Frágeis
- **Formulário Google**: O uso de Iframe para o formulário de contato retira o controle da Edugital sobre a confirmação de envio (não há evento JS disparado para a LP quando o usuário envia o form).
- **Manutenibilidade de Estilos**: O CSS está crescendo em arquivos separados (`styles/`) mas sem uma convenção rígida (BEM parcial), o que pode gerar colisões de nomes se novos componentes forem adicionados.

## 3. Dívida Técnica
- **Sub-otimização de Imagens**: Muitos logos importados do projeto legado não estão otimizados para web, impactando o Core Web Vitals (performance).
- **Links Hardcoded**: A lógica de "Call to Action" espalhada por múltiplos arquivos dificulta ajustes rápidos de preço ou troca de plataforma de vendas.
