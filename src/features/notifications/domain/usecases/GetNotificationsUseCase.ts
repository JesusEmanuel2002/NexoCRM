import { NotificationsRepository } from '../repositories/NotificationsRepository';
import { Notification } from '../entities/Notification';

// Caso de uso para obtener las notificaciones desde el repositorio
export class GetNotificationsUseCase {
    constructor(private repository: NotificationsRepository) {}

    // Ejecuta la lógica para obtener notificaciones
    async execute(): Promise<Notification[]> {
        return await this.repository.getNotifications();
    }
}