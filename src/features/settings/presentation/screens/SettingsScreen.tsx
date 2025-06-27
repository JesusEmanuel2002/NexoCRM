import { View, FlatList, StyleSheet } from 'react-native';
import { useSettingsViewModel } from '../viewmodels/useSettingsViewModel';
import { SettingsOptionItem } from '../components/SettingsOptionItem';
import { useTheme } from '@/theme';
import { EmptyState } from '@/shared/components/molecules/EmptyState';

export const SettingsScreen = () => {
    const { options } = useSettingsViewModel();
    const theme = useTheme();

    if (options.length === 0) {
        return <EmptyState message="No hay opciones disponibles." />;
    }

    return (
        <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SettingsOptionItem option={item} />}
            contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
    },
});