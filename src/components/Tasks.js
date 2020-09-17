import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Note from './Note';

export default class Tasks extends React.Component {
  constructor(props) {
    super();
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MY DEAR DIARY</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="what should I note?"
            placeholderTextColor="white"
            multiline={true}
            underlineColorAndroid="transparent"></TextInput>

          <TouchableOpacity onPress={this.addNote.bind(this)}>
            <Image
              source={require('../media/add note (by Pixel perfect).png')}
              style={styles.addButton}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({ noteText: this.state.noteArray });
      this.setState({ noteText: '' });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#2196f3',
  },
  headerText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    minHeight: 60,
    width: '80%',
    color: '#2196f3',
    padding: 20,
    backgroundColor: 'black',
    borderTopWidth: 4,
    borderTopColor: '#2196f3',
    borderTopRightRadius: 30,
  },
  addButton: {
    margin: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
