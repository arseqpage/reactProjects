import { useState } from 'react';
import PropTypes from 'prop-types';

import UiInput from './UiInput';

export default {
  title: 'Ui-Kit/UiInput',
  component: UiInput,
};

const Template = (args) => {
  const [value, setValue] = useState();

  const handleChangeInput = (value) => {
    setValue(value);
  };

  return <UiInput {...args} handleChangeInput={handleChangeInput}></UiInput>;
};

const props = {
  value: '',
  handleChangeInput: console.log('Input change'),
  placeholder: 'Placeholder',
  classes: '',
};

export const Default = Template.bind({});

Default.args = {
  ...props,
};
