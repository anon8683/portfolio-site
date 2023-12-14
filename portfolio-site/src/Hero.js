import deviceImage from "./images/device1.png";

function Hero() {
	return (
		<div
			id="he"
			className="hero min-h-screen"
			style={{
				backgroundImage: `url(${deviceImage})`,
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-neutral-content text left">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Small Business</h1>
					<h1 className="mb-5 text-5xl font-bold">Web Design</h1>
					<h1 className="mb-5 text-5xl font-bold">Fully Managed</h1>
					<h1 className="mb-5 text-5xl font-bold">24/7 Support</h1>
					<p className="mb-5">
						Beautifuly crafted websites, hand dseigned to your specific needs.
						No clunk, no junk. SEO friendly and high performance. From as low as
						£90 a month.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
}

function Heroo() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
					className="max-w-sm rounded-lg shadow-2xl"
					alt="lol"
				/>
				<div>
					<h1 className="text-5xl font-bold">Box Office News!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
}

export { Hero, Heroo };
