import React, { Component } from 'react';
import styled from '@emotion/styled';

const WorkSegment = styled.div({
    padding: '4em 0 4em 0',
    maxWidth: '1000px',
    margin: 'auto'
});

const WorkContainer = styled.div({
    display: 'flex',
    flexWrap : 'wrap',
    justifyContent: 'center',
    backgroundColor: '#FFF',
});

const Card = styled.div({
    width: '250px',
    height: '300px',
    boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
    margin: '1em',
    padding: '1em'
})

const CardHeader = styled.h2({
    fontSize: '22px',
    fontWeight: '400',
    margin: '0',
    marginBottom: '0.5em',
    textAlign: 'center'
});

const CardSubHeader = styled.h2({
    color: '#1a1a1a',
    fontSize: '18px',
    margin: '0.25em, 0'
});

const Divider = styled.hr({
    border: 'none',
    backgroundColor: '#EEE',
    height: '1px',
    width: '80%',
    margin: '0.5em auto'
})

const ButtonGroup = styled.div({
    display: 'flex'
})

const Button = styled.button({
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

const CardBody = styled.div({
    minHeight: '100%',
    marginBottom: '-90px'
})

const CardFooter = styled.div({

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