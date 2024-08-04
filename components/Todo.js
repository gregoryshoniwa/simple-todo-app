import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Todo = ({ message, onDelete, onEdit, completed, onToggleComplete }) => {
  return (
    <View style={styles.container}>
        <View style={styles.checkboxContainer}>
            <BouncyCheckbox
                size={25}
                fillColor="red"
                unFillColor="#FFFFFF"
                text={message}
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={onToggleComplete}
                />
        </View>
      
        <Text style={[styles.text, completed && styles.completed]}>{message}</Text>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={onEdit}>
            <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onDelete}>
            <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9c23c',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-around',
    alignItems: 'center',
  
  },
  
  text: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: '#333',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    alignItems: 'center',

  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  editButton: {
    marginLeft: 10,
    color: 'blue',
  },
  deleteButton: {
    marginLeft: 10,
    color: 'red',
  },
});