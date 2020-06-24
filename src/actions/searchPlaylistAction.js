export const searchMyPlaylists = (playlistName) => {
    return {
        type: "SEARCH_MY_PLAYLIST",
        payload: playlistName
    }
}