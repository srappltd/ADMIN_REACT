import {getUsers} from "../Reducers/UserReducer";
import axios from "../../Utility/Axios";

export const AsyncUserAction = () => async (dispatch,getState)=>{
    const {data} = await axios.get("/users")
    // console.log(data)
    dispatch(getUsers(data))
}
