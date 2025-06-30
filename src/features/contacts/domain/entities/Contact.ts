// Modelo que representa un contacto en la aplicación
export interface Contact {
    id: string;                // Identificador único del contacto
    name: string;              // Nombre del contacto
    phoneNumbers: string[];    // Lista de números telefónicos
    emails: string[];          // Lista de correos electrónicos
    imageAvailable: boolean;   // Indica si tiene imagen disponible
    image: string;             // URI de la imagen del contacto (si existe)
}