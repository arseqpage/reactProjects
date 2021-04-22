import React from 'react';

import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
  },
});

export default function TodoList({ todos, onRemoveTask }) {
  const classes = useStyles();

  return (
    <>
      {todos.map((todo, index) => (
        <Card key={index} className={classes.root}>
          <CardContent>
            <Typography gutterBottom className={classes.title} component="h2">
              {todo}
            </Typography>

            <Box display="flex" justifyContent="flex-end">
              <Button l="auto" size="small" onClick={() => onRemoveTask(index)}>
                Удалить задачу
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
