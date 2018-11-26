import React, { Component } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View, FlatList } from 'react-native'
import styles from './Styles/ProfileScreenStyles'
import Header from '../../General/Components/Header'
import { Images } from '../../General/Themes'
import BotaoSeguir from '../Components/BotaoSeguir'
import Contador from '../Components/Contador'

const data = Array(20).fill(0).map((item, index) => (
  {
    _id: index,
    url: 'asdasd',
    author: {
      username: `asdad_${index}`,
      picture: Images.photoExample,
      _id: `asdad_${index}`
    },
    description: `asdadasdasdasdasda`,
    comments: 25,
    createdAt: '20181209',
    liked: !!(index % 2)
  }
))

class ProfileScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Header
          left={
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.backButton}>
              <Image source={Images.leftArrow} style={styles.leftArrow} />
              <Text style={styles.headerText}>usuario</Text>
            </TouchableOpacity>
          }
          right={<View />} />
        <ScrollView>

          <View style={styles.statsContainers}>
            <View>
              <Image style={styles.profilePicture} />
              <Text style={styles.profileUsername}>Popcode Mobile</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.userStats}>
                <Contador valor={'123'} rotulo={'publições'} customStyle={[styles.userStatsItem, styles.noLeftMargin]} />
                <Contador valor={'4546'} rotulo={'seguidores'} customStyle={styles.userStatsItem} />
                <Contador valor={'8678'} rotulo={'seguindo'} customStyle={[styles.userStatsItem, styles.noRightMargin]} />
              </View>
              <BotaoSeguir rotulo={'Seguir'} />
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.titleDescription}>Descrição</Text>
            <Text style={styles.textDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis augue, ultricies eget sapien eget, condimentum tristique neque.
            </Text>
          </View>

          <FlatList
            contentContainerStyle={styles.gridContentContainer}
            style={styles.gridContainer}
            numColumns={3}
            data={data}
            keyExtractor={(item) => `${item._id}`}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => console.warn('pressed')} style={styles.postMiniatureContainer}>
                <Image source={item.author.picture} style={styles.postMiniature} />
              </TouchableOpacity>
            )}
          />

        </ScrollView>
      </View>
    )
  }
}
export default ProfileScreen
