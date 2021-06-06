import React, { useState } from 'react';
import './ToDoList';
import ToDoList from './ToDoList';

const App = () => {

  const [inputList, setinputList] = useState('');
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value)
  };

  const listOfItems = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList]
    });

    setinputList("");

  };
  const deleteItems = (id) => {
    console.log("deleted");

    setItem((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;

      })
    })
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>

          <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text' placeholder='Add a Item' value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {
              item.map((itemval, index) => {
                return <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems} />;
              })
            }
          </ol>

        </div>

      </div>

    </>
  );
};

export default App;