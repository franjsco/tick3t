import React, { Component } from 'react';
import { Input } from 'reactstrap';


class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let options = this.props.options;
    options = options.map((opt) => {
      return <option key={opt.id} value={opt.id}>{opt.value}</option>
    });
    console.log('reh');

  return(
    <Input
      name = "type"
      type = "select"
      value = { this.props.value }
      onChange = { this.props.onChange }
    >
      <option value="">---</option>
      { options }
    </Input>
    );
  }
}

export default DropDown;