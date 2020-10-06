import React from 'react';
import { Grid } from 'semantic-ui-react';
import ColorPanel from '../../components/ColorPanel/ColorPanel';
import SidePanel from '../../components/SidePanel/SidePanel';
import Messages from '../../components/Messages/Messages';
import MetaPanel from '../../components/MetaPanel/MetaPanel';

const Home = () => (
  <Grid columns="equal" style={{ backgroud: '#eee' }}>
    <Grid.Column>
      <ColorPanel />
    </Grid.Column>
    <Grid.Column>
      <SidePanel />
    </Grid.Column>
    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages />
    </Grid.Column>
    <Grid.Column width={4}>
      <MetaPanel />
    </Grid.Column>
  </Grid>
);

export default Home;
