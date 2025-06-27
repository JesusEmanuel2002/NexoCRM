import { Pressable, Text, StyleSheet } from 'react-native';
import { SettingsOption } from '../../domain/entities/SettingsOption';
import { useTheme } from '@/theme';

interface Props {
    option: SettingsOption;
}

export const SettingsOptionItem = ({ option }: Props) => {
    const theme = useTheme();

    return (
        <Pressable onPress={option.onPress} style={[styles.item, { borderColor: theme.colors.border }]}>
            <Text style={[styles.label, { color: theme.colors.text }]}>{option.label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 16,
    },
});