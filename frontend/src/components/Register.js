import React from "react";

const Register = () => {
	return (
		<div class='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
			<div class='relative py-3 lg:min-w-full sm:mx-auto sm:min-w-min'>
				<div class='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
					<div class='max-w-md mx-auto'>
						<div>
							<h1 class='text-2xl font-semibold'>Register a user</h1>
						</div>
						<div class='divide-y divide-gray-200'>
							<div class='py-8 text-base leading-6  space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
								<div class='relative'>
									<input
										autocomplete='off'
										id='name'
										name='name'
										type='text'
										class='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
										placeholder='Email address'
									/>
									<label
										for='email'
										class='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										Full Name
									</label>
								</div>
								<div class='relative'>
									<input
										autocomplete='off'
										id='email'
										name='email'
										type='text'
										class='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
										placeholder='Email address'
									/>
									<label
										for='email'
										class='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										Email Address
									</label>
								</div>
								<div class='relative'>
									<input
										autocomplete='off'
										id='password'
										name='password'
										type='password'
										class='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
										placeholder='Password'
									/>
									<label
										for='password'
										class='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										Password
									</label>
								</div>
								<div class='relative'>
									<button class='bg-black text-white rounded-md px-8 py-1 '>
										Register
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
