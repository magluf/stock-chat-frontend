import React from 'react';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';

const UserPanel = () => {
  const handleSignOut = () => {};

  const dropDownOptions = () => [
    {
      key: 'userInfo',
      text: (
        <span>
          Signed in as <strong>User</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: 'logout',
      text: (
        <span role="button" onClick={handleSignOut}>
          Logout
        </span>
      )
    }
  ];

  return (
    <Grid padded style={{ background: '#4c3c4c' }}>
      <Grid.Column>
        <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
          <Header inverted floated="left" as="h2">
            <Icon name="btc" />
            <Header.Content>StockChat</Header.Content>
          </Header>
        </Grid.Row>
        <Header style={{ padding: '0.25em' }} as="h4" inverted>
          <Dropdown trigger={<span>User</span>} options={dropDownOptions()} />
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default UserPanel;
