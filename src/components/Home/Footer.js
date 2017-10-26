import React, { Component } from 'react';
import { Segment, Container, Grid, Header, Button } from 'semantic-ui-react';
export default class Footer extends Component {

    render() {
        return (
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Social' />
                    <div>
                        <a href="https://twitter.com/JakePartusch">
                            <Button circular color='twitter' icon='twitter' />
                        </a>
                        <a href="https://www.linkedin.com/in/jacob-partusch-4a181b79/">
                            <Button circular color='linkedin' icon='linkedin' />
                        </a>
                        <a href="https://github.com/JakePartusch">
                            <Button circular color='github' icon='github' />
                        </a>
                    </div>
                </Grid.Column>
                <Grid.Column width={7} verticalAlign="middle">
                  <Header as='h3' inverted>Made by yours truly 😊</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        )
    }
}