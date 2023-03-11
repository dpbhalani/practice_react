import React from 'react';

const AddUser = (props) => {

    const addSubmitHandler = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={addSubmitHandler}>
            <label htmlFor='username'>Username:-</label>
            <input id='username' type='text'></input>
            <label htmlFor='age'>Age (Years):-</label>
            <input id='age' type='number'></input>
            <button type='submit'>Add Detail</button>
        </form>
    );
}

export default AddUser;