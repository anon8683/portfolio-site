function Navbar() {
	return (
		<div className="drawer h-full">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				{/* Navbar */}
				<div
					className="w-full navbar bg-base-300 justify-between h-full"
					id="navbar"
				>
					<div className="flex-none lg:hidden">
						<label
							htmlFor="my-drawer-3"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-6 h-6 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
					{/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}

					<img src="./images/logo.png" alt="logo" id="logo" />

					<div className="flex-none hidden lg:block">
						<ul className="menu menu-horizontal gap-2">
							{/* Navbar menu content here */}
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>About</a>
							</li>
							<li>
								<a>Services</a>
							</li>
							<li>
								<a>Portfolio</a>
							</li>
							<li>
								<a>Blog</a>
							</li>
							<li>
								<a>Contact</a>
							</li>
							<Toggle></Toggle>
						</ul>
					</div>
				</div>
				{/* Page content here */}
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-3"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu p-4 w-80 min-h-full bg-base-200">
					{/* Sidebar content here */}
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Services</a>
					</li>
					<li>
						<a>Portfolio</a>
					</li>
					<li>
						<a>Blog</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

function Toggle() {
	return (
		<div className="form-control justify-center">
			<input
				type="checkbox"
				className="toggle toggle-sm"
				defaultChecked
				onClick={changeTheme}
			/>
		</div>
	);
}

function changeTheme() {
	const theme = document.getElementsByTagName("html")[0];
	const currentTheme = theme.getAttribute("data-theme");
	if (currentTheme === "emerald") {
		theme.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
		return;
	}
	theme.setAttribute("data-theme", "emerald");
	localStorage.setItem("theme", "emerald");
}

function Header() {
	return (
		<header>
			<Navbar></Navbar>
		</header>
	);
}

export { Header };
