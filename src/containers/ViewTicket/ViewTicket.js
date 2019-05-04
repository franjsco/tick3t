import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Row,
  Table
} from 'reactstrap';

import './ViewTicket.css';

class ViewTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const { match: {params}} = this.props;

    fetch(`http://localhost:3001/tickets?id=${params.ticketId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error API');
        }
      })
      .then(json => {
        if(json.length){
          this.setState({ data: json[0], isLoading: false })
        } else {
          throw new Error('Ticket Not found');
        }
      })
      .catch(error => this.setState({ error, isLoading: false}));
  }

  render() {
    const {data, isLoading, error} = this.state;
  
    if (error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return '' // add spinner
    }
    
    return (
      <div>
        <Card className="text-center shadow-sm p-3 mb-5 bg-white rounded">
          <CardBody>
            <CardTitle><h5>View Ticket</h5></CardTitle>
            <CardText>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Table bordered id="table-ticket-info">
                  <thead>
                    <tr>
                      <th colSpan={2}>Ticket-ID: {data.id }</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-weight-bold text-right">Status</td>
                      <td>{data.status}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold text-right">Creation Date</td>
                      <td>{data.createdAt}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold text-right">Update Date</td>
                      <td>{data.updateAt}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold text-right">Created By</td>
                      <td>{`${data.firstName} ${data.lastName}`}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold text-right">Type</td>
                      <td>{ data.type }</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold text-right">Subject</td>
                      <td>{ data.subject }</td>
                    </tr>
                  </tbody>
                </Table>
                </Col>
              </Row>

            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ViewTicket;