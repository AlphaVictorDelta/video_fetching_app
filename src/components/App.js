import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {

    state = { videosDataFromRequest: [], selectedVideo: null };

    componentDidMount() {
        this.onUserSearchTermSubmit("Kings and Generals");
    };

    onUserSearchTermSubmit = async (userSearchTerm) => {
        const apiResponse = await youtube.get('/search', {
            params: {
                q: userSearchTerm
            }
        });

        this.setState({
            videosDataFromRequest: apiResponse.data.items,
            selectedVideo: apiResponse.data.items[3]
        });

    };

    onVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo: selectedVideo });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onUserSearchTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videosDataFromRequest} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;