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
      return <option key={opt.name} value={opt.name}>{opt.value}</option>
    });

  return(
    <Input
      name = {this.props.name}
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