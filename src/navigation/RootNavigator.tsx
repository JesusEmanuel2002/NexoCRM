import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactsScreen } from '../features/contacts/presentation/screens/ContactsScreen';
import { CalendarScreen } from '../features/calendar/presentation/screens/CalendarScreen';
import { DashboardScreen } from '../features/dashboard/presentation/screens/DashboardScreen';
import { NotificationsScreen } from '../features/notifications/presentation/screens/NotificationsScreen';
import { SettingsScreen } from '../features/settings/presentation/screens/SettingsScreen';

// Se define el tipo de rutas para el stack de navegación
export type RootStackParamList = {
  Dashboard: undefined;
  Contacts: undefined;
  Calendar: undefined;
  Notifications: undefined;
  Settings: undefined;
};

// Se crea el stack navigator principal de la aplicación
const Stack = createNativeStackNavigator<RootStackParamList>();

// Componente principal que configura la navegación entre pantallas
const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: true, // Muestra la cabecera en cada pantalla
      }}
    >
      {/* Pantalla principal del dashboard */}
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: 'Inicio' }}
      />

      {/* Pantalla para la gestión de contactos */}
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{ title: 'Contactos' }}
      />

      {/* Pantalla para visualizar eventos del calendario */}
      <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ title: 'Calendario' }}
      />

      {/* Pantalla para ver notificaciones */}
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: 'Notificaciones' }}
      />

      {/* Pantalla para la configuración del usuario */}
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Configuración' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;