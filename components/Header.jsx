import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TwiggersIcon } from '../utils/svgs';

const Header = () => {
 return (
  <View style={styles.twiggersIcon}>
   <TwiggersIcon />
  </View>
 );
};

export default Header;

const styles = StyleSheet.create({
 twiggersIcon: {
  height: 70,
  justifyContent: 'center',
  marginTop: 50,
  flexDirection: 'row',
 },
});
