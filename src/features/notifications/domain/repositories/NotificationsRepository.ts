import { Notification } from '../entities/Notification';

// Define las funciones que cualquier repositorio de notificaciones debe implementar
export interface NotificationsRepository {
    getNotifications(): Promise<Notification[]>; // Obtener la lista de notificaciones
}