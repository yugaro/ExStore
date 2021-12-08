import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

export default function TodayScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.innerLeft}>
          <Text style={styles.dateLabel}> WENDNESDAY, APRIL 15 </Text>
          <Text style={styles.innerLabel}> Today </Text>
        </View>
        <View style={styles.innerRight}>
          <Text style={styles.faceLabel}> aaa </Text>
        </View>
      </View>
      <View>
        <View>
          <View>
            <Text> HOW TO </Text>
            <Text> 忙しい朝の情報収集術 </Text>
          </View>
          <View>
            <Text>
              天候や鉄道の状況など家を出るまでに効率よく情報収集
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text> STAY HOME </Text>
            <Text> 筋力トレーニングにチャレンジ </Text>
          </View>
          <View>
            <Text> 運動不足を解消しましょう。道具は必要ありません!</Text>
          </View>
        </View>
        <View>
          <View>
            <Text> GAMES </Text>
            <Text> Top Apple </Text>
          </View>
        </View>
        <View>
          <View>
            <Text> THE DAILY LIST </Text>
            <Text> Defy gravity</Text>
          </View>
          <View>
            <Text> Dandara Trail of Fear Edition</Text>
            <Text> A Metrodvania Advent</Text>
          </View>
          <View>
            <Text> Piloteer</Text>
            <Text> Adventure</Text>
          </View>
          <View>
            <Text> Grab Lab</Text>
            <Text> Silly Gravity</Text>
          </View>
          <View>
            <Text> Teslagrad Lab </Text>
            <Text> A hand-drawn </Text>
          </View>
        </View>
        <View>
          <View>
            <Text> HOW TO </Text>
            <Text> 安全で簡単なパスワード管理</Text>
          </View>
          <View>
            <Text> ハスワード管理アプリを利用してサービスごとにパスワードを設定しよう</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#000',
  },
  dateLabel: {
    color: '#fff',
  },
  innerLabel: {
    color: '#fff',
  },
  faceLabel: {
    color: '#fff',
  },
  innerLeft: {
    // alignItems: 'flex-start',
  },
  innerRight: {
    // alignItems: 'flex-end',
  },
});
