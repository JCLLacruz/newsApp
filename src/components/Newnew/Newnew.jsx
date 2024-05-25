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
			localStorage.setItem('newNews', JSON.stringify(dataForm));
		} else {
			const firstNew = JSON.parse(localStorage.getItem('newNews')) || [];
			let news = [];
			news.push(firstNew);
			news.push(dataForm);
			console.log('newnews', news);
			localStorage.removeItem('newNews');
			localStorage.setItem('newNews', JSON.stringify(news));
		}
		setDataForm(initialValue);
	};

	return (
		<div id='formContainer' className='container'>
			<form onSubmit={handleOnSubmit}>
				<div className='mb-3'>
					<label htmlFor='newTitle' className='form-label'>
						Title New
					</label>
					<input type='text' className='form-control' id='newTitle' name='title' placeholder='New Title' onChange={handleInputChange} />
				</div>
				<div className='mb-3'>
					<label htmlFor='article' className='form-label'>
						Article
					</label>
					<textarea className='form-control' name='article' id='article' rows='3' onChange={handleInputChange}></textarea>
				</div>
				<input type='submit' value={'Submit'} className='btn btn-primary' />
			</form>
		</div>
		);
};

export default Newnew;
