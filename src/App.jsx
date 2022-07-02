import React, { Component } from 'react'

import styled from 'styled-components'
import GlobalStyle from './theme/globalStyle'
import SearchBar from './components/SearchBar/SearchBar'

const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY

class App extends Component {
  state = {
    searchValue: null,
  }

  setSearchValue = (value) => {
    this.setState({ searchValue: value })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <SearchBar getSearchValue={this.setSearchValue} />
        </AppContainer>
      </>
    )
  }
}

export default App

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`
