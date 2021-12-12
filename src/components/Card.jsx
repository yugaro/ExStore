import React from 'react';
import {
  StyleSheet, View, Text, ImageBackground, TouchableOpacity, Alert, FlatList,
} from 'react-native';

// import image1 from '../../assets/Image1.svg';
// import image2 from '../../assets/Image2.svg';
// import image3 from '../../assets/Image3.svg';
const image = { uri: 'https://reactjs.org/logo-og.png' };

const cardData = [
  {
    // image: `${image1}`,
    headerLabel: 'HOW TO',
    title1: '忙しい朝の',
    title2: '情報収集術',
    description1: '天候や鉄道の状況など',
    description2: '家を出るまでに効率よく情報収集',
  },
  {
    // image: `${image2}`,
    headerLabel: 'STAY HOME',
    title1: '筋力トレーニングに',
    title2: 'チャレンジ',
    description1: '運動不足を解消しましょう。',
    description2: '道具は必要ありません!',
  },
  {
    // image: `${image3}`,
    headerLabel: 'HOW TO',
    title1: '安全で簡単な',
    title2: 'パスワード管理',
    description1: 'パスワード管理アプリを利用して',
    description2: 'サービスごとにパスワードを設定しよう',
  },
];

export default function Card() {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => Alert.alert('card !!')}
    >
      <ImageBackground
        style={styles.cardInner}
        source={image}
        resizeMode="cover"
        imageStyle={{ borderRadius: 15 }}
      >
        <View>
          <Text style={styles.cardHeadLabel}>
            {item.headerLabel}
          </Text>
          <Text style={styles.cardTitle}>
            {item.title1}
          </Text>
          <Text style={styles.cardTitle}>
            {item.title2}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {item.description1}
          </Text>
          <Text style={styles.cardDescription}>
            {item.description2}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.cardContainer}>
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 20,
  },
  cardInner: {
    flexDirection: 'column',
    height: 400,
    borderRadius: 15,
    paddingLeft: 16,
    paddingTop: 24,
    paddingBottom: 16,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  cardHeadLabel: {
    color: '#888',
    fontSize: 13,
    lineHeight: 15,
  },
  cardTitle: {
    color: '#353535',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '500',
  },
  cardDescription: {
    color: '#C4C4C4',
    fontSize: 15,
    lineHeight: 24,
  },
});
