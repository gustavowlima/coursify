import { useEffect, useState } from 'react';
import { ScrollView, FlatList, View, Text } from 'react-native';

import { styles } from './styles'
import api from '../../services/api'
import PostLayout from '../../components/PostLayout';
import Footer from '../../components/Footer'
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [categories, setcategories] = useState([])

  useEffect(async () => {
    const response = await api.get("/categories")
    setcategories(response.data)
  }, [])
  
  const navigation = useNavigation();
  const renderItem = ({ item }) => ( 
    <>
    <View style={styles.ListBarContainer}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleSection}>{item.name}</Text>
        <Text onPress={() => {
          navigation.push('CategoryCourses', {category_id: item.id, category_name: item.name})
        }}>VER MAIS ➤</Text>
      </View>
    </View>
    <PostLayout category_id={item.id}/>
    </>
  );

  return (
    <>
      <ScrollView style={styles.container}>
        <FlatList 
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => {return item.id}}
        />
        <Footer />
      </ScrollView>
    </>
  );
}


