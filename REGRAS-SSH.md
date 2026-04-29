# 🔐 Regras e Referências SSH — Edugital

## Dados de Acesso

| Campo        | Valor                        |
|--------------|------------------------------|
| **Host/IP**  | `162.215.12.44`              |
| **Porta**    | `22`                         |
| **Usuário**  | `edugital1`                  |
| **Chave privada** | `~/.ssh/edugital_rsa`   |
| **cPanel**   | https://edugital.com.br/cpanel |
| **cPanel user** | `edugital1`              |

---

## Conectar no Servidor

```bash
ssh -i ~/.ssh/edugital_rsa edugital1@162.215.12.44
```

## Copiar Arquivo para o Servidor (SCP)

```bash
scp -i ~/.ssh/edugital_rsa arquivo.zip edugital1@162.215.12.44:/home/edugital1/public_html/
```

## Copiar Pasta Inteira para o Servidor

```bash
scp -r -i ~/.ssh/edugital_rsa ./pasta-local/ edugital1@162.215.12.44:/home/edugital1/public_html/destino/
```

## Executar Comando Remoto (sem abrir terminal)

```bash
ssh -i ~/.ssh/edugital_rsa edugital1@162.215.12.44 "comando aqui"
```

---

## Estrutura de Diretórios do Servidor

| Domínio/Subdomínio              | Caminho no Servidor                              |
|----------------------------------|--------------------------------------------------|
| `edugital.com.br`               | `/home/edugital1/public_html/`                   |
| `escola.edugital.com.br`        | `/home/edugital1/escola.edugital.com.br/`        |
| `app.edugital.com.br`           | `/home/edugital1/app.edugital.com.br/`           |

---

## Config SSH Opcional (~/.ssh/config)

Para conectar apenas com `ssh edugital`, crie o arquivo `~/.ssh/config`:

```
Host edugital
  HostName 162.215.12.44
  User edugital1
  IdentityFile ~/.ssh/edugital_rsa
  Port 22
```

Após isso, basta usar:
```bash
ssh edugital
```

---

## Localização das Chaves

- **Chave privada:** `C:\Users\Jéssica Bley\.ssh\edugital_rsa`
- **Chave pública:**  `C:\Users\Jéssica Bley\.ssh\edugital_rsa.pub`

> ⚠️ **Nunca compartilhe a chave privada (`edugital_rsa`).** Somente a chave pública (`.pub`) pode ser compartilhada.

---

## Deploy React (Vite) via SSH

```bash
# 1. Build local
cd react-migration
npm run build

# 2. Enviar para o servidor
scp -r -i ~/.ssh/edugital_rsa ./dist/* edugital1@162.215.12.44:/home/edugital1/escola.edugital.com.br/workshopagente/
```
