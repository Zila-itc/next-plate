import Link from 'next/link';

export default function Header() {
	return (
		<>
			{/* Container for demo purpose */}
			<div className="container px-6 mx-auto my-24">
				{/* Section: Design Block */}
				<section className="mb-12">
					<nav className="relative flex items-center justify-between w-full py-2 bg-white shadow-lg navbar">
						<Link href={'/user-detail'}>Go to detail</Link>
					</nav>
					<nav className="relative flex items-center justify-between w-full py-2 bg-white shadow-lg navbar navbar-expand-lg">
						<div className="px-6">
							<button
								className="py-3 text-xl leading-none text-gray-600 transition-shadow duration-300 ease-in-out bg-transparent border-0 navbar-toggler lg:hidden hover:text-gray-700 focus:text-gray-700"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContentX"
								aria-controls="navbarSupportedContentX"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									className="w-5"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
									></path>
								</svg>
							</button>
							<div
								className="items-center navbar-collapse collapse grow"
								id="navbarSupportedContentX"
							>
								<ul className="flex flex-row mr-auto navbar-nav">
									<li className="static nav-item dropdown">
										<a
											className="flex items-center py-2 pr-2 text-gray-600 transition duration-300 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700 dropdown-toggle whitespace-nowrap"
											href=""
											data-mdb-ripple="true"
											data-mdb-ripple-color="light"
											type="button"
											id="dropdownMenuButtonX"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Click me
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="caret-down"
												className="w-2 ml-2"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 320 512"
											>
												<path
													fill="currentColor"
													d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
												></path>
											</svg>
										</a>
										<ul
											className="absolute z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding"
											aria-labelledby="dropdownMenuButton1"
										>
											<li>
												<h6 className="block w-full px-4 py-2 text-sm font-semibold text-gray-500 bg-transparent whitespace-nowrap">
													Bootstrap 5
												</h6>
											</li>
											<li>
												<a
													className="flex items-center w-full px-4 py-2 text-sm font-normal text-gray-700 transition duration-300 ease-in-out bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
													href="#"
												>
													<img
														src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.webp"
														alt=""
														className="h-5 mr-2"
													/>
													<span>Standard (plain JS)</span>
												</a>
											</li>
											<li>
												<a
													className="flex items-center block w-full px-4 py-2 text-sm font-normal text-gray-700 transition duration-300 ease-in-out bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
													href="#"
												>
													<img
														src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/angular.webp"
														alt=""
														className="h-5 mr-2"
													/>
													<span>Angular</span>
												</a>
											</li>
											<li>
												<a
													className="flex items-center block w-full px-4 py-2 text-sm font-normal text-gray-700 transition duration-300 ease-in-out bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
													href="#"
												>
													<img
														src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/react.webp"
														alt=""
														className="h-5 mr-2"
													/>
													<span>React</span>
												</a>
											</li>
											<li>
												<a
													className="flex items-center block w-full px-4 py-2 text-sm font-normal text-gray-700 transition duration-300 ease-in-out bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
													href="#"
												>
													<img
														src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/vue.webp"
														alt=""
														className="h-5 mr-2"
													/>
													<span>Vue</span>
												</a>
											</li>
											<li>
												<hr className="dropdown-divider" />
											</li>
											<li>
												<h6 className="block w-full px-4 py-2 text-sm font-semibold text-gray-500 bg-transparent whitespace-nowrap">
													Bootstrap 4
												</h6>
											</li>
											<li>
												<a
													className="flex items-center block w-full px-4 py-2 text-sm font-normal text-gray-700 transition duration-300 ease-in-out bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
													href="#"
												>
													<img
														src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/jquery.webp"
														alt=""
														className="h-5 mr-2"
													/>
													<span>Standard (jQuery)</span>
												</a>
											</li>
											<li>
												<a
													className="flex items-center block w-full px-4 py-2 text-sm font-normal text-gray-700 transition duration-300 ease-in-out bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
													href="#"
												>
													<img
														src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/angular.webp"
														alt=""
														className="h-5 mr-2"
													/>
													<span>Angular</span>
												</a>
											</li>
											<li>
												<a
													className="flex items-center block w-full px-4 py-2 text-sm font-normal text-gray-700 transition duration-300 ease-in-out bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
													href="#"
												>
													<img
														src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/react.webp"
														alt=""
														className="h-5 mr-2"
													/>
													<span>React</span>
												</a>
											</li>
											<li>
												<a
													className="flex items-center block w-full px-4 py-2 text-sm font-normal text-gray-700 transition duration-300 ease-in-out bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
													href="#"
												>
													<img
														src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/vue.webp"
														alt=""
														className="h-5 mr-2"
													/>
													<span>Vue</span>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</section>
				{/* Section: Design Block */}
			</div>
		</>
	);
}
