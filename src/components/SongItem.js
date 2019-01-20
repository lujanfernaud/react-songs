import React from 'react'
import styled from 'styled-components'

const SongItem = ({ song, onSelect }) => {
  const handleSelect = () => {
    onSelect(song)
  }

  return (
    <Wrapper>
      <Title>{song.title}</Title>
      <Button onClick={handleSelect}>Select</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`

const Title = styled.h2`
  flex-basis: 100%;
  margin-right: 20px;
  font-size: .75rem;
`

const Button = styled.button``

export default SongItem
