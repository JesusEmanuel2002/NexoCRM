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

## 🚀 Instrucciones de instalación

### Requisitos previos

- Node.js v18 (recomendado por Expo)
- Expo CLI (instalar con `npm install -g expo-cli`)
- Cuenta en [Expo.dev](https://expo.dev/)

### Pasos para ejecutar la app localmente

1. **Clona el repositorio**:

```bash
git clone https://github.com/tu_usuario/nexocrm.git
cd nexocrm
````

2. **Instala las dependencias**:

```bash
npm install
```

3. **Ejecuta el proyecto en Expo Go (Android o iOS)**:

```bash
npm start
```

4. **Escanea el QR** con la app de **Expo Go** para ver la app en tu dispositivo.

---

## 🧠 Arquitectura del Proyecto

* **Feature First**
* **Arquitectura CLEAN**
* **MVVM (Model - View - ViewModel)**
* **Atomic Design** (para componentes de UI)

---

## 🧠 Estructura del proyecto

```
src/
├── features/              # Módulos principales del CRM (contacts, calendar, etc.)
│   └── contacts/          # Módulo para gestionar contactos
│   └── calendar/          # Módulo para eventos del calendario
│   └── dashboard/         # Vista principal con resumen de información
│   └── notifications/     # Módulo para ver notificaciones
│   └── settings/          # Módulo para preferencias del usuario
│
├── shared/                # Componentes reutilizables compartidos (UI: botones, estados, etc.)
├── navigation/            # Sistema de navegación principal (RootNavigator)
├── theme/                 # Colores, tipografía y estilos globales
```

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

## 📚 Librerías utilizadas y su propósito

| Librería                             | Propósito                                               |
| ------------------------------------ | ------------------------------------------------------- |
| **expo**                             | Framework base para desarrollo rápido con React Native  |
| **expo-contacts**                    | Acceso a contactos nativos del dispositivo              |
| **expo-calendar**                    | Lectura de eventos del calendario                       |
| **expo-notifications**               | Gestión de notificaciones locales y push                |
| **@react-navigation**                | Sistema de navegación entre pantallas                   |
| **zustand**                          | Manejo de estado global, simple y rápido                |
| **react-hook-form**                  | Manejo de formularios y validaciones                    |
| **zod**                              | Validación de esquemas de datos                         |
| **react-native-chart-kit**           | Gráficas y visualización de datos                       |
| **tailwind-react-native-classnames** | Estilado rápido y reutilizable con clases tipo Tailwind |
| **expo-sqlite**                      | (Opcional) Almacenamiento local de datos con SQLite     |

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
