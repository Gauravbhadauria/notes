import React, {useState} from 'react';

import {View, StyleSheet, FlatList} from 'react-native';
import {Text, FAB, List} from 'react-native-paper';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {addnote, deletenote} from '../reducer/notesApp';

function ViewNotes({navigation}) {
  const notes = useSelector(state => state);
  const dispatch = useDispatch();
  const addNote = note => {
    console.log(note);
    dispatch(addnote(note));
  };

  const deleteNote = id => dispatch(deletenote(id));

  return (
    <>
      <Header titleText={'Notes Taking app'} />
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any notes</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({item}) => {
              return (
                <List.Item
                  title={item.note.notesTitle}
                  description={item.note.notesDescription}
                  descriptionNumberOfLines={1}
                  titleStyle={styles.listTitle}
                  onPress={() => deleteNote(item.id)}
                />
              );
            }}
            keyExtractor={item => item.id.toString()}
          />
        )}

        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="add new note"
          onPress={() => navigation.navigate('AddNotes', {addNote})}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
    backgroundColor: '#219653',
  },
  listTitle: {
    fontSize: 20,
    color: '#000',
  },
});
export default ViewNotes;
