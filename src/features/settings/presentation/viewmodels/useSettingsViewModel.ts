import { useEffect, useState } from 'react';
import { Settings } from '../../domain/entities/Settings';
import { GetSettingsUseCase } from '../../domain/usecases/GetSettingsUseCase';
import { UpdateSettingsUseCase } from '../../domain/usecases/UpdateSettingsUseCase';

import { SettingsRepositoryImpl } from '../../data/repositories/SettingsRepositoryImpl';
import { SettingsDatasource } from '../../data/datasources/SettingsDatasource';

// Hook personalizado para manejar el estado de los ajustes
export const useSettingsViewModel = () => {
  
    // Estado para almacenar los ajustes del usuario
    const [settings, setSettings] = useState<Settings | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Inicializacion de las dependencias
    const repository = new SettingsRepositoryImpl(new SettingsDatasource());
    const getSettingsUseCase = new GetSettingsUseCase(repository);
    const updateSettingsUseCase = new UpdateSettingsUseCase(repository);

    // Carga inicial de los ajustes al montar el componente
    const loadSettings = async () => {
        try {
            setLoading(true);
            const result = await getSettingsUseCase.execute();
        setSettings(result);
        } catch (e) {
            setError('Error al cargar los ajustes');
        } finally {
            setLoading(false);
        }
    };

    // Ejecuta la función de carga cuando el componente se monta
    useEffect(() => {
        loadSettings();
    }, []);

    // Función para actualizar los ajustes
    const updateSettings = async (newSettings: Settings) => {
        try {
            setLoading(true);
            await updateSettingsUseCase.execute(newSettings);
            setSettings(newSettings);
        } catch (e) {
            setError('Error al actualizar los ajustes');
        } finally {
            setLoading(false);
        }
    };

    // Devuelve el estado y funciones disponibles
    return {
        settings,
        loading,
        error,
        updateSettings,
    };
};