import styled from 'styled-components'

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <List>
      <Item>
        <Button onClick={onLeaveFeedback} name="good" type="button">
          Good
        </Button>
      </Item>
      <Item>
        <Button onClick={onLeaveFeedback} name="neutral" type="button">
          Neutral
        </Button>
      </Item>
      <Item>
        <Button onClick={onLeaveFeedback} name="bad" type="button">
          Bad
        </Button>
      </Item>
    </List>
  )
}

export default FeedbackOptions

const List = styled.ul`
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
`
const Item = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`

const Button = styled.button`
  padding: 0 5px;
  background-color: #d5ffae;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 1px rgba(198, 198, 198, 0.6);
  cursor: pointer;
  :hover {
    background-color: #a3f9ff;
  }
  :active {
    background-color: #65f5ff;
  }
`
