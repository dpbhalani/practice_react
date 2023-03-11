import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {
   const [enteredUsername , setEnteredUsername] = useState('');
   const [enteredAge , setEnteredAge] = useState('');

    const addSubmitHandler = (event) => {
        event.preventDefault();
        console.log(enteredAge , enteredUsername)
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
       };
    
       const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
       };

    return(
        <Card className={classes.input}>
        <form onSubmit={addSubmitHandler}>
            <label htmlFor='username'>Username:-</label>
            <input id='username' type='text' onChange={usernameChangeHandler} />
            <label htmlFor='age'>Age (Years):-</label>
            <input id='age' type='number' onChange={ageChangeHandler} />
            <Button type='submit'>Add Detail</Button>
        </form>
        </Card>
    );
}

export default AddUser;