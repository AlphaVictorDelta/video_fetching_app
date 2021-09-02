import React from "react";
import SearchBar from "./SearchBar";
class App extends React.Component {

    onUserSearchTermSubmit = (userSearchTerm) => {
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onUserSearchTermSubmit} />
            </div >
        );
    }
}

export default App;