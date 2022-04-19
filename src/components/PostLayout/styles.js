import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerItem: {
    width: 230,
    height: 270,
    flexDirection: 'column',
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#0000000B',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  textContainer: {
    width: '98%',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 6,
  },

  titlePost: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 17,
    marginBottom: 10,
    color: '#2ab598',
  },

  descriptionPost: {
    height: 50,
    marginBottom: 12
  },

  linkPost: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 17,
    color: '#FDA506',

    marginBottom: 12

  },

})