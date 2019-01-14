import React, { Component } from 'react';
import styled from '@emotion/styled';

const SkillsSegment = styled.div({
    padding: '0em',
    padding: '1em 0em',
    background: 'rgb(240, 240, 240)',
    color: '#1B1C1D',
    textAlign: 'center',
    paddingTop: '5em',
    paddingBottom: '5em',
    paddingLeft: '0',
    paddingRight: '0',
    borderBottom: '1px solid rgba(34, 36, 38, .15)'
});

const SkillsHeader = styled.h2({
    fontSize: '3em',
    fontWeight: '400'
});

const CardGroup = styled.div({
    display: 'flex',
    flexWrap : 'wrap',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginBottom: '0',
    padding: '1em',
    boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)'
})

const Card = styled.img({
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '0'
})

const Skill = styled.div({
    padding: '1em'
});

const SkillGroup = styled.div({
    display : 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
});

export default class Skills extends Component {
    render() {
        return (
            <SkillsSegment>
                <SkillGroup>
                    <Skill>
                        <SkillsHeader>Frontend</SkillsHeader>
                        <CardGroup>
                            {this.props.frontendLogos.map(logo => <Card key={logo} src={logo}/>)}
                        </CardGroup>
                    </Skill>
                    <Skill>
                        <SkillsHeader>Backend</SkillsHeader>
                        <CardGroup>
                            {this.props.backendLogos.map(logo => <Card key={logo} src={logo}/>)}
                        </CardGroup>
                    </Skill>
                </SkillGroup>
            </SkillsSegment>
        )
    }
}