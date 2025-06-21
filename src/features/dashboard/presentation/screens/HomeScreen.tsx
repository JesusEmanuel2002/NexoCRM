import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useDashboardViewModel } from '../viewmodels/useDashboardViewModel';
import { DashboardStatCard } from '../components/DashboardStatCard';
import { DashboardSection } from '../components/DashboardSection';
import { DashboardErrorState } from '../components/DashboardErrorState';

export const HomeScreen: React.FC = () => {
  const { data, fetchDashboardData } = useDashboardViewModel();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const noData =
    data.totalContacts === 0 &&
    data.upcomingEvents === 0 &&
    data.recentNotifications === 0;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {noData ? (
        <DashboardErrorState message="No hay datos disponibles por el momento." />
      ) : (
        <DashboardSection title="Resumen General">
          <DashboardStatCard label="Contactos Totales" value={data.totalContacts} />
          <DashboardStatCard label="Eventos Próximos" value={data.upcomingEvents} />
          <DashboardStatCard label="Notificaciones Recientes" value={data.recentNotifications} />
        </DashboardSection>
      )}
    </ScrollView>
  );
};