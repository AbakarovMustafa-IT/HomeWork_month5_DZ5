import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeInput, clearuserInput, deleteAll } from "../../store/usersSlice";
import User from "../../components/Users";



function UsersPage() {

  const dispatch = useDispatch()

  const { inputValue, users } = useSelector(state => state.usersReducer)

  const changeInpuFunc = (event) => {
    dispatch(changeInput(event.target.value))
  }

  const addUserFunc = () => {
    dispatch(addUser(inputValue))
  }

  return (
    <div>
      <input value={inputValue} type="text" onChange={changeInpuFunc} />
      <button onClick={addUserFunc}>add user</button>

      <button onClick={() => dispatch(clearuserInput())}>clead</button>
      <button onClick={() => dispatch(deleteAll())}>delete all</button>
      {users.map(user => <User name={user} />)}

    </div>
  )
}

export default UsersPage