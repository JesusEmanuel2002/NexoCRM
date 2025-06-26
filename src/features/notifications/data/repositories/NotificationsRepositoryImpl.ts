import { NotificationsRepository } from '../../domain/repositories/NotificationsRepository';
import { Notification } from '../../domain/entities/Notification';
import { NotificationsDatasource } from '../datasources/NotificationsDatasource';

export class NotificationsRepositoryImpl implements NotificationsRepository {
    constructor(private datasource: NotificationsDatasource) {}

    async getNotifications(): Promise<Notification[]> {
        return await this.datasource.fetchNotifications();
    }
}