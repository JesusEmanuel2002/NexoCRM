import { View, ScrollView, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useDashboardViewModel } from '../viewmodels/useDashboardViewModel';
import { DashboardStatCard } from '../components/DashboardStatCard';
import { Section } from '@/shared/components/atoms/Section';
import { ErrorState } from '@/shared/components/molecules/ErrorState';
import { EmptyState } from '@/shared/components/molecules/EmptyState';
import { useTheme } from '@/theme';

export const HomeScreen = () => {
  const { data, loading } = useDashboardViewModel();
  const theme = useTheme();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (!data) {
    return <ErrorState message="Error al cargar el dashboard." />;
  }

  if (
    data.totalContacts === 0 &&
    data.upcomingEvents === 0 &&
    data.recentNotifications === 0
  ) {
    return <EmptyState message="No hay datos disponibles para mostrar." />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Section title="Resumen general">
        <DashboardStatCard label="Contactos" value={data.totalContacts} />
        <DashboardStatCard label="Eventos" value={data.upcomingEvents} />
        <DashboardStatCard label="Notificaciones" value={data.recentNotifications} />
      </Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});