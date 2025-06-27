import { useEffect, useState } from 'react';
import { SettingsOption } from '../../domain/entities/SettingsOption';
import { SettingsDatasource } from '../../data/datasources/SettingsDatasource';
import { SettingsRepositoryImpl } from '../../data/repositories/SettingsRepositoryImpl';

export const useSettingsViewModel = () => {
    const [options, setOptions] = useState<SettingsOption[]>([]);

    useEffect(() => {
        const load = async () => {
            const datasource = new SettingsDatasource();
            const repository = new SettingsRepositoryImpl(datasource);
            const fetchedOptions = await repository.getOptions();
            setOptions(fetchedOptions);
        };
        
        load();
    }, []);
    
    return { options };
};