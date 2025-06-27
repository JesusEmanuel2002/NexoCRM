import { Settings } from '../entities/Settings';

export interface SettingsRepository {
    getSettings(): Promise<Settings>;
    updateSettings(settings: Settings): Promise<void>;
}