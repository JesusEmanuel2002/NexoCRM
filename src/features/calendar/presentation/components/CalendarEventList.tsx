import { FlatList, StyleSheet } from 'react-native';
import { CalendarEvent } from '../../domain/entities/CalendarEvent';
import { CalendarEventItem } from './CalendarEventItem';

interface Props {
    events: CalendarEvent[];
}

// Lista que renderiza múltiples eventos del calendario usando CalendarEventItem
export const CalendarEventList = ({ events }: Props) => {
    return (
        <FlatList
            data={events}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CalendarEventItem event={item} />}
            contentContainerStyle={styles.list}
        />
     );
};

const styles = StyleSheet.create({
    list: {
        padding: 16,
    },
});