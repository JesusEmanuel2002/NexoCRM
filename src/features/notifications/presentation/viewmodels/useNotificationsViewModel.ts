import { useEffect, useState } from 'react';
import { Notification } from '../../domain/entities/Notification';
import { GetNotificationsUseCase } from '../../domain/usecases/GetNotificationsUseCase';
import { NotificationsRepositoryImpl } from '../../data/repositories/NotificationsRepositoryImpl';
import { NotificationsDatasource } from '../../data/datasources/NotificationsDatasource';

// Hook que gestiona el estado de las notificaciones (loading, error, data)
export const useNotificationsViewModel = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Función que carga las notificaciones usando el caso de uso
    const loadNotifications = async () => {
        try {
            const datasource = new NotificationsDatasource();
            const repository = new NotificationsRepositoryImpl(datasource);
            const getNotifications = new GetNotificationsUseCase(repository);

            const result = await getNotifications.execute();
            setNotifications(result);
        } catch (err) {
            setError('Error al obtener las notificaciones');
        } finally {
            setLoading(false);
        }
    };

    // Carga automática al montar el componente
    useEffect(() => {
        loadNotifications();
    }, []);

    return { 
        notifications, 
        loading, 
        error 
    };
};