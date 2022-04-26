import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const NoteList = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('teamnotes')
      .onSnapshot(querySnapshot => {
        const teamNotes = [];
        querySnapshot.forEach(documentSnapshot => {
          teamNotes.push({
            key: documentSnapshot.id,
            title: documentSnapshot.get('note_title'),
            detail: documentSnapshot.get('note_detail'),
          });
        });
        setNotes(teamNotes);
        setLoading(false);
      });
    return () => subscriber();
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.notelist}
        data={notes}
        renderItem={({item}) => (
          <View style={styles.listitem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.detail}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#E0F2F1',
  },
  notelist: {
    width: '100%',
    backgroundColor: '#ffffff',
  },
  listitem: {
    padding: 15,
    fontSize: 18,
    height: 64,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NoteList;
