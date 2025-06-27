import { SettingsOption } from '../../domain/entities/SettingsOption';
import { SettingsRepository } from '../../domain/repositories/SettingsRepository';
import { SettingsDatasource } from '../datasources/SettingsDatasource';

export class SettingsRepositoryImpl implements SettingsRepository {
    constructor(private readonly datasource: SettingsDatasource) {}

    async getOptions(): Promise<SettingsOption[]> {
        const rawOptions = await this.datasource.fetchAvailableOptions();

        return rawOptions.map((opt) => ({
            id: opt.id,
            label: opt.label,
            onPress: () => {
                console.log(`Seleccionaste: ${opt.label}`);
            },
        }));
    }
}