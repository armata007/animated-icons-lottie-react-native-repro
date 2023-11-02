/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import LottieView from 'lottie-react-native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 10,
          }}>
          <View>
            <Text>Chat.json</Text>
            <LottieView
              source={require('./lottieAnimations/chat.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Text>Bookmark.json</Text>
            <LottieView
              source={require('./lottieAnimations/bookmark.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Text>Delete.json</Text>
            <LottieView
              source={require('./lottieAnimations/delete.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Text>Loading.json</Text>
            <LottieView
              source={require('./lottieAnimations/Loading.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Text>Review.json</Text>
            <LottieView
              source={require('./lottieAnimations/Review.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Text>Trophy.json</Text>
            <LottieView
              source={require('./lottieAnimations/Trophy.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Text>calendar V3</Text>
            <LottieView
              source={require('./lottieAnimations/calendar V3.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Text>cloud V2.json</Text>
            <LottieView
              source={require('./lottieAnimations/cloud V2.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Text>user profile.json</Text>
            <LottieView
              source={require('./lottieAnimations/user profile.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Text>volume down.json</Text>
            <LottieView
              source={require('./lottieAnimations/volume down.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Text>Youtube.json</Text>
            <LottieView
              source={require('./lottieAnimations/Youtube.json')}
              autoPlay
              loop
              style={{width: 100, height: 100}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
