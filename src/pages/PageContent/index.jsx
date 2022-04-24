import { useEffect, useState } from 'react';
import {
    View, Text, ScrollView, useWindowDimensions
} from 'react-native';

import RenderHTML from 'react-native-render-html';
import Footer from '../../components/Footer';

import api from '../../services/api'

import { styles } from './styles'

export default function PageContent(props) {
    const idItem = props.route.params.Post_id
    const { width } = useWindowDimensions();

    const [Data, setData] = useState([]);

    useEffect(async () => {
        try {
            const response = await api.get(`posts/${idItem}`)
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
    if (Data.length < 1) {
        return <Text>Loading...</Text>
    } else {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.titleCategory}>{Data.title.rendered}</Text>
            <View style={styles.content}>
                <RenderHTML
                    contentWidth={width}
                    source={{ html: `${Data.content.rendered}` }}
                    tagsStyles={tagsStyles}
                />
                </View>
                <Footer />
            </ScrollView>
        )
    }
 
}