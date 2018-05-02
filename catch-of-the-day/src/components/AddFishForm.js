import React from 'react';

class AddFishForm extends React.Component {
  state = {
    name: '',
    price: 0,
    status: '',
    desc: '',
    image: ''
  };

  handleChange = (event) => {
    let val = event.target.value;
    if (event.target.name === 'price') {
      parseFloat(event.target.value);
    }
    this.setState({ [event.target.name]: val});
  }

  createFish = (event) => {
    event.preventDefault();
    this.props.addFish(this.state);
  }

  render() {
    return (
      <form className='fish-edit' onSubmit={this.createFish}>
        <input name='name' type='text' placeholder='Name' onChange={this.handleChange}/>
        <input name='price' type='text' placeholder='Price' onChange={this.handleChange}/>
        <select name='status' onChange={this.handleChange}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea name='desc' placeholder='Desc'onChange={this.handleChange} />
        <input name='image' type='text' placeholder='Image' onChange={this.handleChange}/>
        <button type='submit'>+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
