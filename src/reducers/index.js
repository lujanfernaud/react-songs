import { combineReducers } from 'redux'

const songsReducers = () => {
  return [
    { title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: '5:25' },
    { title: 'Losing My Religion', artist: 'R.E.M.', duration: '5:05' },
    { title: 'Mama Said Knock You Out', artist: 'LL Cool J', duration: '4:45' },
    { title: 'Smooth', artist: 'Santana', duration: '5:20' },
    { title: 'Wonderwall', artist: 'Oasis', duration: '4:37' },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer
})
