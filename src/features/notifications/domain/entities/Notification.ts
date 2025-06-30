// Define la estructura de una notificación en el sistema
export interface Notification {
    id: string;           // ID único de la notificación
    title: string;        // Título de la notificación
    body: string;         // Cuerpo o mensaje de la notificación
    date: Date;           // Fecha y hora en que se generó
    read: boolean;        // Indica si la notificación fue leída
}