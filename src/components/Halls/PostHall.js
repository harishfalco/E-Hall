import React,{useState} from 'react'
import Axios from 'axios'
const PostHall = () => {
    const [hallName, setHallName] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [district, setDistrict] = useState(' ')
    const [state, setState] = useState(' ')
    const [charge , setCharge] = useState(' ');
    const [description, setDescription] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [image, setImage] = useState(' ')
    const handleClick = () =>{
        const data = new FormData();
        data.append("hallName",hallName);
        data.append("ownerName",ownerName);
        data.append("district",district);
        data.append("state",state);
        data.append("charge",charge);
        data.append("description",description);
        data.append("email",email);
        data.append("image",image);
        // console.log(data)
        
        Axios.post("http://localhost:3001/posthall",data)
        .then((response)=>{
         if(response.data.err){
             alert(response.data.err)
         }
         else{
            alert(response.data.message)
         }
         
     })

    }

    return (
        <div>
             <input
              type="text"
              placeholder="hall name"
              value={hallName}
              onChange = {(e)=>(setHallName(e.target.value))}
              />
              <br />
              <input
              type="text"
              placeholder="Owner Name"
              value={ownerName}
              onChange = {(e)=>(setOwnerName(e.target.value))}
              /> <br />
              <input
              type="email"
              placeholder="email"
              value={email}
              onChange = {(e)=>(setEmail(e.target.value))}
              /> <br />
              <input
              type="text"
              placeholder="district"
              value={district}
              onChange = {(e)=>(setDistrict(e.target.value))}
              /> <br />
              <input
              type="text"
              placeholder="state"
              value={state}
              onChange = {(e)=>(setState(e.target.value))}
              /> <br />
              <input
              type="text"
              placeholder="fees / perday"
              value={charge}
              onChange = {(e)=>(setCharge(e.target.value))}
              /> <br />
              <textarea  
                rows="4" 
                cols="50"
                value={description}
                onChange = {(e)=>(setDescription(e.target.value))}
               />   <br />   
               <input 
               type="file"
            //    value={image}
               onChange = {(e)=>(setImage(e.target.files[0]))}
               />
                <button
                    onClick = {handleClick}
                >
                    submit
                </button>     
        </div>
    )
}

export default PostHall
