import { SettingsRepository } from '../repositories/SettingsRepository';
import { Settings } from '../entities/Settings';

export class GetSettingsUseCase {
    constructor(private readonly repository: SettingsRepository) {}

    async execute(): Promise<Settings> {
        return this.repository.getSettings();
    }
}