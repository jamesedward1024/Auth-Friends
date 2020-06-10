import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const NewStudent = ({friends, setFriends}) => {
  const [formData, setFormData] = useState({id: '', name: "", age: "", email: ""})
  console.log(friends)
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      id: Date.now()
    })
  }

  const handlePost = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", formData)
      .then(res => setFriends(res.data))
  }
  return(
  <form onSubmit={handlePost}>
    <input name="name" value={formData.name} onChange={handleChange} placeholder='name'/>
    <input name="age" value={formData.age} onChange={handleChange} placeholder='age'/>
    <input name="email" value={formData.email} onChange={handleChange} placeholder='email' />
    <button>Submit</button>
  </form>
)}

export default NewStudent