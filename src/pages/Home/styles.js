import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },

  ListBarContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
  },

  containerTitle:{
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20
  },

  titleSection: {
    width: '80%',
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#2AB598'
  },

  linkSection: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 17,
    color: '#535353',
  }
});
