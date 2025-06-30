import { FlatList } from 'react-native';
import { Notification } from '../../domain/entities/Notification';
import { NotificationItem } from './NotificationItem';

interface Props {
    notifications: Notification[];
}

// Lista que renderiza todas las notificaciones recibidas
export const NotificationList = ({ notifications }: Props) => {
    return (
        <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NotificationItem notification={item} />}
            contentContainerStyle={{ padding: 16 }}
        />
    );
};