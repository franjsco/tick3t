import React, { Component } from 'react';
import {
  Col,
  Row,
  Table as TableBootstrap
} from 'reactstrap';


const tableKeyStyle = {
  width: '18%',
  color: '#45474b'
}

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
          <TableBootstrap id="table-ticket-info" className="bg-white">
            <thead>
              <tr>
                <th colSpan={2}>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableKeyStyle} className="font-weight-bold text-right">id:</td>
                <td className="text-left">{data.ticketId}</td>
              </tr>
              <tr>
                <td style={tableKeyStyle} className="font-weight-bold text-right">status:</td>
                <td className="text-left">{data.status}</td>
              </tr>
              <tr>
                <td style={tableKeyStyle} className="font-weight-bold text-right">created:</td>
                <td className="text-left">{data.createdAt}</td>
              </tr>

              <tr>
                <td style={tableKeyStyle} className="font-weight-bold text-right">updated:</td>
                <td className="text-left">{data.updatedAt}</td>
              </tr>
              <tr>
                <td style={tableKeyStyle} className="font-weight-bold text-right">created by:</td>
                <td className="text-left"><p>{`${data.firstName} ${data.lastName} (${data.email})`}</p></td>
              </tr>
              <tr>
                <td style={tableKeyStyle} className="font-weight-bold text-right">type:</td>
                <td className="text-left">{data.type}</td>
              </tr>
              <tr>
                <td style={tableKeyStyle} className="font-weight-bold text-right">subject:</td>
                <td className="text-left">{data.subject}</td>
              </tr>
              <tr>
                <td style={tableKeyStyle} className="font-weight-bold text-right">message:</td>
                <td className=" text-left">{data.message}</td>
              </tr>
              <tr>
                <td style={tableKeyStyle} className="font-weight-bold text-right">note:</td>
                <td className="text-left">{data.note}</td>
              </tr>
            </tbody>
          </TableBootstrap>
        </Col>
      </Row>
    );
  }
}

export default Table;