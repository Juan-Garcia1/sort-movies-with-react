import React, { Component } from 'react';

class Form extends Component {
  handleChange = (result) => {
    this.props.handleChange(result)
  }

  handleSubmit = (submit) => {
    this.props.handleSubmit(submit)
  }
  render() {
    const {selectedValue} = this.props;
    return(
      <form onSubmit={this.handleSubmit}>
        <select id="rating-filter" value={selectedValue} onChange={this.handleChange}>
          <option value="Sort">Sort</option>
          <option value="Low rating">Low rating</option>
          <option value="High rating">High rating</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <input type="submit" value="Filter" />
      </form>
    )
  }
}

export default Form;
