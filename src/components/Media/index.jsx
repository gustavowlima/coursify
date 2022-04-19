import { Image, ScrollView, FlatList, Text
} from "react-native";
import React, { useState, useEffect } from "react";

import api from '../../services/api'
import {styles} from './styles'

export default function Media({ imageId }) {
  const [dataImage, setDataImage] = useState([]);

  useEffect(async () => {
    try {
      const response = await api.get(`/media/${imageId}`)
      setDataImage([response.data])
    } catch (err) {
      console.log(err)
    }
  }, [])

  const RenderItem = ({item}) => (
    <Image style={styles.imagePost} source={{uri: item.media_details.sizes.thumbnail.source_url}} />
  )

  return (
    <ScrollView>
      {dataImage.lenght < 1 ? null :
          <FlatList
            data={dataImage}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={<><Text>Vázio</Text></>}
          />
        }
    </ScrollView>
  )

}