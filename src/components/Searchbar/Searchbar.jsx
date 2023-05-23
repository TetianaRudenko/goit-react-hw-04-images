import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { SearchHeader, SearchForm, SearchFormInput, SearchFormButton, SearchIcon } from "./Searchbar.styled";

const Searchbar = ({ onSubmit }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.info('Please enter your search query.');
      return;
    }
    onSubmit(searchQuery);
  }

  const handleSearchQuery = e => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  return (
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>

        <SearchFormButton type="submit">
          <SearchIcon/>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleSearchQuery}
        />
        
      </SearchForm>
    </SearchHeader>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}

export { Searchbar };