# 📱 NexoCRM - CRM Personal con React Native

NexoCRM es una aplicación móvil construida con **React Native** y **Expo**, diseñada como un CRM personal para gestionar **contactos**, **eventos del calendario**, **notificaciones** y **preferencias de usuario**.

---

## 🚀 Instalación

### Requisitos previos

- Node.js >= 18
- Expo CLI instalado globalmente:  
```bash
npm install -g expo-cli
```

### Instalación del proyecto

```bash
git clone https://github.com/tu-usuario/nexocrm.git
cd nexocrm
npm install
```

### Ejecución local

```bash
npm start
```

Esto abrirá **Expo DevTools** en tu navegador. Puedes escanear el código QR con la app de **Expo Go** para probarlo en un dispositivo físico.

---

## 📦 Link de instalación en Expo

📲 **Instálalo directamente en tu celular usando este link (Expo Go):**
🔗 [https://expo.dev/@TU\_USUARIO/nexocrm]()

---

## 🧠 Arquitectura del Proyecto

* **Feature First**
* **Arquitectura CLEAN**
* **MVVM (Model - View - ViewModel)**
* **Atomic Design** (para componentes de UI)

---

## 🔧 Tecnologías y Librerías

* **React Native (v0.79)**
* **Expo (v53)**
* **TypeScript**
* **React Navigation**
* **Zustand** (estado global)
* **Tailwind para React Native**
* **Zod** (validación)
* **expo-contacts**
* **expo-calendar**
* **expo-notifications**

---

## 🔌 Integraciones Nativas

| Integración        | Uso dentro de la app                       |
| ------------------ | ------------------------------------------ |
| expo-contacts      | Leer contactos del dispositivo             |
| expo-calendar      | Mostrar eventos del calendario del usuario |
| expo-notifications | Simulación de notificaciones locales       |

---

## ✅ Funcionalidades por Módulo

### 📇 Contactos

* Visualización de contactos reales.
* Soporte para múltiples correos y teléfonos.
* Estados vacíos y errores personalizados.
* UI adaptada a tema claro/oscuro.

### 📆 Calendario

* Lista de eventos del calendario del sistema.
* Detalles por evento: título, duración, etc.
* Estilo unificado con la app.

### 🔔 Notificaciones

* Lista de notificaciones simuladas.
* Contador de notificaciones no leídas.
* Visualización simple y funcional.

### 📊 Dashboard

* Estadísticas generales:

* Total de contactos.
* Total de eventos próximos.
* Total de notificaciones recientes.
* Conexión con los demás módulos.

### ⚙️ Ajustes

* Cambio de idioma (placeholder).
* Cambio de tema (claro / oscuro).
* Notificaciones activadas o desactivadas.