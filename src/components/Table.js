import React, { Component } from 'react';
import {
  Col,
  Row,
  Table as TableBootstrap
} from 'reactstrap';

import './Table.css'

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let data = this.props.data;

    return (
        <Row>
        <Col sm="12" md={{ size: 10, offset: 1 }}>
        <TableBootstrap bordered id="table-ticket-info" className="bg-white">
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
              <td className="td-value text-left"><p>{`${data.firstName} ${data.lastName} (${data.email})`}</p></td>
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
            <tr>
              <td className="font-weight-bold text-right td-key">note</td>
              <td className="td-value text-left">{data.note}</td>
            </tr>
          </tbody>
        </TableBootstrap>
        </Col>
      </Row>
    );
  }
}

export default Table;