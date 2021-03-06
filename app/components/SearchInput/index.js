/**
*
* SearchInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

class SearchInput extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.query = this.props.query;
  }

  onSearchChange(e) {
    this.query = e.target.value;
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.searchChanged(this.query);
  }

  render() {
    return (
      <Form inline onSubmit={this.onSubmit} className="searchInput">
        <FormGroup controlId="formInlineEmail">
          <FormControl
            style={{ width: '80%' }}
            type="text"
            placeholder={this.props.query || 'search...'}
            onChange={this.onSearchChange}
          />
          <Button type="submit">
            <FontAwesome name="search" />
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

SearchInput.propTypes = {
  query: PropTypes.string,
  searchChanged: PropTypes.func,
};

export default SearchInput;
