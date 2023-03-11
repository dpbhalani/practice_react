import React from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {

    const addSubmitHandler = (event) => {
        event.preventDefault();
    }

    return(
        <Card className={classes.input}>
        <form onSubmit={addSubmitHandler}>
            <label htmlFor='username'>Username:-</label>
            <input id='username' type='text' />
            <label htmlFor='age'>Age (Years):-</label>
            <input id='age' type='number' />
            <Button type='submit'>Add Detail</Button>
        </form>
        </Card>
    );
}

export default AddUser;