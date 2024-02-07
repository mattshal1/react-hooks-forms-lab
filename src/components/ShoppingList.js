import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filter, setFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const onSearchChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    const filterItem = items.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredItems(filterItem);
  };

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search = {filter}
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {filter === ""
          ? itemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : filteredItems.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;