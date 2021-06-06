import React, { useState } from 'react';
import './css/style.css';

const Todo = () => {
    const [inputData, setInputData] = useState();
    const [items, setItems] = useState([]);

    const handleSubmit = () => {
        if (!inputData) {
        }
        else {
            setItems([...items, inputData])
            setInputData('')
        }
    }

    const deleteItem = (id) => {
        const updatedItem = items.filter((ele, ind) => {
            return id !== ind
        })
        setItems(updatedItem)
    }

    return (
        <>
            <div className='main-div'>
                <div className='center-div'>
                    <h1>What's is the Plan for Today?</h1>
                    <div className='inputfield'>
                        <input type='text' placeholder= 'Add a Todo ✍️' value={inputData} onChange={e => setInputData(e.target.value)} />
                        <i class="fa fa-plus" onClick={handleSubmit}></i>
                    </div>


                    <div>
                        {items.map((ele, ind) => {
                            return (
                                <div className='datafield' key={ind}>
                                    <p>{ele}</p>
                                    <i class="fa fa-trash" onClick={() => deleteItem(ind)}></i>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
