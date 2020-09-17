import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: '',
    };
  }

  handleHighlight = () => {
    if (this.state.highlight === '') {
      this.setState({ highlight: '#faec6e' });
    } else {
      this.setState({ highlight: '' });
    }
  };

  render() {
    return (
      <View
        key={this.props.keyval}
        style={[styles.note, { backgroundColor: this.state.highlight }]}>
        <TouchableOpacity onPress={this.handleHighlight}>
          <Text style={styles.noteText}>{this.props.val.date}</Text>
          <Text style={styles.noteText}>{this.props.val.note}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.deleteMethod}>
          <Image
            source={require('../media/erase note (by Pixel perfect).png')}
            style={styles.noteDelete}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2196f3',
  },
  noteText: {
    minWidth: 100,
    maxWidth: 220,
    minHeight: 30,
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#2196f3',
    flexWrap: 'wrap',
  },
  noteDelete: {
    margin: 10,
    width: 30,
    height: 30,
  },
});
