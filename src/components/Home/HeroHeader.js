import React, { Component } from 'react';
import {
  Container,
  Header,
  Segment,
  Image
} from 'semantic-ui-react';
import glamorous from 'glamorous';

const HeroSegment = glamorous.div({
    minHeight: '700px', 
    padding: '1em 0em'
});

const HeroHeading = glamorous.div({
    marginBottom: '0',
    marginTop: '8em' 
});

const NameHeader = glamorous.h1({
    fontSize: '4em', 
    fontWeight: 'normal', 
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
                    <HeroHeading>
                        <Image shape='circular' size={"small"} centered src={"https://objectpartners.com/wp-content/uploads/2016/01/jakepartusch-headshot-square.jpg"}/>
                        <NameHeader>Jake Partusch</NameHeader>
                    </HeroHeading>
                    <HeroSubHeading>Full-Stack Developer. Traveler. Brewer. Golden retriever lover.</HeroSubHeading>
                </Container>
            </Segment>
        )
    }
}