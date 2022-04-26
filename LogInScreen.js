import React, {useState} from 'react';
import {StyleSheet, View, Alert, ImageBackground} from 'react-native';

import LogIn from './components/LogIn';

const LogInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const doLogIn = () => {
    if (username === 'staff' && password === 'test') {
      Alert.alert('Log-In Successfully!');
      navigation.navigate('Main', {user: username});
    } else {
      Alert.alert('Failed to Log-In!');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/note_bg.jpg')}
        style={styles.logInBg}>
        <LogIn
          onLogIn={doLogIn}
          onUsernameChanged={username => setUsername(username)}
          onPasswordChanged={password => setPassword(password)}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInBg: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogInScreen;
