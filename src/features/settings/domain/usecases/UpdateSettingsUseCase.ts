import { SettingsRepository } from '../repositories/SettingsRepository';
import { Settings } from '../entities/Settings';

export class UpdateSettingsUseCase {
    constructor(private repository: SettingsRepository) {}
    
    async execute(settings: Settings): Promise<void> {
        return this.repository.updateSettings(settings);
    }
}