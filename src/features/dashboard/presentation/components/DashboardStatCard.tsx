import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

interface Props {
    label: string;
    value: number;
}

export const DashboardStatCard = ({ label, value }: Props) => {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
            <Text style={[styles.label, { color: theme.colors.text }]}>{label}</Text>
            <Text style={[styles.value, { color: theme.colors.primary }]}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4,
    },
    value: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
