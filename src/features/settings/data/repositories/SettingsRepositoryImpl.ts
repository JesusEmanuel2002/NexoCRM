import { SettingsRepository } from '../../domain/repositories/SettingsRepository';
import { SettingsDatasource } from '../datasources/SettingsDatasource';
import { Settings } from '../../domain/entities/Settings';

// Implementación del repositorio que interactúa con el datasource
export class SettingsRepositoryImpl implements SettingsRepository {
    constructor(private datasource: SettingsDatasource) {}

    // Método para obtener los ajustes actuales
    async getSettings(): Promise<Settings> {
        return await this.datasource.getSettings();
    }

    // Método para actualizar los ajustes
    async updateSettings(settings: Settings): Promise<void> {
        await this.datasource.updateSettings(settings);
    }
}