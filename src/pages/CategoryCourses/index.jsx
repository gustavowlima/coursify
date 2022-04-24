import { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import api from '../../services/api'

import Media from '../../components/Media'

import { styles } from './styles'
import Footer from '../../components/Footer';

export default function CategoryCourses(props) {
  const name = props.route.params.category_name
  const idItem = props.route.params.category_id

  const { width } = useWindowDimensions();

  const [Data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await api.get(`/posts?categories=${idItem}`)
      setData(response.data)
    } catch (err) {
      console.log('error', err)
    }
  }, [])

  const tagsStyles = {
    p: {
      margin: 0,
    }
  }

  console.log(Data)
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerItem}>

        <Media imageId={item.featured_media} />
        <View style={styles.textContainer}>
          <Text numberOfLines={2} ellipsizeMode='head' style={styles.titlePost}>{item.title.rendered}</Text>
          <View style={styles.descriptionPost}>
            <RenderHTML
              contentWidth={width}
              source={{ html: `${item.excerpt.rendered}` }}
              tagsStyles={tagsStyles}
            />
          </View>
          <Text style={styles.linkPost}>Ler mais</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
  return (
    <ScrollView>
      <Text style={styles.titleCategory}>{name}</Text>
      {Data.length < 1 ? null :
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      }
      <Footer />
    </ScrollView>

  )
}