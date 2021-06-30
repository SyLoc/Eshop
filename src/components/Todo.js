import React from 'react';
import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'
import {useDispatch} from 'react-redux'

import {
  REMOVE_ALL
} from '../constant/constants'


const Todo = ({data,Remove_Item, Edit_Item}) => {
  const dispatch = useDispatch()
  const handleRemove_all = () =>{
    dispatch({type: REMOVE_ALL})
  }

  return (
    <article className='todo-lists'>
      {data.length > 1 ? (<button onClick={handleRemove_all}>Remove All</button>) : null}
      {
        data.map((item) =>{
          const {id, name} = item
          return (
            <div key={id} className='todo-item'>
              <h3>{name}</h3>
              <div className="container-btn">
                <button onClick={() => Edit_Item(id)}><BiEdit/></button>
                <button onClick={() => Remove_Item(id)}><AiFillDelete/></button>
              </div>
            </div>
          )
        })
      }
    </article>
  );
};


export default Todo;