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
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import classes from './Login.module.scss';
import { ILoginInfo, login } from '../../../api/AuthAPI';
import * as UserActions from '../../../store/ducks/user/actions';
import { User } from '../../../store/ducks/user/types';
import { AppState } from '../../../store/store';

enum ErrorTypes {
  MismatchedPassword,
  APIError
}

interface ILoginProps {
  setUser: (user: User) => void;
  setAuthToken: (token: string) => void;
}

interface Error {
  type: ErrorTypes;
  message: string;
}

const Login = (props: ILoginProps) => {
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
      password: {
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
  const [loggedIn, setLoggedIn] = useState(false);

  const showErrors = (errList: Error[]) => {
    return errList.map((e, i) => <p key={i}>{e.message}</p>);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    setErrors([]);
    event.preventDefault();
    const loginInfo: ILoginInfo = {
      username: formValues.controls.username.value,
      password: formValues.controls.password.value
    };

    try {
      const res = await login(loginInfo);
      const currentUser: User = res.data.data;
      const token = res.data.data.token;
      props.setUser(currentUser);
      if (token) {
        props.setAuthToken(token);
      }
      setLoading(false);
      setLoggedIn(true);
    } catch (err) {
      setLoading(false);
      setErrors([
        {
          type: ErrorTypes.APIError,
          message: err.response
            ? err.response.data.message
            : `Error trying to login.`
        }
      ]);
    }
  };

  return loggedIn ? (
    <Redirect to="/home" />
  ) : (
    <Grid className={classes.Login} textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" icon color="orange" textAlign="center">
          <Icon name="btc" color="orange" />
          Login to StockChat
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
              Login
            </Button>

            <Message>
              Not a user? <Link to="/register">Register</Link>
            </Message>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => ({ user: state.user.currentUser });

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
