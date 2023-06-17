import React, { useState } from 'react';

import { CiMenuBurger } from 'react-icons/ci';

import './Header.scss';


const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		
		<header className='header'>
			<nav className='nav'>
				<ul className='menu'>
					<li className='menu-link'>About Me</li>
					<li className='menu-link'>Skills</li>
					<li className='menu-link'>Project</li>
					<li className='menu-link'>Contact</li>
				</ul>

				<div className='menu-burger-box'>
					<CiMenuBurger
						style={{ color: !isOpen ? '#000' : '#fff' }}
						className='menu-burger-icon'
						onClick={() => setIsOpen(!isOpen)}
					/>

					{isOpen && (
						<ul className='menu-burger'>
							<li className='menu-burger-link'>About Me</li>
							<li className='menu-burger-link'>Skills</li>
							<li className='menu-burger-link'>Project</li>
							<li className='menu-burger-link'>Contact</li>
						</ul>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
