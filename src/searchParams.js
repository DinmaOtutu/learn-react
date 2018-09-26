import React from "react";
import SearchBox from "./searchBox";
import { navigate } from "@reach/router"
class SearchParams extends React.Component {
  handleSearchSubmit() {
    navigate('/')
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox  search={this.handleSearchSubmit}/>
      </div>
    );
  }
}

export default SearchParams;
