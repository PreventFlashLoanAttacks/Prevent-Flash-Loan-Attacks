import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  position: fixed;
  height: 100%;
  width: 300px;
  z-index: 1001;
`

const Wrapper = styled.aside`
  z-index: 1000;
  position: fixed;
  height: 100%;
  width: 100px;

  ${Content} {
    transition: all 0.5s;
    transform: translateX(-300px);
  }

  &:hover {
    ${Content} {
      transform: translateX(0px);
    }
  }
`

const Aside: React.FC = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
)

export default Aside
