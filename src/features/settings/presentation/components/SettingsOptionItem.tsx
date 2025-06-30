import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';

interface Props {
    label: string;
    value: string;
    onPress: () => void;
}

// Componente reutilizable para mostrar una opción de configuración
export const SettingsOptionItem = ({ label, value, onPress }: Props) => {
    const theme = useTheme();

    return (
        <TouchableOpacity onPress={onPress} style={[styles.option, { borderColor: theme.colors.border }]}>
            <View>
                <Text style={[styles.label, { color: theme.colors.text }]}>{label}</Text>
                <Text style={[styles.value, { color: theme.colors.primary }]}>{value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    option: {
        padding: 16,
        borderWidth: 1,
        borderRadius: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
    },
    value: {
        fontSize: 14,
        marginTop: 4,
    },
});