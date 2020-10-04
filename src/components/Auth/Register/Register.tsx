import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import classes from './Register.module.scss';

interface FormControl {
  value: string;
  validation: { valid: boolean; touched: boolean; required: boolean };
}

const Register = () => {
  const [formValues, setFormValues] = useState({
    username: {
      value: '',
      validation: {
        valid: false,
        touched: false,
        required: true,
        focused: false
      }
    },
    email: {
      value: '',
      validation: {
        valid: false,
        touched: false,
        required: true,
        focused: false
      }
    },
    password: {
      value: '',
      validation: {
        valid: false,
        touched: false,
        required: true,
        focused: false
      }
    },
    confirmPassowrd: {
      value: '',
      validation: {
        valid: false,
        touched: false,
        required: true,
        focused: false
      }
    }
  });

  const isConfirmPasswordValid = (confirmPassword: string) => {
    if (
      formValues.password.validation.touched &&
      formValues.confirmPassowrd.validation.touched
    ) {
      if (formValues.password.value === formValues.confirmPassowrd.value) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Grid
      className={classes.Register}
      textAlign="center"
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="orange" textAlign="center">
          <Icon name="btc" color="orange" />
          Register for StockChat
        </Header>
        <Form onSubmit={handleSubmit} size="large">
          <Segment>
            <Form.Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({
                  ...formValues,
                  username: {
                    ...formValues.username,
                    value: e.target.value,
                    validation: {
                      ...formValues.username.validation,
                      touched: true,
                      valid: e.target.value.length > 6
                    }
                  }
                });
              }}
              error={
                formValues.username.validation.touched &&
                !formValues.username.validation.valid
              }
              required
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Username"
              type="text"
              value={formValues.username.value}
            />

            <Form.Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({
                  ...formValues,
                  email: {
                    ...formValues.email,
                    value: e.target.value,
                    validation: {
                      ...formValues.email.validation,
                      touched: true,
                      valid: e.target.value.length > 6
                    }
                  }
                });
              }}
              required
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email"
              type="email"
              value={formValues.email.value}
            />

            <Form.Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({
                  ...formValues,
                  password: {
                    ...formValues.password,
                    value: e.target.value,
                    validation: {
                      ...formValues.password.validation,
                      touched: true,
                      valid: e.target.value.length > 6
                    }
                  }
                });
              }}
              required
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={formValues.password.value}
            />

            <Form.Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({
                  ...formValues,
                  confirmPassowrd: {
                    ...formValues.confirmPassowrd,
                    value: e.target.value,
                    validation: {
                      ...formValues.confirmPassowrd.validation,
                      touched: true,
                      valid:
                        e.target.value.length > 6 &&
                        isConfirmPasswordValid(e.target.value)
                    }
                  }
                });
              }}
              required
              fluid
              name="confirmPassowrd"
              icon="repeat"
              iconPosition="left"
              placeholder="Confirm password"
              type="password"
              value={formValues.confirmPassowrd.value}
            />

            <Button color="orange" fluid size="large">
              Submit
            </Button>

            <Message>
              Already a user? <Link to="/login">Login</Link>
            </Message>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
