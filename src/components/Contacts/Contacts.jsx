import React, { Component } from 'react'
import styled from 'styled-components'

class Contacts extends Component {
  render() {
    const { onRemoveClick, onFilterChange, contacts } = this.props
    return (
      <>
        <input onChange={onFilterChange} type="text"></input>
        <ul>
          {contacts.map(({ name, number }) => (
            <li key={name}>
              {name} - {number}
              <Button onClick={() => onRemoveClick(name)} type="button">
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default Contacts

const Button = styled.button`
  margin: 5px;
  background-color: #7b7bde;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #5858d7;
  }
`
