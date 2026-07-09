# GESCO Consultorías — Sitio web

Proyecto de aprendizaje full-stack: landing page para GESCO Consultorías
(firma de consultoría para ISP's) con formulario de contacto funcional.

## Stack

- **Frontend:** React 18 + Vite + Framer Motion
- **Backend:** Node.js + Express + Nodemailer (Gmail)

## Estructura

```
gesco-portafolio/
├── frontend/   → sitio web (React + Vite)
└── backend/    → API del formulario de contacto (Express)
```

## Cómo correr el proyecto

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
# Edita .env y coloca tu GMAIL_USER y GMAIL_APP_PASSWORD reales
npm run dev
```

El servidor queda en `http://localhost:4000`. Puedes probar que está vivo
en `http://localhost:4000/api/health`.

### 2. Frontend

En otra terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

El sitio queda en `http://localhost:5173`.

## Cómo generar la contraseña de aplicación de Gmail

1. Activa la verificación en 2 pasos en tu cuenta de Gmail.
2. Ve a https://myaccount.google.com/apppasswords
3. Crea una contraseña de aplicación (16 dígitos, sin espacios).
4. Pégala en `backend/.env` como `GMAIL_APP_PASSWORD`.

Nunca subas el archivo `.env` a git — ya está excluido en `.gitignore`.

## Próximos pasos sugeridos (para seguir aprendiendo)

- Agregar tests al middleware `validarContacto` con Vitest o Jest.
- Desplegar el frontend en Vercel/Netlify y el backend en Render/Railway.
- Agregar rate limiting al endpoint `/api/contacto` para evitar spam.
