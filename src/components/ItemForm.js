import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit }) {

  const [form,setForm] = useState({
    id:'',
    name:'',
    category: 'Produce',
  });

  const FormSubmitHandle = (e) => {
    e.preventDefault();
    onItemFormSubmit(form);
    setForm({
      id:'',
      name:'',
      category: 'Produce',
    });
  }
  // useEffect(()=> {
  //   console.log(form)
  // },[form])
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      id: uuid(),
      [name] : value
    })
  }
  return (
    <form className="NewItem" onSubmit={FormSubmitHandle}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;