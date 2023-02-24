import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser,deleteUser ,updateUsername} from './features/Users';

const Home = () => {
  const dispatch = useDispatch();
  const userlist = useSelector((state)=>state.users.value);

  const[name,setName]= useState("");
  const[username,setUsername]= useState("");
  const[newusername,setNewUsername]= useState("");
  return (
   <>
    <>
    <div className="App">
      <h1 className='fw-semi-bold fs-cursive mt-5 mb-3'>Employee Details</h1>
      <div className='addUser row'>
        <input className=' py-1 mb-1 rounded  col-lg-6 col-md-2 col-xs-2' type="text" placeholder='Name...'onChange={(event)=>{setName(event.target.value);}} />
        <input  className='py-1 mb-1 rounded col-lg-6 col-md-2 col-xs-2' type="text" placeholder='Username...'onChange={(event)=>{setUsername(event.target.value);}}  />
        <button className='btn btn-success' onClick={()=>{dispatch(addUser({id:userlist[userlist.length-1].id+1 , name, username}))}} >Add user</button>
      </div>
      <div className='displayUsers '>
        {userlist.map((user)=>{
          return (
            <div className='mx-1 fw-bold'>
              {/* <h3>{user.id}</h3> */}
              <p><span className='text-warning'>Name : </span>{user.name}</p>
              <p><span className='text-warning'>UserName :</span> {user.username}</p>

              <input className='rounded py-2' type="text" placeholder='New UserName...'onChange={(event)=>{
                setNewUsername(event.target.value);
                }} />
                
                <button className='btn btn-primary py-2' onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newusername })
                  );
                }}>Update</button>

                <button className='btn btn-danger py-2' onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}>Delete</button>
                
            </div>
          )
        })}
      </div>
    </div>
    </>
   </>
  )
}

export default Home