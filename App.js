import { useFonts } from 'expo-font';
import { BlurView } from '@react-native-community/blur';

import React, { useEffect } from 'react';
import {
 Alert,
 Linking,
 Platform,
 ScrollView,
 StatusBar,
 StyleSheet,
 View,
} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

import { Camera, CameraType } from 'expo-camera';

import Tabs from './components/Tabs';
import Post from './components/Post';
import Header from './components/Header';
import Story from './components/Story';

if (Platform.OS === 'android') {
 StatusBar.setTranslucent(true);
 StatusBar.setBackgroundColor('transparent');
}

const usersArray = [
 {
  name: 'Nika Gabunia',
  role: 'Chief Executive Officer',
 },
 {
  name: 'Jeko Tediashvili',
  role: 'Web/Mobile Developer',
 },
 {
  name: 'Niko Chopikashvili',
  role: 'NodeJS Developer',
 },
 {
  name: 'Alexander Pataridze',
  role: 'Junior Developer',
 },
 {
  name: 'Miranda Pagava',
  role: 'Project Manager',
 },
 {
  name: 'Nika Kereselidze',
  role: 'NodeJS Developer',
 },
];

const App = () => {
 const [fontsLoaded] = useFonts({
  MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
  MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
 });

 const [permission, requestPermission] = Camera.useCameraPermissions();

 const goToSettings = () =>
  Alert.alert(
   '',
   'You do not have a camera permission. Go to application settings and enable it manually.',
   [
    {
     text: 'Not right now',
     onPress: () => console.log('Cancel Pressed'),
     style: 'cancel',
    },
    {
     text: 'Go to settings',
     onPress: () => Linking.openSettings(),
    },
   ]
  );

 useEffect(() => {
  requestPermission();
 }, []);

 useEffect(() => {
  if (permission && !permission.granted) {
   goToSettings();
  }
 }, [permission]);

 if (fontsLoaded) {
  return (
   <View style={styles.screenContainer}>
    {permission.granted && (
     <MaskedView
      style={styles.maskViewStyle}
      maskElement={
       <>
        <Header />
        <Story />

        {usersArray.map((user, i) => (
         <Post key={i} user={user} />
        ))}

        <Tabs />
       </>
      }>
      <Camera style={{ flex: 1 }} ratio='16:9' type={CameraType.back}></Camera>
      <BlurView
       style={styles.blurViewStyle}
       blurType='light'
       blurAmount={20}
       reducedTransparencyFallbackColor='white'
      />
     </MaskedView>
    )}
   </View>
  );
 }

 return null;
};

export default App;

const styles = StyleSheet.create({
 screenContainer: {
  flex: 1,
  backgroundColor: 'black',
 },
 maskViewStyle: {
  flex: 1,
  flexDirection: 'row',
 },
 blurViewStyle: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  flex: 1,
  display: Platform.OS === 'android' ? 'none' : 'flex',
 },
});
