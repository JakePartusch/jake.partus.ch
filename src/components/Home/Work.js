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
                    <a href="https://github.com/JakePartusch/fantasy-football-power-rankings">
                        <Button>Code</Button>
                    </a>
                    <Button.Or />
                    <a href="https://www.fantasy-football-power-rankings.com/">
                        <Button primary>Site</Button>
                    </a>
                </Button.Group>
                <Divider/>
                <Header as={WorkHeader}>Wulf's Custom Welding</Header>
                <WorkParagraph>
                    A website developed in React that calculates the record of a team regardless of individual weekly matchups.
                </WorkParagraph>
                <a href="https://wulfscustomwelding.com/">
                    <Button primary>Site</Button>
                </a>
            </Container>
        </Segment>
        )
    }
}