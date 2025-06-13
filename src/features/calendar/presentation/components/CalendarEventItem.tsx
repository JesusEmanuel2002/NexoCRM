import React from 'react';
import { View, Text } from 'react-native';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';

interface Props {
    event: CalendarEvent;
}

const CalendarEventItem: React.FC<Props> = ({ event }) => {
    return (
        <View style={{ padding: 12, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{event.title}</Text>
            <Text style={{ color: '#666' }}>{event.description || 'Sin descripción'}</Text>
            <Text>
                {event.allDay
                ? 'Todo el día'
                : `${event.startDate.toLocaleString()} - ${event.endDate.toLocaleString()}`}
            </Text>
        </View>
    );
};

export default CalendarEventItem;
