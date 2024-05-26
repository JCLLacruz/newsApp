import React, { useEffect, useState } from 'react';
import './Newnew.scss';
import { useNavigate } from 'react-router-dom';

const Newnew = () => {
	const initialValue = {
		title: '',
		article: '',
	};
	const navigate = useNavigate();
	const [dataForm, setDataForm] = useState(initialValue);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const handleInputChange = (e) => {
		setDataForm({
			...dataForm,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		switch (true) {
			case dataForm.title == '':
				setMessage('Please insert a title');
				setBtnDisabled(true);
				break;
			case dataForm.title.length <= 50:
				setMessage('Please title must longer');
				setBtnDisabled(true);
				break;
			case dataForm.article == '':
				setMessage('Please write or copy the article');
				setBtnDisabled(true);
				break;
			case dataForm.article.length <= 250:
				setMessage('Please article must longer');
				setBtnDisabled(true);
				break;
			default:
				setMessage('');
				setBtnDisabled(false);
				break;
		}
	};

	useEffect(() => {
		validateForm();
	}, [dataForm]);

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
		setTimeout(() => {
			navigate('/ListNews');
		}, '3000');
	};

	return (
		<div id='formContainer'>
			<h1>Create a New Article</h1>
			<form onSubmit={handleOnSubmit}>
				<div className='mt-3 form-group'>
					<input type='text' className='form-control' id='newTitle' name='title' placeholder='New Title' onChange={handleInputChange} />
				</div>
				<div className=' mt-1 form-group'>
					<textarea className='form-control' name='article' id='article' rows='3' placeholder='Article' onChange={handleInputChange}></textarea>
				</div>
				<input type='submit' value={'Submit'} className='btn btn-primary m-3' onChange={handleInputChange} disabled={btnDisabled} />
				<h6 id='validationMessage' className='ms-3'>
					{message}
				</h6>
			</form>
		</div>
	);
};

export default Newnew;
