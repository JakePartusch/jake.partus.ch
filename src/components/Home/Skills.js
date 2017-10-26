import React, { Component } from 'react';
import { Segment, Grid, Header, Image } from 'semantic-ui-react';
import glamorous from 'glamorous';

const SkillsSegment = glamorous.div({
    padding: '0em'
});

const SkillsColumn = glamorous.div({
    paddingBottom: '5em !important', 
    paddingTop: '5em !important' 
});

const SkillsHeader = glamorous.h3({
    fontSize: '2em !important'
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
                            <Header as={SkillsHeader}>Frontend</Header>
                            <Image.Group size='tiny'>
                                <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"} />
                                <Image src={"https://jaxenter.com/wp-content/uploads/2016/12/angular.png"} />
                                <Image src={"https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/react-6c1ac47e0329377f8fe4f71455cefb51.svg"} />
                            </Image.Group>
                        </Grid.Column>
                        <Grid.Column as={SkillsColumn}>
                            <Header as={SkillsHeader}>Backend</Header>
                            <Image.Group size='tiny'>
                                <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"} />
                                <Image src={"https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/419px-Java_programming_language_logo.svg.png"} />
                                <Image src={"http://jaystack.com/wp-content/uploads/2015/12/nodejs-logo-e1497443346889.png"} />
                                <Image src={"http://www.unixstickers.com/image/cache/data/stickers/spring/spring-leaf.sh-340x340.png"} />
                            </Image.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}