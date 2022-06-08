import { useState } from 'react'
import styled from 'styled-components'

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {
    if (e.target.innerText === 'Good') setGood((prev) => prev + 1)
    if (e.target.innerText === 'Neutral') setNeutral((prev) => prev + 1)
    if (e.target.innerText === 'Bad') setBad((prev) => prev + 1)
  }

  return (
    <Container>
      <Wrapper>
        <Title>Please leave feedback</Title>
        <List>
          <Item>
            <Button onClick={handleClick} type="button">
              Good
            </Button>
          </Item>
          <Item>
            <Button onClick={handleClick} type="button">
              Neutral
            </Button>
          </Item>
          <Item>
            <Button onClick={handleClick} type="button">
              Bad
            </Button>
          </Item>
        </List>
        <Title>Statistic</Title>
        <List>
          <Item>
            <StatisticCell>
              <CellTitle>Good:</CellTitle>
              <CellData>{good}</CellData>
            </StatisticCell>
          </Item>
          <Item>
            <StatisticCell>
              <CellTitle>Neutral:</CellTitle>
              <CellData>{neutral}</CellData>
            </StatisticCell>
          </Item>
          <Item>
            <StatisticCell>
              <CellTitle>Bad:</CellTitle>
              <CellData>{bad}</CellData>
            </StatisticCell>
          </Item>
        </List>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 320px;
`

const Wrapper = styled.div`
  padding: 15px;
  width: 100%;
  margin-top: 20px;
  background-color: #dedede;
  border-radius: 4px;
  box-shadow: 1px 1px 4px 1px rgba(198, 198, 198, 0.3);
`
const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 20px;
  text-align: center;
`

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

const StatisticCell = styled.div`
  min-width: 70px;
  padding: 0 5px;
  background-color: #fff;
  border: solid 1px #afafaf;
  border-radius: 4px;
`

const CellTitle = styled.h4`
  font-weight: 400;
  text-align: center;
`

const CellData = styled.p`
  font-weight: 400;
  text-align: center;
`
