import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

interface Props {
    title: string;
    value: number;
}

export const ContactsCard = ({ title, value }: Props) => {
    const theme = useTheme();

    // Tarjeta visual que muestra estadísticas o datos resumidos del módulo de contactos
    return (
        <View style={[styles.card, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
            <Text style={[styles.value, { color: theme.colors.primary }]}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 12,
        elevation: 2,
        marginBottom: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 4,
    },
});