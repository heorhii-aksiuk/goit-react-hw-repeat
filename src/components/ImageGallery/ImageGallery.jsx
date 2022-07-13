import React, { Component } from 'react'
import styled from 'styled-components'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

class ImageGallery extends Component {
  render() {
    const { items } = this.props
    return (
      <List>
        {items.map((item) => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </List>
    )
  }
}

export default ImageGallery

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`
