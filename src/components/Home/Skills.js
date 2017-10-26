import React, { Component } from 'react';
import { Segment, Grid, Header, Image, Card } from 'semantic-ui-react';
import glamorous from 'glamorous';
import javaScriptLogo from './images/javascript-logo.png'
import angularLogo from './images/angular-logo.png'
import reactLogo from './images/react-logo.png'
import javaLogo from './images/java-logo.png'
import nodeLogo from './images/node-logo.png'
import springLogo from './images/spring-logo.png'

const SkillsSegment = glamorous.div({
    padding: '0em'
});

const SkillsColumn = glamorous.div({
    paddingBottom: '5em !important', 
    paddingTop: '5em !important' 
});

const SkillsHeader = glamorous.h2({
    fontSize: '3em'
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
                            <SkillsHeader>Frontend</SkillsHeader>
                            <Card.Group itemsPerRow={3} style={{padding: '2em'}}>
                            <Card raised image={javaScriptLogo}/>
                            <Card raised image={angularLogo} />
                            <Card raised image={reactLogo} />
                            </Card.Group>
                        </Grid.Column>
                        <Grid.Column as={SkillsColumn}>
                            <SkillsHeader>Backend</SkillsHeader>
                            <Card.Group itemsPerRow={3} style={{padding: '2em'}}>
                                <Card raised image={javaLogo} />
                                <Card raised image={nodeLogo} />
                                <Card raised image={springLogo} />
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}