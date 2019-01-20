import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { selectSong } from '../actions'

import SongItem from './SongItem'

class SongList extends Component {
  handleSelect = (song) => {
    this.props.selectSong(song)
  }

  renderList() {
    return this.props.songs.map(song => {
      return <SongItem key={song.title} song={song} onSelect={this.handleSelect} />
    })
  }

  render() {
    return (
      <Wrapper>
        {this.renderList()}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs }
}

const Wrapper = styled.div`
  width: 550px;
  max-width: 550px;
`

export default connect(mapStateToProps, { selectSong })(SongList)
