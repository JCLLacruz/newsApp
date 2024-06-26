import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container-fluid'>
					<Link to='/' className="navbar-brand">
						New news and not to old
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link to='/' className='nav-link active' aria-current='page' href='#'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/ListNews' className='nav-link' href='#'>
									News
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/newnew' className='nav-link' href='#'>
									New Article
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
