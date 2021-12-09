import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';

export default function TodayScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
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
