import React, { Component } from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import glamorous from 'glamorous';

const SkillsSegment = glamorous.div({
    padding: '0em'
});

const SkillsColumn = glamorous.div({
    paddingBottom: '5em !important', 
    paddingTop: '5em !important' 
});

const SkillsHeader = glamorous.h3({
    fontSize: '2em !important'
});

export default class Skills extends Component {

    render() {
        return (
            <Segment 
                as={SkillsSegment}
                vertical>
                <Grid 
                    celled='internally' 
                    columns='equal' 
                    stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column as={SkillsColumn}>
                            <Header as={SkillsHeader}>Frontend</Header>
                            <p>Logos</p>
                        </Grid.Column>
                        <Grid.Column as={SkillsColumn}>
                            <Header as={SkillsHeader}>Backend</Header>
                            <p>Logos</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}