import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"
class App extends React.Component {

    state = { videosDataFromRequest: [] };

    onUserSearchTermSubmit = async (userSearchTerm) => {
        const apiResponse = await youtube.get('/search', {
            params: {
                q: userSearchTerm
            }
        });

        this.setState({ videosDataFromRequest: apiResponse.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onUserSearchTermSubmit} />
                I have {this.state.videosDataFromRequest.length} videos.
            </div >
        );
    }
}

export default App;