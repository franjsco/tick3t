import React from 'react';
import { Input } from 'reactstrap';


const DropDown = (props) => {
  let options = props.options;
  options = options.map((opt) => {
    return <option key={opt.name} value={opt.name}>{opt.value}</option>
  });

  return (
    <Input
      name={props.name}
      type="select"
      value={props.value}
      onChange={props.onChange}
    >
      <option value="">---</option>
      {options}
    </Input>
  );
}

export default DropDown;