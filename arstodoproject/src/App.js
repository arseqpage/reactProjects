import React, { useState } from 'react';
import { Form, TodoList } from './components';

import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default  function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [require, setRequire] = useState(false);

  const addMessage = <Typography component="h2">Добавьте первый таск</Typography>;

  function handleTaskChange(event) {
    setTask(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!task) {
      setRequire(true);

      return setTodos([...todos]);
    }

    setRequire(false);

    setTodos([...todos, task]);
    setTask('');
  }

  function handleRemoveTask(todosAll) {
    setTodos(todos.filter((item, index) => index !== todosAll));
  }

  return (
    <Container maxWidth="sm">
      <Form
        task={task}
        require={require}
        onTaskChange={handleTaskChange}
        onFormSubmit={handleFormSubmit}
      />
      {todos.length === 0 && addMessage}
      <TodoList todos={todos} onRemoveTask={handleRemoveTask} />
    </Container>
  );
}
