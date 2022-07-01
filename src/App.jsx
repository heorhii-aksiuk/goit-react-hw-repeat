import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from './components/SearchBar/SearchBar'

const test = process.env.REACT_APP_PIXABAY_API_KEY

class App extends Component {
  render() {
    console.log(test)
    return (
      <Container>
        <SearchBar />
      </Container>
    )
  }
}

export default App

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`
