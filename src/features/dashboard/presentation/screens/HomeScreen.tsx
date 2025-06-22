import { ScrollView, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDashboardViewModel } from '../viewmodels/useDashboardViewModel';
import { DashboardStatCard } from '../components/DashboardStatCard';
import { useTheme } from '@/theme';

export const HomeScreen = () => {
  const theme = useTheme();
  const { data, loading, error } = useDashboardViewModel();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: theme.colors.error }}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Dashboard</Text>
      <DashboardStatCard label="Contactos Totales" value={data.totalContacts} />
      <DashboardStatCard label="Eventos Próximos" value={data.upcomingEvents} />
      <DashboardStatCard label="Notificaciones Recientes" value={data.recentNotifications} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
