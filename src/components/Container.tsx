import styled from 'styled-components'

type ContainerProps = {
  fluid?: boolean
}

const Container = styled.div<ContainerProps>(
  props =>
    `
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;
  margin: auto;

  @media (min-width: ${props.theme.breakpoints[1]}) {
    max-width: ${props.fluid ? '90vw' : '800px'};
  }
`
)

Container.defaultProps = {
  fluid: false,
}

export default Container
