import { createSlice } from "@reduxjs/toolkit";

export const UserSclice = createSlice({
    name:"users",
    initialState:{
        users:[]
    },
    reducers:{
        getUsers:(state,actions)=>{
            state.users = actions.payload
            // console.log()
            
        }
    }
})

export default UserSclice.reducer

export const {getUsers} = UserSclice.actions