import { SettingsRepository } from '../repositories/SettingsRepository';
import { Settings } from '../entities/Settings';

// Caso de uso para actualizar los ajustes del usuario
export class UpdateSettingsUseCase {
    constructor(private repository: SettingsRepository) {}

    // Ejecuta la lógica para guardar nuevos ajustes
    async execute(newSettings: Settings): Promise<void> {
        return this.repository.updateSettings(newSettings);
    }
}