import youtubeSearchApi from 'youtube-api-v3-search';


const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const searchYoutube = (q) => {
    return youtubeSearchApi(API_KEY, {q})
    .then(res => {
        console.log(res);
        return {
            type: "SEARCH_COMPLETED",
            payload: res
        }
    });
}

