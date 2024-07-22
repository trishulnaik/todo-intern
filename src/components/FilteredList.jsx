import React from 'react'
import { todoDelete } from '../features/todos/todosSlice'
import { useDispatch } from 'react-redux'

export default function FilteredList({data}) {
    // console.log(data)
    const dispatch = useDispatch();
  return (
    <>
        {data && data.map((item)=>(
            <div key={item.id}>
                <p>{item.text}<button>Delete</button>
                </p>
            </div>
        ))}
    </>
  )
}
