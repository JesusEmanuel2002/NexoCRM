import { Notification } from '../entities/Notification';

export interface NotificationsRepository {
    getNotifications(): Promise<Notification[]>;
}