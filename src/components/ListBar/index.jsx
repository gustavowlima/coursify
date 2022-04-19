import { View, Linking, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'

import PostLayout from '../PostLayout';

export default function ListBar({category_title, category_id}) {
  const id = category_id
  const navigation = useNavigation();
  return (
    <View style={styles.ListBarContainer}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleSection}>{category_title}</Text>
        <Text onPress={() => {
          navigation.push('CategoryCourses',
          {id})
        }}>VER MAIS ➤</Text>
      </View>
    </View>

  )
}

