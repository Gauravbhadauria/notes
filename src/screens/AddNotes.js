import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, IconButton, TextInput, FAB} from 'react-native-paper';
import Header from '../components/Header';

function AddNotes({navigation}) {
  const [notesTitle, setNoteTitle] = useState('');
  // eslint-disable-next-line no-undef
  const [notesDescription, setNoteDescription] = useState('');

  function onSaveNotes() {
    navigation.state.params.addNote({notesTitle, notesDescription});
    navigation.goBack();
  }

  return (
    <>
      <Header titleText={'Add notes'} />
      <IconButton
        style={styles.iconButton}
        icon="close"
        size={25}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TextInput
          label="Add Note Title here"
          value={notesTitle}
          mode="outlined"
          style={styles.title}
          onChangeText={setNoteTitle}
        />
        <TextInput
          label="Add Note Description here"
          value={notesDescription}
          mode="flat"
          style={styles.text}
          scrollEnables={true}
          returnKeyLable="done"
          blurOnsubmite={true}
          onChangeText={setNoteDescription}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={notesTitle == '' ? true : false}
          onPress={() => onSaveNotes()}
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
  iconButton: {
    backgroundColor: '#219653',
    position: 'absolute',
    right: 0,
    top: 10,
    margin: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#000',
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 20,
  },
});
export default AddNotes;
