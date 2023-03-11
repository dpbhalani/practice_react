import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
   const [enteredUsername , setEnteredUsername] = useState('');
   const [enteredAge , setEnteredAge] = useState('');
   const [error , setError] = useState();

    const addSubmitHandler = (event) => {
        event.preventDefault();
        if(enteredAge.trim().value === 0 || enteredUsername.trim().value === 0){
            setError({
                title:"Invalid Input",
                message:"Please enter a valid Username and Age"
            });
            return;
        }

        if(+enteredAge < 1){
            setError({
                title:"Invalid Age",
                message:"Please enter a valid Age (Age > 0)"
            });
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

       const errorHandler = () => {
        setError(null);
       }
    return(
        <>
        {error && 
        (<ErrorModal 
        title={error.title} 
        message={error.message}
        onOkey={errorHandler}
        />
        )}
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