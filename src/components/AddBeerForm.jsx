import React from 'react';

function AddBeerForm() {
    let _name = null;
    let _brewer = null;
    let _description = null;
    let _abv = null;
    let _price = null;
    let _pint = null;

    function handleAddBeerFormSubmission(event) {
        event.preventDefault();
        _name.value = '';
        _brewer.value = '';
        _description.value = '';
        _abv.value = '';
        _price.value = '';
        _pint.value = '';
    }

  return (
    <div className='container'>
      <style jsx>
        {`
                .container {
                    background-color: rgba(0,0,0,0.6);
                    box-shadow: 8px 0 50px 5px white;
                    color:#ebf441;
                    margin-top: 40px;
                }
                label{
                    font-size: 20px;
                    font-weight: bold;
                    color: #ebf441;
                }
                input{
                    width: 80%;
                }
                button{
                    margin-bottom: 10px;
                    background-color: #7808ce;
                    color:#ebf441;
                }
                form{
                    margin-left: 16%;
                }
                h1{
                    text-align: center;
                    padding-top:20px;
                }
        `}
      </style>
      <h1>Add New Beer</h1>
      <form onSubmit={handleAddBeerFormSubmission}>
        <label>Name</label>
        <input className='form-control' type='text' id='name' placeholder='Name' ref={(input) => {_name = input;}} />
        <label>Brewer</label>
        <input className='form-control' type='text' id='brewer' placeholder='Brewer' ref={(input) => {_brewer = input;}}/>
        <label>Description</label>
        <input className='form-control' type='text' id='description' placeholder='Description' ref={(input) => {_description = input;}}/>
        <label>ABV</label>
        <input className='form-control' type='text' id='abv' placeholder='ABV' ref={(input) => {_abv = input;}}/>
        <label>Price</label>
        <input className='form-control' type='text' id='price' placeholder='price' ref={(input) => {_price = input;}}/>
        <label>Pint</label>
        <input className='form-control' type='text' id='pint' placeholder='pint' ref={(input) => {_pint = input;}}/><br/>
        <button className='btn' type='submit'>Add Beer</button>
      </form>
    </div>

  );
}

export default AddBeerForm;