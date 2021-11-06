import React, { useState } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Headers = () => {
	const [user, setUser] = useState(false);
	return (
		<header>
			<Navbar
				variant='dark'
				expand='lg'
				collapseOnSelect
				className='capitalize bg-black'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>pro-ideas</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className=' ml-auto '>
							<LinkContainer to='/' className='mx-8 '>
								<Nav.Link>
									<i className='fas fa-home '></i>
									{"  "}
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/about' className='mx-8 '>
								<Nav.Link>about</Nav.Link>
							</LinkContainer>

							<LinkContainer to='/users/register' className='mx-8 '>
								<Nav.Link>register</Nav.Link>
							</LinkContainer>
							{user ? (
								<NavDropdown title={user} id='username' className='mx-8'>
									<LinkContainer to='/ideas'>
										<NavDropdown.Item>Ideas</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/ideas/add'>
										<NavDropdown.Item>add idea</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item>Logout</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/users/login'>
									<Nav.Link>
										{" "}
										<i className='fas fa-user mx-8'></i>
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Headers;
