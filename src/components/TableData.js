import React, { Component } from 'react';
import {
  Col,
  Row,
  Table
} from 'reactstrap';

import './TableData.css'

class TableData extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let data = this.props.data;

    return (
        <Row>
        <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Table bordered id="table-ticket-info">
          <thead>
            <tr>
              <th colSpan={2}>Ticket Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-weight-bold text-right td-key">id</td>
              <td className="td-value text-left">{data.id}</td>
            </tr>
            <tr>
              <td className="font-weight-bold text-right td-key">status</td>
              <td className="td-value text-left">{data.status}</td>
            </tr>
            <tr>
              <td className="font-weight-bold text-right td-key">created</td>
              <td className="td-value text-left">{data.createdAt}</td>
            </tr>
            
            <tr>
              <td className="font-weight-bold text-right td-key">updated</td>
              <td className="td-value text-left">{data.updateAt}</td>
            </tr>
            <tr>
              <td className="font-weight-bold text-right td-key">created by</td>
              <td className="td-value text-left">{`${data.firstName} ${data.lastName} (${data.email})`}</td>
            </tr>
            <tr>
              <td className="font-weight-bold text-right td-key">type</td>
              <td className="td-value text-left">{data.type}</td>
            </tr>
            <tr>
              <td className="font-weight-bold text-right td-key">subject</td>
              <td className="td-value text-left">{data.subject}</td>
            </tr>
            <tr>
              <td className="font-weight-bold text-right td-key">message</td>
              <td className="td-value text-left">{data.message}</td>
            </tr>
          </tbody>
        </Table>
        </Col>
      </Row>
    );
  }
}

export default TableData;