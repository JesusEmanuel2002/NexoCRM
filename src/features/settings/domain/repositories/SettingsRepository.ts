import { Settings } from '../entities/Settings';

// Define las operaciones que deben implementar los repositorios concretos
export interface SettingsRepository {
    // Obtener los ajustes actuales
    getSettings(): Promise<Settings>;

    // Actualizar los ajustes
    updateSettings(settings: Settings): Promise<void>;
}