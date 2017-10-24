import React, { Component } from 'react';
import { Segment, Container, Divider, Header, Button } from 'semantic-ui-react';
import glamorous from 'glamorous';

const WorkSegment = glamorous.div({
    padding: '4em 0em !important'
});

const WorkDivider = glamorous.h4({
    margin: '1em 0em !important', 
    textTransform: 'uppercase !important'
});

const WorkHeader = glamorous.h3({
    fontSize: '2em !important'
});

const WorkParagraph = glamorous.p({
    fontSize: '1.33em'
});

export default class Work extends Component {

    render() {
        return (
        <Segment as={WorkSegment} vertical>
            <Container text>
                <Divider
                    as={WorkDivider}
                    className='header'
                    horizontal
                >
                <a href='#'>My Work</a>
                </Divider>
                <Header as={WorkHeader}>Fantasy Football Power Rankings</Header>
                <WorkParagraph>
                    A website developed in React that calculates the record of a team regardless of individual weekly matchups.
                </WorkParagraph>
                <Button.Group>
                    <Button>Code</Button>
                    <Button.Or />
                    <Button primary>Site</Button>
                </Button.Group>
                <Divider/>
                <Header as={WorkHeader}>Wulf's Custom Welding</Header>
                <WorkParagraph>
                    A website developed in React that calculates the record of a team regardless of individual weekly matchups.
                </WorkParagraph>
                <Button primary>Site</Button>
            </Container>
        </Segment>
        )
    }
}