import styled from 'styled-components'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
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
      <TotalWrapper>
        <p>Total: {total}</p>
        {total > 0 && <p>Positive feedback: {positivePercentage}%</p>}
      </TotalWrapper>
    </>
  )
}

export default Statistics

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

const TotalWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 5px;
  width: 230px;
  text-align: center;
  background-color: #fff;
  border: solid 1px #afafaf;
  border-radius: 4px;
`
