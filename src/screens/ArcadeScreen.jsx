import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ArcadeScreen() {
  return (
    <View style={styles.container}>
      <Text>Arcade Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
