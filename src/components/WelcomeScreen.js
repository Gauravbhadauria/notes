import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Animated,
  StatusBar,
  Dimensions,
} from 'react-native';
import {List} from 'react-native-paper';

const colors = ['#36e364', '#F62DAE', '#C2A83E', '#7CA982'];
const DATA = [
  {
    key: '1113',
    title: 'first slider',
    description: 'first slider description',
    image: require('../images/email.png'),
  },
  {
    key: '1114',
    title: 'second slider',
    description: 'second slider description',
    image: require('../images/house.png'),
  },
  {
    key: '1115',
    title: 'third slider',
    description: 'third slider description',
    image: require('../images/network.png'),
  },
  {
    key: '1116',
    title: 'fourth slider',
    description: 'fourth slider description',
    image: require('../images/next.png'),
  },
];
const Indicator = ({scrollX}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 100,
        width: width,
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const scale = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              margin: 10,
              opacity,
              transform: [{scale}],
              backgroundColor: '#fff',
            }}
            key={'indicator-${i}'}
          />
        );
      })}
    </View>
  );
};
const Backdrop = ({scrollX}) => {
  const bg = scrollX.interpolate({
    inputRange: colors.map((_, i) => i * width),
    outputRange: colors.map(bg => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: bg,
        },
      ]}
    />
  );
};
const Square = ({scrollX}) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: width + 100,
        height: width + 100,
        top: -width * 0.5,
        backgroundColor: '#fff',
        borderRadius: 86,
        position: 'absolute',
        transform: [
          {
            rotate: rotate,
          },
          {
            translateX: translateX,
          },
        ],
      }}
    />
  );
};
const {width, height} = Dimensions.get('screen');

export default function WelcomeScreen() {
  const scrollx = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollx} />
      <Square scrollX={scrollx} />
      <Animated.FlatList
        data={DATA}
        noOfColumn={1}
        horizontal={true}
        pagingEnabled={true}
        decelerationRate={'fast'}
        scrollEventThrottle={32}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {x: scrollx},
              },
            },
          ],
          {useNativeDriver: false},
        )}
        renderItem={({item}) => {
          return (
            <View style={{width: width, alignItems: 'center', padding: 20}}>
              <View style={{flex: 0.7, justifyContent: 'center'}}>
                <Image
                  source={item.image}
                  resizeMode={'contain'}
                  style={{width: 150, height: 150}}
                />
              </View>
              <View style={{flex: 0.3}}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 30,
                    marginBottom: 10,
                    color: '#fff',
                    alignSelf: 'center',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontWeight: '300',
                    fontSize: 24,
                    marginBottom: 10,
                    color: '#fff',
                    alignSelf: 'center',
                  }}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
        contentContainerStyle={{paddingBottom: 100}}
      />
      <Indicator scrollX={scrollx} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
