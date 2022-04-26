import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import NoteList from './components/NoteList';

const MainScreen = ({navigation, route}) => {
  let user = route.params.user;
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/note_banner.jpg')}
        style={styles.banner}
      />
      <Text style={styles.title}>Note for {user}</Text>
      <NoteList />
      <TouchableOpacity
        style={styles.floating}
        onPress={() => navigation.navigate('CreateNote', {creator: user})}>
        <Image
          source={require('./assets/ic_add.png')}
          style={styles.actionBtn}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  banner: {
    width: '100%',
    height: '20%',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  actionBtn: {
    width: 60,
    height: 60,
  },
  floating: {
    position: 'absolute',
    bottom: 30,
    right: 15,
    zIndex: 2,
  },
});

export default MainScreen;
