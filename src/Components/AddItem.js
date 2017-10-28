import React, { Component } from 'react';
import uuid from 'uuid';

class AddItem extends Component {
  constructor(){
    super();
    this.state = {
      newItem:{}
    }
  }

  handleSubmit(e){
    if((this.refs.item.value === "") || (this.refs.quantity.value === "")){
      alert("All fields required.");
    } else{
      this.setState({newItem:{
        id: uuid.v4(),
        category: this.refs.category.value,
        item: this.refs.item.value,
        quantity: this.refs.quantity.value
      }}, function(){
        //console.log(this.state);
        this.props.addItem(this.state.newItem);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="AddItem">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Item</label><br />
            <input type='text' ref='item' />
          </div>
          <div>
            <label>Quantity</label><br />
            <input type='number' ref='quantity' />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              <option value='Dairy'>Dairy</option>
              <option value='Dessert'>Dessert</option>
              <option value='Deli'>Deli</option>
              <option value='Meat'>Meat</option>
              <option value='Fish'>Fish</option>
              <option value='Canned Goods'>Canned Goods</option>
              <option value='Breakfast'>Breakfast</option>
            </select>
          </div>
          <input type="submit" value='Submit' />
        </form>
      </div>
    );
  }
}

export default AddItem;
