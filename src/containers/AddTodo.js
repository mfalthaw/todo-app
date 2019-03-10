import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';

import { addTodo } from '../actions';

class AddTodo extends Component {

  state = {
    text: '',
  }

  addTodo = (text) => {
    // update redux store
    this.props.dispatch(addTodo(text));

    // reset state
    this.setState({ text: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
          placeholder="Add a new Todo..."
          style={styles.addNewTodo}
        />
        <TouchableOpacity
          onPress={() => this.addTodo(this.state.text)}
        >
          <View
            style={styles.iconContainer}
          >
            <Ionicons
              style={styles.icon}
              name="md-add"
              size={30}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  addNewTodo: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea',
    height: 50,
    padding: 5
  },
  iconContainer: {
    height: 50,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'blue',
    padding: 10,
  }
});