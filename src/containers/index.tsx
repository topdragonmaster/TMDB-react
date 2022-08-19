import React from 'react'
import { Container, Header, Content } from './styles'
import { AutoComplete } from './AutoComplete'
import { DisplayPad } from './Displaypad'

export const Explorer: React.FC = () => {
  return (
    <Container>
      <Header>
        <p> CREDIT CROSSER </p>
      </Header>
      <Content>
        <AutoComplete />
        <DisplayPad />
      </Content>
    </Container>
  )
}
