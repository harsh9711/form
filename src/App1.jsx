import React,{ useState } from 'react';
const App1=()=>{
  const[fullname,setfullName]=useState({
    fname :'',
    lname: '',
    email:'', 
    phone:'',
    qua:'',
  });  

  const inputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
    ///const value=event.target.value;
   // const name=event. target.name;
    const {name,value}=event.target;
      setfullName((prevalue)=>{
        console.log(prevalue);
        return{
          ...prevalue,
          [name]:value,
        }
    //     if(name==='fname')
    //     {
    //       return{
    //       fname :value,
    //       lname: prevalue.lname,
    //     email:prevalue.email,
    //     phome:prevalue.phone
    //     };   
    //     }  
    //     else if(name==='lname')
    //     {
    //       return{ 
    //       fname :prevalue.fname,
    //       lname: value,
    //        email:prevalue.email,
    //        phone:prevalue.phone
    //     };
    //   }
    //     else if(name==='email')
    //     {
    //       return{ 
    //         lname: prevalue.lname,
    //       fname :prevalue.fname,
    //       email:value,
    //       phone:prevalue.phone
    //     };
    //   }
    //   else if(name==='phone')
    //   {
    //     return{ 
    //     fname :prevalue.fname,
    //     lname: prevalue.lname,
    //     email:prevalue.email,
    //     phone:value,
    //   };
    // }    
      });       
    };
  
  const onSubmit=(event)=>{
    event.preventDefault();
    alert('form submitted')
  };
 
  return(
  <>
  <div className="main_div">
  <form onSubmit={onSubmit}>
    <div>
      <h1>
       Hello {fullname.fname} {fullname.lname}
      </h1>
      <p> {fullname.email} </p>
      <p> {fullname.phone} </p>
      <p>{fullname.qua}</p>
      <input
      type="text" 
      placeholder="ENTER YOUR NAME"
      name='fname'
       onChange={inputEvent}
       value={fullname.fname}
       />
       <br/>
       <input
      type="text" 
      placeholder="ENTER YOUR LAST NAME"
      name='lname'
       onChange={inputEvent}
       value={fullname.lname}
       /> 
      <input
      type="email" 
      placeholder="ENTER YOUR email "
      name='email'
       onChange={inputEvent}
       value={fullname.email}
       autoComplete='off' 
       /> 
       <input
      type="number" 
      placeholder="ENTER YOUR mobile no "
      name='phone'
       onChange={inputEvent}
       value={fullname.phone}
       />
       <input
      type="text" 
      placeholder="ENTER YOUR QUALIFICATION "
      name='qua'
       onChange={inputEvent}
       value={fullname.qua}
       />
      <button type='submit'>
      SUBMIT ME 👍 
     </button>
    </div>
    </form> 
    </div>
 </>
  );
};
export default App1; 