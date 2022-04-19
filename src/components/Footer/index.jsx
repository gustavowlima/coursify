import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

import logoWhite from '../../../assets/images/logo-coursify-w.png'

import { styles } from './styles'

export default function Footer() {
  return (
    <View style={styles.containerFooter}>
      <Image style={styles.imageLogo} source={logoWhite} />
      <Text style={styles.textFooter}>
        O Coursify.me é uma plataforma de ensino à distância,
        onde qualquer pessoa ou empresa pode construir seu
        EAD e vender cursos pela internet.
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL({ uri: 'https://coursify.me/.' })}
        style={styles.button}
      >
        <Text style={styles.textButton}>Quero conhecer a plataforma!</Text>
      </TouchableOpacity>

    </View>
  )
}