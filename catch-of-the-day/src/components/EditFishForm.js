import React from 'react';

class EditFishForm extends React.Component {
  state = { ...this.props.fish };

  handleChange = (event) => {
    let val = event.target.value;
    if (event.target.name === 'price') {
      parseFloat(event.target.value);
    }
    const updatedFish = {
      ...this.props.fish,
      [event.target.name]: val
    }
    this.props.updateFish(this.props.index, updatedFish);
    this.setState({ [event.target.name]: val});
  };

  render() {
    return (
      <div className='fish-edit'>
        <input name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
        <input name='price' type='text' value={this.state.price} onChange={this.handleChange}/>
        <select name='status' value={this.state.status} onChange={this.handleChange}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea name='desc' value={this.state.desc} onChange={this.handleChange} />
        <input name='image' type='text' value={this.state.image} onChange={this.handleChange}/>
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
