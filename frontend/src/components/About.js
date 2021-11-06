import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
	return (
		<Container>
			<div className='py-8'>
				<h2 className='text-lower'>About</h2>
				<p>
					This is a PERN app for jotting down project ideas for future
					development
				</p>
				<p>Version 1.0.0</p>
			</div>
		</Container>
	);
};

export default About;
