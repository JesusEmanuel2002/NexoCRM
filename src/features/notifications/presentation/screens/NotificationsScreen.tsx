import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useNotificationsViewModel } from '../viewmodels/useNotificationsViewModel';
import { NotificationList } from '../components/NotificationList';
import { ErrorState } from '@/shared/components/molecules/ErrorState';
import { EmptyState } from '@/shared/components/molecules/EmptyState';
import { useTheme } from '@/theme';

// Pantalla principal para mostrar las notificaciones
export const NotificationsScreen = () => {
    const { notifications, loading, error } = useNotificationsViewModel();
    const theme = useTheme();

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
  }

  if (error) {
    return <ErrorState message="Error al cargar las notificaciones." />;
  }

  if (notifications.length === 0) {
    return <EmptyState message="No hay notificaciones disponibles." />;
  }

  return <NotificationList notifications={notifications} />;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});