import React from 'react';

function EditBeer() {
  return(
    <div className='container'>
      <style jsx>
        {`
    .container {
        background-color: rgba(0,0,0,0.6);
        box-shadow: 8px 0 50px 5px white;
        color:#ebf441;
        margin-top: 40px;
    }
    input{
        width: 80%;
        margin: 10px;
    }
    button{
        margin-bottom: 10px;
        background-color: #7808ce;
        color:#ebf441;
    }
    form{
        margin-left: 16%;
        padding-top: 20px;
    }
    h1{
        text-align: center;
        padding-top: 20px;
    }
    `}
      </style>
      <h1>Edit Beer</h1>
      <form>   
        <input className='form-control' type='text' id='name' placeholder='Name'  />
        <input className='form-control' type='text' id='brewer' placeholder='Brewer' />
        <input className='form-control' type='text' id='description' placeholder='Description' />
        <input className='form-control' type='text' id='abv' placeholder='ABV' />
        <input className='form-control' type='text' id='price' placeholder='price' />
        <input className='form-control' type='text' id='pint' placeholder='pint' /><br/>
        <button className='btn'>Edit Beer</button>
      </form>
    </div>
  );
}

export default EditBeer;