/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
  Image,
  Text,
} from 'react-native';

const images = [
  require('../../assets/images/welcome/welcome1.png'),
  require('../../assets/images/welcome/welcome2.png'),
  require('../../assets/images/welcome/welcome1.png'),
];

const titles = ['Title One', 'Title Two', 'Title Three'];

const description = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
];

const {width, height} = Dimensions.get('window');
const FIXED_BAR_WIDTH = width * (300 / 320);
const INDICATOR_PADDING = width * (10 / 320);

function WelcomeScreen(): JSX.Element {
  const [animateX, _setAnimateX] = useState(new Animated.Value(0));
  const [itemWidth, _setItemWidth] = useState(
    FIXED_BAR_WIDTH / ((images.length - 1) * INDICATOR_PADDING),
  );

  return (
    <View style={styles.container}>
      {/* content wrapper */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        style={styles.positionAbsolute}
        contentContainerStyle={styles.center}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: animateX}}}],
          {useNativeDriver: false},
        )}>
        {images.map((img, i) => (
          <View key={i} style={{width: width}}>
            {/* slider image */}
            <Image
              resizeMode="contain"
              key={i}
              source={img}
              style={styles.sliderImage}
            />

            {/* content */}
            <View style={styles.padding32}>
              <View style={styles.textDataSectionWrapper}>
                {/* title text */}
                <Text style={styles.title}>{titles[i]}</Text>
                {/* description */}
                <Text style={styles.descriptionText}>{description[i]}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* indicator wrapper */}
      <View style={styles.indicatorOuterWrapper}>
        <View style={styles.indicatorInnerWrapper}>
          {images.map((img, i) => {
            const indicatorPosition = animateX.interpolate({
              inputRange: [width * (i - 1), width * (i + 1)],
              outputRange: [-itemWidth, itemWidth],
              extrapolate: 'clamp',
            });
            return (
              <View
                key={i}
                style={[
                  styles.normalIndicator,
                  {
                    width: itemWidth,
                    marginLeft: i === 0 ? 0 : INDICATOR_PADDING,
                  },
                ]}>
                <Animated.View
                  style={[
                    styles.animatedIndicator,
                    {
                      width: itemWidth,
                      transform: [{translateX: indicatorPosition}],
                    },
                  ]}
                />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  positionAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorOuterWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: height * 0.15,
  },
  indicatorInnerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderImage: {
    height: height * 0.25,
    width: '100%',
  },
  padding32: {
    padding: 32,
  },
  textDataSectionWrapper: {
    paddingTop: height * (24 / 360),
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 18,
    color: 'gray',
    paddingTop: height * (4 / 360),
    lineHeight: 18,
    fontWeight: 'bold',
  },
  normalIndicator: {
    backgroundColor: '#ccd9ff',
    overflow: 'hidden',
    height: 6,
  },
  animatedIndicator: {
    backgroundColor: '#0033cc',
    height: 6,
  },
});

export default WelcomeScreen;
