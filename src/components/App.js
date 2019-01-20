import React from 'react'
import styled from 'styled-components'

import SongList from './SongList';
import SongDetail	from './SongDetail'

const App = () => {
  return (
    <Content>
      <Columns>
        <SongDetail />
        <SongList />
      </Columns>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  width: 900px;
`

export default App
