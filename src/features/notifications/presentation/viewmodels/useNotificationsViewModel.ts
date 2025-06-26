import { useEffect, useState } from 'react';
import { Notification } from '../../domain/entities/Notification';
import { NotificationsDatasource } from '../../data/datasources/NotificationsDatasource';
import { NotificationsRepositoryImpl } from '../../data/repositories/NotificationsRepositoryImpl';
import { GetNotificationsUseCase } from '../../domain/usecases/GetNotificationsUseCase';

export const useNotificationsViewModel = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadNotifications = async () => {
        try {
            const datasource = new NotificationsDatasource();
            const repository = new NotificationsRepositoryImpl(datasource);
            const useCase = new GetNotificationsUseCase(repository);

            const result = await useCase.execute();
            setNotifications(result);
        } catch (err) {
            setError('Error al cargar notificaciones.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadNotifications();
    }, []);

    return { 
        notifications, 
        loading, 
        error 
    };
};