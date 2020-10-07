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
import { IUser, createUser } from '../../../api/UserAPI';

enum ErrorTypes {
  MismatchedPassword,
  APIError
}

interface Error {
  type: ErrorTypes;
  message: string;
}

const Register = () => {
  const [formValues, setFormValues] = useState({
    controls: {
      username: {
        value: '',
        validation: {
          valid: false,
          touched: false,
          required: true
        }
      },
      email: {
        value: '',
        validation: {
          valid: false,
          touched: false,
          required: true
        }
      },
      password: {
        value: '',
        validation: {
          valid: false,
          touched: false,
          required: true
        }
      },
      confirmPassowrd: {
        value: '',
        validation: {
          valid: false,
          touched: false,
          required: true
        }
      }
    }
  });

  const [errors, setErrors] = useState([] as Error[]);
  const [loading, setLoading] = useState(false);

  const isConfirmPasswordValid = (confirmPassword: string) => {
    if (formValues.controls.password.validation.touched) {
      if (formValues.controls.password.value === confirmPassword) {
        return true;
      }
    }
    return false;
  };

  const isFormValid = () => {
    if (!isConfirmPasswordValid(formValues.controls.confirmPassowrd.value)) {
      if (!errors.some((e) => e.type === ErrorTypes.MismatchedPassword)) {
        setLoading(false);
        setErrors([
          ...errors,
          {
            type: ErrorTypes.MismatchedPassword,
            message: `Password and confirm password don't match.`
          }
        ]);
      }
      return false;
    }
    setErrors([]);
    return true;
  };

  const showErrors = (errList: Error[]) => {
    return errList.map((e, i) => <p key={i}>{e.message}</p>);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (isFormValid()) {
      const newUser: IUser = {
        username: formValues.controls.username.value,
        email: formValues.controls.email.value,
        password: formValues.controls.password.value
      };

      try {
        await createUser(newUser);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErrors([
          {
            type: ErrorTypes.APIError,
            message: err.response
              ? err.response.data.message
              : `Error registering user.`
          }
        ]);
      }
    }
    setLoading(false);
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
                  controls: {
                    ...formValues.controls,
                    username: {
                      ...formValues.controls.username,
                      value: e.target.value,
                      validation: {
                        ...formValues.controls.username.validation,
                        touched: true,
                        valid: e.target.value.length > 6
                      }
                    }
                  }
                });
              }}
              required
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Username"
              type="text"
              value={formValues.controls.username.value}
            />

            <Form.Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({
                  ...formValues,
                  controls: {
                    ...formValues.controls,
                    email: {
                      ...formValues.controls.email,
                      value: e.target.value,
                      validation: {
                        ...formValues.controls.email.validation,
                        touched: true,
                        valid: e.target.value.length > 6
                      }
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
              value={formValues.controls.email.value}
            />

            <Form.Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({
                  ...formValues,
                  controls: {
                    ...formValues.controls,
                    password: {
                      ...formValues.controls.password,
                      value: e.target.value,
                      validation: {
                        ...formValues.controls.password.validation,
                        touched: true,
                        valid: e.target.value.length > 6
                      }
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
              value={formValues.controls.password.value}
            />

            <Form.Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({
                  ...formValues,
                  controls: {
                    ...formValues.controls,
                    confirmPassowrd: {
                      ...formValues.controls.confirmPassowrd,
                      value: e.target.value,
                      validation: {
                        ...formValues.controls.confirmPassowrd.validation,
                        touched: true,
                        valid: true
                      }
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
              value={formValues.controls.confirmPassowrd.value}
            />

            {errors.length > 0 && (
              <Message className="ui red message">
                <h3>Errors</h3>
                {showErrors(errors)}
              </Message>
            )}

            <Button
              className={loading ? 'loading disabled' : ''}
              color="orange"
              fluid
              size="large"
            >
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
