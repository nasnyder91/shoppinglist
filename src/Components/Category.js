import React, { Component } from 'react';
import Item from './Item';

class Category extends Component {
  deleteItem(id,cat){
    console.log(id,cat);
    this.props.onDelete(id,cat);
  }


  render() {
    let catItems;

    if(this.props.items){
      catItems = this.props.items.map(item => {
        if(item.category === this.props.category.category){
          return(
            <Item item={item} onDelete={this.deleteItem.bind(this)} key={item.id} />
          )
        } else{
          return null;
        }
      });
    }

    if(this.props.isHidden === 'false'){
      return (
        <div className="Category">
          <h2>{this.props.category.category}</h2>
          {catItems}
        </div>
      );
    } else{
      return null;
    }
  }
}

export default Category;
