import React, { Component } from 'react';
import glamorous from 'glamorous';

const WorkSegment = glamorous.div({
    padding: '4em 0 4em 0',
    maxWidth: '1000px',
    margin: 'auto'
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
    margin: '1em',
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
    fontSize: '18px',
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
    backgroundColor: 'steelblue',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: '0.5rem',
    transition: '175ms ease-in-out',
    width: '100px',
    margin: '0.25em',
    border: 'steelblue 3px solid'
}, ({inverted}) => ({
    ...(inverted ? {
        backgroundColor: '#FFF',
        color: 'steelblue',
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
                {this.props.projects.map(project => 
                    <Card>
                        <CardBody>
                            <CardHeader>{project.title}</CardHeader>
                            <Divider/>
                            <CardSubHeader>{project.content}</CardSubHeader>
                        </CardBody>
                        <CardFooter>
                            <Divider/>
                            <ButtonGroup>
                                {project.siteLink && <a href={project.siteLink}> <Button inverted>Site</Button></a>}
                                <a href={project.sourceLink}><Button>Source</Button></a>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                )}
            </WorkContainer>
        </WorkSegment>
        )
    }
}