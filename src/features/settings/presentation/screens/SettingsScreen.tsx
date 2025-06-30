import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSettingsViewModel } from '../viewmodels/useSettingsViewModel';
import { SettingsOptionItem } from '../components/SettingsOptionItem';
import { ErrorState } from '@/shared/components/molecules/ErrorState';
import { EmptyState } from '@/shared/components/molecules/EmptyState';
import { useTheme } from '@/theme';

// Componente principal para visualizar y modificar los ajustes
export const SettingsScreen = () => {
    const { settings, loading, error, updateSettings } = useSettingsViewModel();
    const theme = useTheme();

    if (loading) return <EmptyState message="Cargando configuración..." />;
    if (error) return <ErrorState message={error} />;
    if (!settings) return <EmptyState message="Sin configuración disponible." />;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Cambiar idioma */}
            <SettingsOptionItem
                label="Idioma"
                value={settings.language}
                onPress={() =>
                    updateSettings({ ...settings, language: settings.language === 'es' ? 'en' : 'es' })
                }
            />

            {/* Activar/desactivar notificaciones */}
            <SettingsOptionItem
                label="Notificaciones"
                value={settings.notificationsEnabled ? 'Activadas' : 'Desactivadas'}
                onPress={() =>
                    updateSettings({ ...settings, notificationsEnabled: !settings.notificationsEnabled })
                }
            />

            {/* Alternar modo claro/oscuro */}
            <SettingsOptionItem
                label="Tema"
                value={settings.theme === 'light' ? 'Claro' : 'Oscuro'}
                onPress={() =>
                    updateSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' })
                }
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 12,
    },
});