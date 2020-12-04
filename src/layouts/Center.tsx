import styled from 'styled-components'

type CenterLayoutProps = React.CSSProperties

const Center = styled.div<CenterLayoutProps>(props => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  placeContent: 'center',
  ...props.style,
}))

export default Center
