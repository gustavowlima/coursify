import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: theme.colors.white,

    },

    titleCategory: {
        width: '100%',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#2AB598',
        marginTop: 20,
        marginBottom: 15
    },

    content: {
        marginHorizontal: 30
    }


});