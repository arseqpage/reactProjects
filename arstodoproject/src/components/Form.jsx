import React, { useState } from 'react';

import { Box, Button, TextField } from '@material-ui/core';

export default React.memo(function Form({ task, onTaskChange, onFormSubmit, require }) {
  console.log(require);
  return (
    <form onSubmit={onFormSubmit}>
      <Box display="flex" alignItems="flex-start" justifyContent="center" pt={4} pb={4}>
        <Box mr={5} width={2 / 3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Добавить таск"
            variant="outlined"
            value={task}
            onChange={onTaskChange}
            error={require}
            helperText="Поле не должно быть пустым"
          />
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Добавить таск
        </Button>
      </Box>
    </form>
  );
});
