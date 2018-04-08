import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import glamorous from 'glamorous';

const FooterContainer = glamorous.div({
    height: '65px',
    backgroundColor: '#1B1C1D',
    display: 'flex'
});

const FooterMessage = glamorous.p({
    marginTop: '20px',
    paddingLeft: '2em',
    color: '#FFF'
})

const StyledSocialIcon = glamorous(SocialIcon)({
    margin: '0.25em'
})

const SocialIcons = glamorous.div({
    display: 'flex'
})

export default class Footer extends Component {

    render() {
        return (
            <FooterContainer>
                <SocialIcons>
                    <StyledSocialIcon url="https://twitter.com/JakePartusch"/>
                    <StyledSocialIcon url="https://github.com/JakePartusch" />
                    <StyledSocialIcon url="https://www.linkedin.com/in/jacob-partusch-4a181b79/"/>
                </SocialIcons>
                <FooterMessage>Made by yours truly 😊</FooterMessage>
            </FooterContainer>
        )
    }
}