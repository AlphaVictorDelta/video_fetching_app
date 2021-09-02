import React from "react";

class SearchBar extends React.Component {

    state = { userSearchTerm: "" };

    handleUserInputChange = (event) => {
        this.setState({ userSearchTerm: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure we call callback from parent component.
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text"
                            onChange={this.handleUserInputChange}
                            value={this.state.userSearchTerm}
                            placeholder="Search..." />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;