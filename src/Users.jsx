import React, { useContext, useEffect } from 'react'
import {AsyncUserAction} from './Store/Actions/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { UserContext } from './Context/Context'


const Users = () => {
  const dispatch = useDispatch()
  const {users} = useSelector(state=>state.UserReducer)
  console.log(users)
  useEffect(()=>{
    dispatch(AsyncUserAction())
  },[])

  const {products} = useContext(UserContext)
  console.log(products)

  return (
    <div className='p-3'>
      User Data - {users.map(user=><h1 key={user.id} className='w-full py-2 bg-blue-600 text-sm mt-2 rounded px-3 hover:bg-green-600'>({user.id}). {user.email}</h1>)}
    </div>
  )
}

export default Users
