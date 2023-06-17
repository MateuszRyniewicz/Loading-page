import React from 'react';

import './Main.scss';

const Main = () => {
	return (
		<main className='main margin-top-50'>
			<section className='main-box-left'>
				<div className='main-box-left-text'>
					<div className='main-box-left-text-details'>
						<h2 className='main-box-left-text-main'>Hi</h2>
						<div className='main-box-left-image'>
							<img
								src='https://creazilla-store.fra1.digitaloceanspaces.com/emojis/56066/waving-hand-emoji-clipart-md.png'
								alt='waving hand'
							/>
						</div>
						<p>,</p>
					</div>
					<div className='main-box-left-text-details'>
						<h2 className='main-box-left-text-main'>I'm Charles,</h2>
					</div>
					<div className='main-box-left-text-details margin-button-25'>
						<h2 className='main-box-left-text-main'>Front-end Developer</h2>
					</div>
					<div className='main-box-left-text-details-color margin-button-100'>
						<p className='main-box-left-text-details-color-text'>
							I design and develop experiences that make people's life
						</p>
						<p className='main-box-left-text-details-color-text'>
							simpler through Web and mobile apps. I work with Figma,
						</p>
						<p className='main-box-left-text-details-color-text'>
							HTML5, CSS5, JavaScript, React, ReactNative and Flutter.
						</p>
					</div>
					<div className='main-box-left-box-buttons'>
						<button className='main-box-left-button'>HIRE ME</button>
						<button className='main-box-left-button main-box-left-button-color'>
							SEE MY PROJECTS
						</button>
					</div>
				</div>
			</section>
			<section className='main-box-right'>
				<div className='main-box-right-details-box-color-behind' />
				<div className='main-box-right-details-image'>
					<img
					className='main-right-details-img'
						src='https://muzykaitechnologia.pl/wp-content/uploads/2022/08/podcast01.jpg'
						alt='person who speaks'
					/>
				</div>
			</section>
		</main>
	);
};

export default Main;
