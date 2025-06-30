import { Settings } from '../../domain/entities/Settings';

// Datasource que simula almacenamiento local para los ajustes del usuario
export class SettingsDatasource {
    private settings: Settings = {
        language: 'es',
        notificationsEnabled: true,
        theme: 'light',
    };

    // Devuelve los ajustes actuales
    async getSettings(): Promise<Settings> {
        return this.settings;
    }

    // Actualiza los ajustes con los valores recibidos
    async updateSettings(newSettings: Settings): Promise<void> {
        this.settings = newSettings;
    }
}