import React, { useState, useRef, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './TodoList.css'
import Todo from './Todo'

import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM
} from '../constant/constants'

const TodoList = () => {
  const ref = useRef(null);
  const data = useSelector(state => state.todos.data);
  const [textInput, setTextInput] = useState('')
  const [editId, setEditId] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(textInput && isEdit){
      const newdata = data.map((item) => {
                        if(item.id === editId){
                          return {
                            id: editId,
                            name: textInput
                          }
                        }
                        return item
                      })
      dispatch({type: EDIT_ITEM, payload: newdata})
      setTextInput('')
      setEditId('')
      setIsEdit(false)
    }
    else{
          const randomId = new Date().getTime().toString()
          const todo = {
            id: randomId.substr(randomId.length - 5),
            name: textInput
          }
          dispatch({type:ADD_ITEM, payload:todo})
          setTextInput('')
        }
  }

  useEffect(() => {
    ref.current.focus()
  }, []);

  
  const Remove_Item = (id) =>{
    const newData = data.filter(item => item.id !== id)
    dispatch({type: REMOVE_ITEM, payload: newData})
  }

  const Edit_Item = (id) =>{
    const itemEdit = data.find((item) => item.id === id)
    setTextInput(itemEdit.name)
    setEditId(id)
    setIsEdit(true)
  }

  return (
    <div>
      <section className='section-center section-todoList' >
        <form action="" onSubmit={handleSubmit}>
          <input 
            ref={ref}
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            />
          <button>{isEdit ? 'edit': 'add'}</button>
        </form>
      </section>
      <Todo data={data} Remove_Item={Remove_Item} Edit_Item={Edit_Item}/>
    </div>
  );
};


export default TodoList;