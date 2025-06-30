import { SettingsRepository } from '../repositories/SettingsRepository';
import { Settings } from '../entities/Settings';

// Caso de uso para obtener los ajustes actuales del usuario
export class GetSettingsUseCase {
    constructor(private repository: SettingsRepository) {}
    
    // Ejecuta la lógica para obtener los ajustes desde el repositorio
    async execute(): Promise<Settings> {
        return this.repository.getSettings();
    }
}