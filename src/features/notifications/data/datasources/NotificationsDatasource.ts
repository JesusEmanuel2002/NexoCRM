import * as Notifications from 'expo-notifications';
import { Notification } from '../../domain/entities/Notification';

export class NotificationsDatasource {
    async fetchNotifications(): Promise<Notification[]> {
        const { status } = await Notifications.getPermissionsAsync();
        if (status !== 'granted') {
            return [];
        }

        const notifications: Notification[] = [
            {
                id: '1',
                title: 'Bienvenido a NexoCRM',
                body: 'Gracias por instalar nuestra app',
                date: new Date(),
                read: false
            },
            {
                id: '2',
                title: 'Nuevo contacto añadido',
                body: 'Juan Pérez fue añadido a tus contactos.',
                date: new Date(),
                read: true,
            },
        ];
        
        return notifications;
    }
}