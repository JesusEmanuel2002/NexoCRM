import React from 'react';
import { FlatList, View } from 'react-native';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import CalendarEventItem from './CalendarEventItem';

interface Props {
    events: CalendarEvent[];
}

const CalendarEventList: React.FC<Props> = ({ events }) => {
    return (
        <FlatList
            data={events}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CalendarEventItem event={item} />}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
         />
    );
};

export default CalendarEventList;
