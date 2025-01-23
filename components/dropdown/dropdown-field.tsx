import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import { Dropdown } from 'react-native-element-dropdown';

import { s } from './styles';

type DropdownFieldProps = {
    control: any;
    name: string;
    label: string;
    data: any;
    rules: any;
    errors: any;
}

const DropdownField = ({ control, name, label, data, rules, errors }: DropdownFieldProps) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={s.fieldContainer}>
      <Text>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <Dropdown
            style={[s.dropdown, errors && s.errorInput]}
            data={data}
            labelField="label"
            valueField="value"
            placeholder={`Selecione ${label}`}
            value={selectedValue || value}
            onChange={item => {
              onChange(item.value);
              setSelectedValue(item.value);
            }}
            onBlur={onBlur}
          />
        )}
      />
      {errors && <Text style={s.errorText}>{errors.message}</Text>}
    </View>
  );
};


export default DropdownField;
