import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from '@emotion/styled'


const FooterContainer = styled.div({
    backgroundColor: '#1B1C1D'
});

const FooterMessage = styled.div({
    paddingTop: '1em',
    marginLeft: '0.25em',
    color: '#FFF',
    textAlign: 'center'
})

const StyledSocialIcon = styled(SocialIcon)({
    margin: '0.25em'
})

const SocialIcons = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1em'
})

export default class Footer extends Component {

    render() {
        return (
            <FooterContainer>
                <FooterMessage>Made by yours truly 😊</FooterMessage>
                <SocialIcons>
                    <StyledSocialIcon url="https://twitter.com/JakePartusch"/>
                    <StyledSocialIcon url="https://github.com/JakePartusch" />
                    <StyledSocialIcon url="https://www.linkedin.com/in/jacob-partusch-4a181b79/"/>
                </SocialIcons>
            </FooterContainer>
        )
    }
}