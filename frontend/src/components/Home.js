import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div className=' text-center py-32'>
			<h1 className='text-6xl font-light '>Welcome</h1>
			<p className='text-xl py-6'>
				Write down proposed project you desire to build
			</p>
			<button className=' bg-black  py-2 px-4 rounded  hover:bg-gray-300'>
				<Link to='/ideas/add' className='text-white no-underline text-lg'>
					Add Video Idea
				</Link>
			</button>
		</div>
	);
};

export default Home;
