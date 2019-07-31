import React from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from 'reactstrap';

const style = {
  borderRadius: "0px 20px 20px 0px",
  backgroundImage: 'linear-gradient(to left, #0eaed3, #8346f6)',
}

const SearchForm = (props) => {
  return (
    <div>
      <Form onSubmit={props.onSubmit}>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <InputGroup>
                <Input
                  type="input"
                  name={props.name}
                  id={props.id}
                  placeholder={props.placeholder}
                  onChange={props.onChange}
                  value={props.ticketId}
                />
                <InputGroupAddon addonType="append">
                  <Button type="submit" style={style}>
                    {props.buttonName}</Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchForm;