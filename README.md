# 📌 WorkTime - Gerenciador de Atividades

Uma aplicação web para gerenciar atividades e acompanhar o tempo gasto.

## 🚀 Tecnologias Usadas

- **Frontend:** React.js + TypeScript
- **Backend:** Node.js + Express + PostgreSQL
- **Banco de Dados:** PostgreSQL
- **Autenticação:** JWT (JSON Web Token)

---

## 📌 Como Executar o Projeto

### **1️⃣ Clonar o Repositório**

```sh
git clone https://github.com/davilosoas/workTime.git
cd workTime
```

---

### **2️⃣ Configurar o Backend**

```sh
cd backend
npm install  # Instala as dependências
cp .env.example .env  # Criar arquivo de variáveis de ambiente
nano .env  # Configure suas credenciais do banco de dados
npm run dev  # Inicia o backend
```

🔹 O backend será iniciado em **`http://localhost:5000`**.

---

### **3️⃣ Configurar o Frontend**

```sh
cd ../frontend
npm install  # Instala as dependências
npm start  # Inicia o frontend
```

🔹 O frontend será iniciado em **`http://localhost:3000`**.

---

## 📌 Configuração do Banco de Dados

1. **Certifique-se de que o PostgreSQL está rodando.**
2. **Crie um banco de dados chamado `activity_tracker`.**
3. **Configure as credenciais no `.env` do backend**:

📍 **📁 `backend/.env`**

```ini
DB_NAME=activity_tracker
DB_USER=tracker_user
DB_PASSWORD=tracker_password
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=sua_chave_secreta
PORT=5000
```

---

## 📌 Funcionalidades

✅ **Cadastro e login de usuários**.  
✅ **Cadastro de atividades com horário de início e fim**.  
✅ **Relatório de tempo gasto por dia**.  
✅ **Proteção de rotas para usuários autenticados**.

---

## 📌 Estrutura do Projeto

📁 **workTime/**  
 ├── 📁 **backend/** _(Node.js + Express + PostgreSQL)_  
 │ ├── 📁 config/  
 │ ├── 📁 controllers/  
 │ ├── 📁 models/  
 │ ├── 📁 routes/  
 │ ├── 📁 services/  
 │ ├── 📄 server.js _(Arquivo principal do backend)_  
 │ ├── 📄 package.json _(Dependências do backend)_  
 │ ├── 📄 .env _(Configurações do banco de dados)_  
 │ └── 📄 README.md _(Este arquivo)_  
 │  
 ├── 📁 **frontend/** _(React.js + TypeScript)_  
 │ ├── 📁 src/  
 │ ├── 📄 package.json _(Dependências do frontend)_  
 │ ├── 📄 tsconfig.json _(Configuração do TypeScript)_  
 │ ├── 📄 public/ _(Arquivos estáticos)_  
 │ ├── 📄 src/ _(Código do React)_  
 │ ├── 📄 App.tsx _(Componente principal do frontend)_  
 │ └── 📄 README.md _(Este arquivo)_  
 │  
 ├── 📄 README.md _(Documentação principal do projeto)_  
 ├── 📄 package.json _(Dependências globais do projeto)_  
 ├── 📄 .gitignore _(Arquivos ignorados pelo Git)_

---

## 📌 Contato

📧 Email: davilosoas@gmail.com  
🐙 GitHub: [Davilosoas](https://github.com/davilosoas)

---
