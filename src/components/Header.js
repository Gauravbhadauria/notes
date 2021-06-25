import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

function Header({titleText}) {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.conatainer}>
        <Title style={styles.title}>{titleText}</Title>
      </View>
    </Appbar.Header>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#242424',
  },
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
  },
});

export default Header;
