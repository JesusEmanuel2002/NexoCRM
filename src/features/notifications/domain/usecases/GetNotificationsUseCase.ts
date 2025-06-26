import { NotificationsRepository } from '../repositories/NotificationsRepository';
import { Notification } from '../entities/Notification';

export class GetNotificationsUseCase {
    constructor(private repository: NotificationsRepository) {}

    async execute(): Promise<Notification[]> {
        return await this.repository.getNotifications();
    }
}
