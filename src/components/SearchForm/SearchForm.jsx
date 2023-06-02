import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, ButtonSearch, Input, Label } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const hanleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };
  return (
    <Form onSubmit={hanleSubmit}>
      <Label htmlFor="search">Find movie by name</Label>
      <Input
        type="text"
        name="search"
        value={query}
        onChange={handleChange}
        placeholder="Search movie..."
        autoComplete="off"
      />
      <ButtonSearch type="submit">Search</ButtonSearch>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
