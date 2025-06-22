import { View, StyleSheet } from 'react-native';
import { TextMessage } from '../../components/atoms/TextMessage';

interface Props {
    message: string;
}

export const ErrorState = ({ message }: Props) => {
    return (
        <View style={styles.container}>
            <TextMessage message={message} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
});