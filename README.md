# 🎰 iGaming SaaS Platform (Production-Grade Architecture)

A **full iGaming-style SaaS platform** built with modern backend and frontend architecture, designed using **real casino engineering patterns** such as ledger-first wallets, provably fair RNG, and server-authoritative real-time games.

> ⚠️ This project is for **engineering, simulation, and educational purposes**.  
> Real-money gambling requires proper licensing, compliance, and jurisdictional approval.

---

## 🚀 Features

### 🔐 Authentication & Security
- JWT-based authentication
- Role-based access (User / Admin)
- Rate limiting & abuse protection
- Server-authoritative game logic

### 💰 Wallet & Ledger System
- Ledger-first accounting model
- Atomic balance updates (MongoDB transactions)
- Locked balance for active bets
- Full transaction audit trail

### 🎲 Provably Fair RNG
- Cryptographically secure RNG
- Server seed + client seed system
- Hash verification for transparency
- Deterministic game outcomes

### 🚀 Real-Time Games
- Crash game (Socket.IO)
- Slot engine framework
- Dice game framework
- Real-time wallet sync

### 🧠 Risk & Audit
- Bet validation layer
- Balance consistency checks
- Suspicious activity flags
- Full round & transaction history

---

## 🧱 Tech Stack

### Backend
- Node.js (ES Modules)
- Express.js
- MongoDB + Mongoose
- Socket.IO
- Redis (optional, recommended)
- JWT Authentication

### Frontend
- React (Vite)
- Canvas / SVG animations
- Socket.IO Client
- Context-based state management

### Infrastructure
- Docker & Docker Compose
- Nginx (reverse proxy)
- PM2 (production process manager)

---

## 📁 Project Structure

```text
igaming-saas-platform/
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── config/
│   │   ├── models/
│   │   ├── engines/
│   │   ├── services/
│   │   ├── socket/
│   │   ├── routes/
│   │   └── middleware/
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── games/
│   │   ├── services/
│   │   └── sockets/
│   └── vite.config.js
│
├── infra/
│   ├── docker-compose.yml
│   ├── nginx.conf
│   └── pm2.config.js
│
├── shared/
│   ├── constants.js
│   ├── enums.js
│   └── validators.js
│
└── README.md
