import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useCalendarViewModel } from '../viewmodels/CalendarViewModel';
import CalendarEventList from '../components/CalendarEventList';

const CalendarScreen: React.FC = () => {
    const { events, loading, error, loadEvents } = useCalendarViewModel();

    useEffect(() => {
        loadEvents();
    }, []);

    if (loading) return <ActivityIndicator size="large" color="#007AFF" />;
    if (error) return <Text>Error al cargar eventos</Text>;
    if (events.length === 0) return <Text>No hay eventos disponibles</Text>;

    return (
        <View style={{ padding: 16 }}>
            <CalendarEventList events={events} />
        </View>
    );
};

export default CalendarScreen;