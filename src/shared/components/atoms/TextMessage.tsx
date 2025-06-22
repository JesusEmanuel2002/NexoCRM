import { Text, StyleSheet } from 'react-native';

interface Props {
    message: string;
}

export const TextMessage = ({ message }: Props) => {
    return <Text style={styles.message}>{message}</Text>;
};

const styles = StyleSheet.create({
    message: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
});