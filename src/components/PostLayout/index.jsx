import {
  View, TouchableOpacity, Text, FlatList, SafeAreaView, useWindowDimensions
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import api from '../../services/api'
import Media from '../Media'

export default PostLayout = ({ category_id }) => {
  const [postList, setPostList] = useState([]);
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  useEffect(async () => {
    try {
      const response = await api.get(`/posts?categories=${category_id}&per_page=10`)
      setPostList(response.data)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const tagsStyles = {
    p: {
      margin: 0,
    }
  }
  const RenderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={styles.containerItem}
        onPress={() => {
          navigation.push('PageContent', { Post_id: item.id, Post_name: item.title.rendered })
        }}
      >

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
  );
  return (
    <>
      <SafeAreaView>
        {postList.lenght < 1 ? null :
          <FlatList
            data={postList}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        }
      </SafeAreaView>
    </>

  )
}