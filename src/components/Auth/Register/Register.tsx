import React from 'react';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from 'semantic-ui-react';
// import classes from './Register.module.scss';

export interface RegisterProps {
  name: string;
}

const Register = (props: RegisterProps) => (
  <Grid textAlign="center" verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" icon color="orange" textAlign="center">
        <Icon name="btc" color="orange" />
      </Header>
    </Grid.Column>
  </Grid>
);

export default Register;
