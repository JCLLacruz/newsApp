import React, { useEffect, useState } from 'react';
import './Newnew.scss';

const Newnew = () => {
	const initialValue = {
		title: '',
		article: '',
	};

	const [dataForm, setDataForm] = useState(initialValue);

	const handleInputChange = (e) => {
		setDataForm({
			...dataForm,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (localStorage.newNews == undefined) {
			const firstNew = [dataForm];
			localStorage.setItem('newNews', JSON.stringify(firstNew));
		} else {
			let news = JSON.parse(localStorage.getItem('newNews'));
			news.push(dataForm);
			localStorage.removeItem('newNews');
			localStorage.setItem('newNews', JSON.stringify(news));
		}
		setDataForm(initialValue);
	};

	return (
		<div id='formContainer'>
			<form onSubmit={handleOnSubmit}>
				<div className='mt-3 form-group'>
					<label htmlFor='newTitle' className='ms-3 form-label'>
						Title New
					</label>
					<input type='text' className='form-control' id='newTitle' name='title' placeholder='New Title' onChange={handleInputChange} />
				</div>
				<div className=' mt-1 form-group'>
					<label htmlFor='article' className='ms-3 form-label'>
						Article
					</label>
					<textarea className='form-control' name='article' id='article' rows='3' onChange={handleInputChange}></textarea>
				</div>
				<input type='submit' value={'Submit'} className='btn btn-primary m-3' />
			</form>
		</div>
		);
};

export default Newnew;
