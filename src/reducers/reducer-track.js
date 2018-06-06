export default function (state = {}, { type, track, cover_xl: coverXl, cover_medium: coverMedium }) {
  switch (type) {
    case 'CHANGE_TRACK':
      return track.album ? { ...track } : { ...track, ...{ album: { cover_xl: coverXl, cover_medium: coverMedium } } }
    default:
      return state
  }
}
