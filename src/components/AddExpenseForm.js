import { useContext } from "react";
import React from 'react';
import { AppContext } from "./Context/AppContext";

const AddExpenseForm = () => {

    const {dispatch} = useContext(AppContext);

    function handleSubmit(event){
        event.preventDefault();      
        let name = event.target[0].value;
        let cost = event.target[1].value;
        dispatch({type:'ADD_ITEM',payload: {name,cost}});
    }
	return (
		<form onSubmit={handleSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label className='mb-3' for='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
					></input>
				</div>
				<div className='col-sm'>
					<label className='mb-3' for='cost'>Cost</label>
				        <input
						required='required'
						type='text'
						className='form-control'
						id='cost'
					></input>
		</div>

	    </div>
            <div className='row'>
            	<div className='col-sm'>
			<button type='submit' className='btn btn-primary mt-3'>Save</button>
		</div>
            </div>
	</form>
	);
};

export default AddExpenseForm;


