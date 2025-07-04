import { View, StyleSheet } from 'react-native';
import { DashboardStatCard } from '../components/DashboardStatCard';
import { useDashboardViewModel } from '../viewmodels/useDashboardViewModel';
import { ErrorState } from '@/shared/components/molecules/ErrorState';
import { EmptyState } from '@/shared/components/molecules/EmptyState';
import { useTheme } from '@/theme';

// Pantalla principal del dashboard que muestra datos generales del CRM
export const DashboardScreen = () => {
  const { data, loading, error } = useDashboardViewModel();
  const theme = useTheme();

  if (loading) return <EmptyState message="Cargando información..." />;
  if (error) return <ErrorState message={error} />;
  if (!data) return <EmptyState message="Sin datos para mostrar." />;

  return (
    <View style={styles.container}>
      <DashboardStatCard label="Contactos" value={data.totalContacts} />
      <DashboardStatCard label="Eventos" value={data.upcomingEvents} />
      <DashboardStatCard label="Notificaciones" value={data.recentNotifications} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
});