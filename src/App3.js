import { useState, useEffect } from 'react';
//import { jsx } from 'react/jsx-runtime';

function App3() {
    const [toDo, SetToDo] = useState("");
    const [toDos, SetToDos] = useState([]);
    const onChange = (event) => SetToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === ""){
            return;
        }
        SetToDos((cur) => [toDo, ...cur]);
        SetToDo("");
    };
    return <div>
        <h1>My To-Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input 
                onChange={onChange} 
                value={toDo} 
                type="text" 
                placeholder="Write your To-Do ..." 
            />
            <button>Add To-Do</button>
        </form>
        <hr />
        {toDos.map((item, index)=> <li key = {index}>{item}</li>)}
    </div>
}

export default App3;
