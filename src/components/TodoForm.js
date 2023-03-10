import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const focus = useRef(null)

    useEffect(() => {
        focus.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
         })

        setInput('');
    };



    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Add a Todo' 
            value={input} 
            name='text'
            className='todo-input' 
            onChange={handleChange}
            ref={focus}
            >
         </input>
         <button className='todo-button'>
         Add todo </button>
        </form>
    )
    }

export default TodoForm