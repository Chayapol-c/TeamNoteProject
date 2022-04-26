import {Button, View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const LogIn = ({onLogIn, onUsernameChanged, onPasswordChanged}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headertxt}>Welcome team Team Note</Text>
      <TextInput
        style={styles.inputbox}
        placeholder="username"
        autoCapitalize="none"
        onChangeText={value => onUsernameChanged(value)}
      />
      <TextInput
        style={styles.inputbox}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={value => onPasswordChanged(value)}
      />
      <Button title="Log-In" onPress={onLogIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  headertxt: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputbox: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '80%',
    padding: 5,
  },
});

export default LogIn;
