import { StyleSheet } from 'react-native';
import {theme} from '../../styles/theme'

export const styles = StyleSheet.create({
  containerFooter:{
    width: '100%',
    height: 240,
    backgroundColor: theme.colors.greenDark,

    alignItems:'center'
  },

  imageLogo: {
  marginTop: 20,
  },

  textFooter: {
    width: '85%',
    marginTop: 16,
    color: theme.colors.white,
    textAlign: 'center'
  },

  button: {
    width: 250,
    height: 44,
    backgroundColor: theme.colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginTop: 20
  },

  textButton: {
    color: '#fff'
  }

})