import React, { Component } from 'react';
import glamorous from 'glamorous';

const WorkSegment = glamorous.div({
    padding: '4em 0em !important'
});

const WorkContainer = glamorous.div({
    display: 'flex',
    flexWrap : 'wrap',
    justifyContent: 'center',
    backgroundColor: '#FFF',
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

const Card = glamorous.div({
    width: '250px',
    height: '300px',
    boxShadow: '2px 1px 6px 0px #666',
    margin: '2em',
    padding: '1em'
})

const CardHeader = glamorous.h2({
    fontSize: '22px',
    fontWeight: '400',
    margin: '0',
    marginBottom: '0.5em',
    textAlign: 'center'
});

const CardSubHeader = glamorous.h2({
    color: '#1a1a1a',
    fontSize: '16px',
    margin: '0.25em, 0'
});

const Divider = glamorous.hr({
    border: 'none',
    backgroundColor: '#EEE',
    height: '1px',
    width: '80%',
    margin: '0.5em auto'
})

const ButtonGroup = glamorous.div({
    display: 'flex'
})

const Button = glamorous.button({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    boxSizing: 'border-box',
    backgroundColor: 'steelblue',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: '0.5rem',
    transition: '175ms ease-in-out',
    width: '100px',
    margin: '0.25em'
}, ({inverted}) => ({
    ...(inverted ? {
        backgroundColor: '#FFF',
        color: 'steelblue',
        border: 'steelblue 3px solid'
    }: {})
}))

const CardBody = glamorous.div({
    minHeight: '100%',
    marginBottom: '-90px'
})

const CardFooter = glamorous.div({

})


export default class Work extends Component {

    render() {
        return (
        <WorkSegment>
            <WorkContainer>
                <Card>
                    <CardBody>
                        <CardHeader>Fantasy Football Power Rankings</CardHeader>
                        <Divider/>
                        <CardSubHeader>A website developed in React that calculates the record of a team regardless of individual weekly matchups.</CardSubHeader>
                    </CardBody>
                    <CardFooter>
                        <Divider/>
                        <ButtonGroup>
                            <Button inverted>Site</Button>
                            <Button>Source</Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody>
                        <CardHeader>Garmin Node API</CardHeader>
                        <Divider/>
                        <CardSubHeader>An npm package for retrieving steps and other data from a Garmin Connect account.</CardSubHeader>
                    </CardBody>
                    <CardFooter>
                        <Divider/>
                        <ButtonGroup>
                            <Button inverted>Site</Button>
                            <Button>Source</Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody>
                        <CardHeader>Villa Springs Website</CardHeader>
                        <Divider/>
                        <CardSubHeader>A website developed with Hugo for a local neighborhood community.</CardSubHeader>
                    </CardBody>
                    <CardFooter>
                        <Divider/>
                        <ButtonGroup>
                            <Button inverted>Site</Button>
                            <Button>Source</Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                {/* <Divider
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
                <Divider />
                <Header as={WorkHeader}>Garmin Node API</Header>
                <WorkParagraph>
                    An npm package for retrieving steps and other data from a Garmin Connect account
                </WorkParagraph>
                <Button.Group>
                    <a href="https://github.com/JakePartusch/garmin-node-api">
                        <Button>Code</Button>
                    </a>
                    <Button.Or />
                    <a href="https://www.npmjs.com/package/garmin-node-api">
                        <Button primary>Site</Button>
                    </a>
                </Button.Group>
                <Divider/>
                <Header as={WorkHeader}>Wulf's Custom Welding</Header>
                <WorkParagraph>
                    A Wordpress site built for a local company.
                </WorkParagraph>
                <a href="https://wulfscustomwelding.com/">
                    <Button primary>Site</Button>
                </a> */}
            </WorkContainer>
        </WorkSegment>
        )
    }
}