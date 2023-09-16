import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Post = () => {
 return (
  <View style={styles.postContainer}>
   <View style={styles.userPhoto}></View>

   <View>
    <Text style={[styles.textStyle, { fontSize: 16 }]}>4Twiggers</Text>
    <Text style={[styles.textStyle, { marginTop: 10 }]}>
     Software Developers Company
    </Text>
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
  width: 60,
  height: 60,
  borderRadius: 60,
  marginLeft: 10,
  borderColor: 'white',
  borderWidth: 3,
  marginRight: 20,
 },

 textStyle: {
  fontSize: 14,
  fontFamily: 'MontserratBold',
 },
});
