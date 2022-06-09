import styled from 'styled-components'

function Notification({ message }) {
  return <Message>{message}</Message>
}

export default Notification

const Message = styled.p`
  padding-bottom: 5px;
  text-align: center;
`
