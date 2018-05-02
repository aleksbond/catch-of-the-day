import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  state = {
    storeId: '123'
  }

  handleChange = (event) => {
    this.setState({ storeId: event.target.value});
  }

  goToStore = (event) => {
    event.preventDefault();
    this.props.history.push(`/store/${this.state.storeId}`);
  }

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore} >
        <h2>Please enter a store</h2>
        <input type='text'
          required
          placeholder='Store Name'
          defaultValue={getFunName()}
          onChange={this.handleChange}
        />
        <button type='submit'>Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
