import { SafeAreaView,ScrollView , StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Todo from '../components/Todo';

export default function TodoList() {
  // Add state for todos and handle adding new todos
  const [todos, setTodos] = React.useState([
    { message: 'Buy groceries', completed: false },
    { message: 'Walk the dog', completed: false },
    { message: 'Clean the kitchen', completed: false },
  ]);
  const [newTodo, setNewTodo] = React.useState('');
  const [editingIndex, setEditingIndex] = React.useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { message: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodoCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index, newMessage) => {
    const updatedTodos = [...todos];
    updatedTodos[index].message = newMessage;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const startEditingTodo = (index) => {
    setEditingIndex(index);
    setNewTodo(todos[index].message);
  };

  const updateTodo = () => {
    if (newTodo.trim() !== '') {
      editTodo(editingIndex, newTodo);
      setNewTodo('');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.todoInput}
          onChangeText={setNewTodo}
          value={newTodo}
          placeholder="Enter a new todo"
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={editingIndex !== null ? updateTodo : addTodo}
        >
          <Text style={styles.addButtonText}>
            {editingIndex !== null ? 'Update Todo' : 'Add Todo'}
          </Text>
        </TouchableOpacity>

        <ScrollView style={styles.todoList}>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            message={todo.message}
            completed={todo.completed}
            onToggleComplete={() => toggleTodoCompletion(index)}
            onDelete={() => deleteTodo(index)}
            onEdit={() => startEditingTodo(index)}
          />
        ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  todoInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  todoList: {
    //flex: 1,
    marginBottom: 150,
  },
});