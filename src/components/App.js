import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"
import VideoList from "./VideoList";
class App extends React.Component {

    state = { videosDataFromRequest: [], selectedVideo: null };

    onUserSearchTermSubmit = async (userSearchTerm) => {
        const apiResponse = await youtube.get('/search', {
            params: {
                q: userSearchTerm
            }
        });

        this.setState({ videosDataFromRequest: apiResponse.data.items });
    };

    onVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo: selectedVideo });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onUserSearchTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videosDataFromRequest} />
            </div >
        );
    }
}

export default App;