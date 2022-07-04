import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import apiRequest from './services/api'
import styled from 'styled-components'
import GlobalStyle from './theme/globalStyle'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'

const ERROR_MESSAGE =
  'Oops, something went wrong :( Please, reset page or try later'

export default class App extends Component {
  state = {
    query: null,
    data: [],
  }

  async componentDidUpdate(_, prevState) {
    const { query } = this.state
    const prevQuery = prevState.query

    if (query === prevQuery) return

    try {
      const response = await apiRequest(query)

      if (response.status !== 200) {
        throw new Error(ERROR_MESSAGE)
      }
      const data = response.data.hits
      this.setState({ data })
    } catch (error) {
      toast.error(error.message)
      console.error(error.message)
    }
  }

  setQuery = (value) => {
    this.setState({ query: value })
  }

  render() {
    const { data } = this.state
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <SearchBar getSearchValue={this.setQuery} />
          {data && <ImageGallery items={data} />}
        </AppContainer>
        <ToastContainer />
      </>
    )
  }
}

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`
