import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {StackActions} from '@react-navigation/native';

const CreateNoteScreen = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  let noteCreator = route.params.creator
  const addNote = () => {
    firestore().collection('teamnotes')
      .add({
        note_title: title,
        note_detail: detail,
        creator: noteCreator,
      })
      .then(() => {
        Alert.alert('Note added!');
        const popAction = StackActions.pop(1);
        navigation.dispatch(popAction);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputbox}
        placeholder="Title"
        onChangeText={value => setTitle(value)}
      />
      <TextInput
        style={styles.areabox}
        placeholder="Detail"
        multiline={true}
        numberOfLines={4}
        onChangeText={value => setDetail(value)}
      />
      <Button title="Create Note" onPress={() => addNote()} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputbox: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    borderColor: '#aaaaaa',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '80%',
    padding: 5,
  },
  areabox: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    borderColor: '#aaaaaa',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '80%',
    padding: 5,
    textAlignVertical: 'top',
  },
});
export default CreateNoteScreen;
