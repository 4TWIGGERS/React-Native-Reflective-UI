import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { SCREEN_WIDTH } from '../utils/dimensions';
import {
 HomeIcon,
 BellIcon,
 SearchIcon,
 GroupIcon,
 EnvelopeIcon,
} from '../utils/svgs';

const Tabs = () => {
 return (
  <View style={styles.tabStyle}>
   <HomeIcon style={styles.iconsStyle} />
   <SearchIcon style={styles.iconsStyle} />
   <GroupIcon style={styles.iconsStyle} />
   <BellIcon style={styles.iconsStyle} />
   <EnvelopeIcon style={styles.iconsStyle} />
  </View>
 );
};

export default Tabs;

const styles = StyleSheet.create({
 tabStyle: {
  width: SCREEN_WIDTH,
  height: 40,
  position: 'absolute',
  bottom: Platform.OS === 'ios' ? 40 : 10,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
 },
 iconsStyle: {
  width: 30,
  height: 30,
 },
});
