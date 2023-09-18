import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Post = ({ user }) => {
 return (
  <View style={styles.postContainer}>
   <View style={styles.userPhoto}></View>

   <View>
    <Text style={[styles.textStyle]}>{user.name}</Text>
    <Text style={[styles.textStyle, styles.descStyle]}>{user.role}</Text>
   </View>
  </View>
 );
};

export default Post;

const styles = StyleSheet.create({
 postContainer: {
  marginTop: 20,
  flexDirection: 'row',
  alignItems: 'center',
 },
 userPhoto: {
  width: 70,
  height: 70,
  borderRadius: 70,
  marginLeft: 10,
  borderColor: 'white',
  borderWidth: 3,
  marginRight: 20,
 },
 textStyle: {
  fontSize: 17,
  fontFamily: 'MontserratBold',
 },
 descStyle: { marginTop: 10, fontFamily: 'MontserratRegular', fontSize: 15 },
});
