import { NotificationsRepository } from '../../domain/repositories/NotificationsRepository';
import { NotificationsDatasource } from '../datasources/NotificationsDatasource';
import { Notification } from '../../domain/entities/Notification';

export class NotificationsRepositoryImpl implements NotificationsRepository {
    constructor(private datasource: NotificationsDatasource) {}

    // Llama al datasource para obtener las notificaciones
    async getNotifications(): Promise<Notification[]> {
        return await this.datasource.fetchNotifications();
    }
}