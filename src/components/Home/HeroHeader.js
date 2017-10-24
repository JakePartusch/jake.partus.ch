import React, { Component } from 'react';
import {
  Container,
  Header,
  Segment,
} from 'semantic-ui-react';
import glamorous from 'glamorous';

const HeroSegment = glamorous.div({
    minHeight: '700px', 
    padding: '1em 0em'
});

const HeroHeading = glamorous.h1({
    fontSize: '4em !important', 
    fontWeight: 'normal !important', 
    marginBottom: '0 !important',
    marginTop: '3em !important' 
});

const HeroSubHeading = glamorous.h2({
    fontSize: '1.7em !important', 
    fontWeight: 'normal !important'
})

export default class HeroHeader extends Component {

    render() {
        return (
            <Segment
                as={HeroSegment}
                inverted
                textAlign='center'
                vertical>
                <Container text>
                    <Header
                        as={HeroHeading}
                        content='Jake Partusch'
                        inverted
                    />
                    <Header
                        as={HeroSubHeading}
                        content='Full-stack Developer. Dog-father, traveler, brewmaster.'
                        inverted
                    />
                </Container>
            </Segment>
        )
    }
}