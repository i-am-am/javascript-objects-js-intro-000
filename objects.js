var playlist = new Object({ artist: 'song' });

function updatePlaylist(list, name, title){
  return Objsect.assign({}, list, { [name]: title })
}
