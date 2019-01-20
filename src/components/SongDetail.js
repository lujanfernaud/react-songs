import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const SongDetail = ({ song }) => {
  if (!song) {
    return <Wrapper>Please select a song :)</Wrapper>
  }

  return (
    <Wrapper>
      <Title>{song.title}</Title>
      <Artist>{song.artist}</Artist>
      <Duration>Duration: {song.duration}</Duration>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

const Wrapper = styled.div`
  flex-basis: 100%;
  margin-top: 10px;
  margin-right: 25px;
  padding: 15px;
  border: 1px solid #ddd;
`

const Title = styled.h2`
  margin-top: 0;
`

const Artist = styled.h3``

const Duration = styled.p``

export default connect(mapStateToProps)(SongDetail)
