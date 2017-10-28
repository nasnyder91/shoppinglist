import React, { Component } from 'react';

class Item extends Component {
  deleteItem(id,cat){
    this.props.onDelete(id,cat);
  }


  render() {
    return (
      <li className="Item">
        Qty: {this.props.item.quantity} | {this.props.item.item}  <a onClick={this.deleteItem.bind(this, this.props.item.id, this.props.item.category)} style={{color: 'red'}}>(DELETE)</a>
      </li>
    );
  }
}

export default Item;
