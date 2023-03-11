import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
   const [enteredUsername , setEnteredUsername] = useState('');
   const [enteredAge , setEnteredAge] = useState('');

    const addSubmitHandler = (event) => {
        event.preventDefault();
        if(enteredAge.trim().value === 0 || enteredUsername.trim().value === 0){
            return;
        }

        if(+enteredAge < 1){
            return;
        }
        
        //console.log(enteredAge , enteredUsername)
        props.onAddUser(enteredUsername , enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
       };
    
       const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
       };

    return(
        <>
        <ErrorModal title="An error occured" message="Something went wrong"/>
        <Card className={classes.input}>
        <form onSubmit={addSubmitHandler}>
            <label htmlFor='username'>Username:-</label>
            <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
            <label htmlFor='age'>Age (Years):-</label>
            <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
            <Button type='submit'>Add Detail</Button>
        </form>
        </Card>
        </>
    );
}

export default AddUser;