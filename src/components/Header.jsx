import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerInner}>
      <View style={styles.innerLeft}>
        <Text style={styles.dateLabel}> WENDNESDAY, APRIL 15 </Text>
        <Text style={styles.headerInnerLeftLabel}> Today </Text>
      </View>
      <View style={styles.innerRight}>
        <Text style={styles.headerInnerRightLabel}> Y </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerInner: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dateLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 13,
    lineHeight: 15,
  },
  headerInnerLeftLabel: {
    color: '#fff',
    fontSize: 35,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  innerRight: {
    backgroundColor: 'red',
    borderRadius: 18,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerInnerRightLabel: {
    color: '#fff',
    fontSize: 18,
  },
});
