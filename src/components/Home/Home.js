import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'


export default class Home extends Component {
  state = {}

  render() {

    return (
      <div>
        <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
        >
        <Container text>
            <Header
            as='h1'
            content='Jake Partusch'
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
            />
            <Header
            as='h2'
            content='Full-stack Developer. Dog-father, traveler, brewmaster.'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
        </Container>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Frontend</Header>
                <p style={{ fontSize: '1.33em' }}>Logos</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Backend</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Logos
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '4em 0em' }} vertical>
          <Container text>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '1em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>My Work</a>
            </Divider>
            <Header as='h3' style={{ fontSize: '2em' }}>Fantasy Football Power Rankings</Header>
            <p style={{ fontSize: '1.33em' }}>
              A website developed in React that calculates the record of a team regardless of individual weekly matchups.
            </p>
              <Button.Group>
                <Button>Code</Button>
                <Button.Or />
                <Button primary>Site</Button>
            </Button.Group>

            <Divider/>

            <Header as='h3' style={{ fontSize: '2em' }}>Wulf's Custom Welding</Header>
            <p style={{ fontSize: '1.33em' }}>
              A website developed in React that calculates the record of a team regardless of individual weekly matchups.
            </p>
            <Button primary>Site</Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Social' />
                    <div>
                        <Button circular color='twitter' icon='twitter' />
                        <Button circular color='linkedin' icon='linkedin' />
                    </div>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}