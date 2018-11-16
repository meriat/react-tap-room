import React from 'react';

function AddBeerForm() {
    return (
        <div className='container'>
            <style jsx>
                {`
                .container {
                    background-color: rgba(0,0,0,0.6);
                    box-shadow: 8px 0 50px 5px white;
                    color:#ccddff;
                    margin-top: 20px;
                }
                label{
                    font-size: 20px;
                    font-weight: bold;
                    color: white;
                }
                input{
                    width: 80%;
                }
                button{
                    margin-bottom: 10px;
                }
                form{
                    margin-left: 16%;
                }
        `}
            </style>
            <form>
                <label>Name</label>
                <input className='form-control' type='text' id='name' placeholder='Name' />
                <label>Brewer</label>
                <input className='form-control' type='text' id='brewer' placeholder='Brewer' />
                <label>Description</label>
                <input className='form-control' type='text' id='description' placeholder='Description' />
                <label>ABV</label>
                <input className='form-control' type='text' id='abv' placeholder='ABV' />
                <label>Price</label>
                <input className='form-control' type='text' id='price' placeholder='price' />
                <label>Pint</label>
                <input className='form-control' type='text' id='pint' placeholder='pint' /><br/>
                <button className='btn btn-warning'>Add Beer</button>
            </form>
        </div>

    );
}

export default AddBeerForm;