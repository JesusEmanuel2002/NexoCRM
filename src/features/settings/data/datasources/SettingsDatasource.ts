export class SettingsDatasource {
    async fetchAvailableOptions(): Promise<{ id: string; label: string }[]> {
        return Promise.resolve([
            { id: '1', label: 'Cuenta' },
            { id: '2', label: 'Tema' },
        ]);
    }
}