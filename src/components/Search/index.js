import React from "react";
import { connect } from "react-redux";
import { InputGroup, FormControl } from "react-bootstrap";
import { debounce } from "lodash";

import { getMovieListByTitle } from "store/actions";

const SearchByTitle = ({ getMovieListByTitle, onSearchKeyword }) => {
  try {
    const handleChange = e => {
      searchKeyword(e.target.value);
    };

    const searchKeyword = debounce(search => {
      onSearchKeyword(search)
    }, 800);

    return (
      <InputGroup className="mb-3">
        <FormControl onChange={handleChange} placeholder="Try Avengers...." />
      </InputGroup>
    );
  } catch (error) {
    console.error(error);
    return <div>Something Went Wrong</div>;
  }
};

export default connect(null, { getMovieListByTitle })(SearchByTitle);