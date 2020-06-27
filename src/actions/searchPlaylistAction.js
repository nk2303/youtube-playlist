export const searchMyPlaylists = (playlistName) => {
    return {
        type: "SEARCH_MY_PLAYLIST",
        payload: playlistName
    }
}

export const searchAllPlaylists = (playlistName) => {
    return {
        type: "SEARCH_ALL_PLAYLISTS",
        payload: playlistName
    }
}