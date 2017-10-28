import React, { Component } from 'react';
import uuid from 'uuid';
import Category from './Components/Category';
import AddItem from './Components/AddItem';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {categories: [
      {
        id: uuid.v4(),
        category: 'Dairy',
        items: []
      },
      {
        id: uuid.v4(),
        category: 'Dessert',
        items: []
      },
      {
        id: uuid.v4(),
        category: 'Deli',
        items: []
      },
      {
        id: uuid.v4(),
        category: 'Meat',
        items: []
      },
      {
        id: uuid.v4(),
        category: 'Fish',
        items: []
      },
      {
        id: uuid.v4(),
        category: 'Canned Goods',
        items: []
      },
      {
        id: uuid.v4(),
        category: 'Breakfast',
        items: []
      }
    ]};
  }

  handleAddItem(item){
    let categories;
    let items = [];
    for(var i = 0; i < this.state.categories.length; i++){
      if(item.category === this.state.categories[i].category){
        categories = this.state.categories;
        if(this.state.categories[i].items.length){
          items = this.state.categories[i].items;
        }

        items.push(item);
        categories[i].items = items;

        this.setState({categories:categories});
      }
    }
  }

  handleDeleteItem(id,cat){
    let categories = this.state.categories;
    let catIndex = categories.findIndex(x => x.category === cat);

    let items = categories[catIndex].items;
    let index = items.findIndex(x => x.id === id);

    items.splice(index, 1);
    categories[catIndex].items = items;
    
    this.setState({categories:categories});
  }

  render() {
    let categoryLists;
    if(this.state.categories){
      categoryLists = this.state.categories.map(category => {
        if(category.items.length){
          return(
            <Category category={category} items={category.items} onDelete={this.handleDeleteItem.bind(this)} isHidden='false' key={category.id} />
          );
        } else{
          return(
            <Category category={category} items={category.items} isHidden='true' key={category.id} />
          );
        }

      });
    }
    return (
      <div className="App">
        <AddItem addItem={this.handleAddItem.bind(this)} />
        <h1>Shopping List</h1>
        {categoryLists}
      </div>
    );
  }
}


export default App;
