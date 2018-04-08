import React, { Component } from 'react';
import glamorous from 'glamorous';
import javaScriptLogo from './images/javascript-logo.png'
import angularLogo from './images/angular-logo.png'
import reactLogo from './images/react-logo.png'
import javaLogo from './images/java-logo.png'
import nodeLogo from './images/node-logo.png'
import springLogo from './images/spring-logo.png'

const SkillsSegment = glamorous.div({
    padding: '0em',
    padding: '1em 0em',
    background: '#CCC',
    color: 'rgba(255, 255, 255, .9)',
    textAlign: 'center',
    paddingTop: '5em',
    paddingBottom: '5em',
    paddingLeft: '0',
    paddingRight: '0',
    borderBottom: '1px solid rgba(34, 36, 38, .15)'
});

const SkillsColumn = glamorous.div({
    paddingBottom: '5em !important', 
    paddingTop: '5em !important' 
});

const SkillsHeader = glamorous.h2({
    fontSize: '3em'
});

const CardGroup = glamorous.div({
    display: 'flex',
    flexWrap : 'wrap',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginBottom: '0',
    padding: '1em',
    boxShadow: '2px 1px 6px 0px #666'
})

const Card = glamorous.img({
    width: '200px',
    height: '200px',
    objectFit: 'cover'
})

const Skill = glamorous.div({
    padding: '1em'
});

const SkillGroup = glamorous.div({
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
                            <Card src={javaScriptLogo}/>
                            <Card src={angularLogo} />
                            <Card src={reactLogo} />
                        </CardGroup>
                    </Skill>
                    <Skill>
                        <SkillsHeader>Backend</SkillsHeader>
                        <CardGroup>
                            <Card src={javaLogo} />
                            <Card src={nodeLogo} />
                            <Card src={springLogo} />
                        </CardGroup>
                    </Skill>
                </SkillGroup>
            </SkillsSegment>
        )
    }
}