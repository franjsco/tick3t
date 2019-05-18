import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { 
  Button,
  Row, 
  Col, 
  Form, 
  FormGroup, 
  Label, 
  Input 
} from 'reactstrap';

import Card from '../../components/Card';
import Table from '../../components/Table';
import DropDown from '../../components/DropDown';


class TicketWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      categories: [],
      status: '',
      message: '',
      error: '',
      updateed: false,
      isLoading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const { match: { params } } = this.props;

    fetch(`http://localhost:3001/tickets?id=${params.ticketId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error API');
        }

        return response.json();
      })
      .then(json => {
        if (!json.length) {
          throw new Error('Ticket Not found');
        }

        this.setState({ data: json[0], isLoading: false })
      })
      .catch(error => this.setState({ error, isLoading: false }));


    fetch("http://localhost:3001/categories?type=ticketStatus")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error API');
        }

        return response.json();
      })
      .then((json) => {
        this.setState({
          categories: json
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message
        });
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    const { match: { params } } = this.props;

    if (!data.type === '---' || !data.message) {
      alert('Form is invalid');
      return;
    }

    fetch(`http://localhost:3001/tickets/${params.ticketId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: this.state.status,
        note: this.state.message
      })
    })
      .then(res => {
        if(!res.ok) {
          throw new Error('Error API');
        }

        return res.json();
      })
      .then((json) => {
        alert("Ticket Updated");
        this.setState({
          updated: true
        });
      })
      .catch((err) => {
        this.setState({
          ticketErr: err.message
        });
      });
  }


  render() {
    const { data, updated, isLoading, error} = this.state;

    if (error) {
      return (
        <Card title="Error">
          <p>{error.message}</p>
        </Card>
      )
    }

    if (isLoading) {
      return '' // add spinner
    }

    if (updated) {
      return (
        <Redirect to="/admin/ticket" />
      )
    } 

    return (
      <div>
        <Card
          headAlign="left"
          bodyAlign="center"
          title="Ticket Details"
        >
          <Row>
            <Col>
              <Table data={data} />
              <Link to="/admin/ticket">Go to ticket list</Link>
            </Col>
          </Row>

        </Card>

        <Card
          align="left"
          title="Manage Ticket"
        >
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label sm={2} className="font-weight-bold" for="email">Status</Label>
              <Col sm={10}>
                <DropDown
                  name="status"
                  value={this.state.status}
                  onChange={this.handleInputChange}
                  options={this.state.categories}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} className="font-weight-bold" for="message">Note</Label>
              <Col sm={10}>
                <Input
                  name="message"
                  type="textarea"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  placeholder="Note"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col align="right">
                <Button type="submit" color="primary">Update Ticket</Button>
              </Col>

            </FormGroup>

          </Form>

        </Card>

      </div>
    );
  }
}

export default TicketWork;