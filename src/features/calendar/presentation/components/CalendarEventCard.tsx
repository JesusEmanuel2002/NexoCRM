import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { useTheme } from '@/theme';

// Componente que muestra la información visual de un evento del calendario
export const CalendarEventCard = ({ event }: { event: CalendarEvent }) => {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>{event.title}</Text>
            <Text style={{ color: theme.colors.text }}>
                {event.startDate.toLocaleString()} - {event.endDate.toLocaleString()}
            </Text>
            {event.description && (
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    {event.description}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 12,
        borderRadius: 12,
        elevation: 2,
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        marginTop: 4,
        fontSize: 14,
    },
});