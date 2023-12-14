import phoneIcon from "./images/smartphone.png";

function Intro() {
	return (
		<div className="flex flex-col gap-10 p-5 items-center">
			<div className="">
				<p id="intro" className="p-8">
					We specialize in small business web design and development for clients
					anywhere in the US. Every line of code is written by hand to ensure
					the best performance, which helps bring in more customers to your site
					and bring more revenue to your business. LEARN MORE
				</p>
			</div>
			<div id="introItems" className="flex justify-between gap-10">
				<div className="item gap-5">
					<img className="itemIcon" src={`${phoneIcon}`} alt="icon"></img>
					<h5 className="title">Mobile Friendly</h5>
					<p className="itemDesc">
						24/7 Support. Every line of code is written by hand to ensure the
						best performance, which helps bring in more customers to your site
						and bring more revenue to your business. LEARN MORE
					</p>
				</div>
				<div className="item gap-5">
					<img className="itemIcon" src={`${phoneIcon}`} alt="icon"></img>
					<h5 className="title">Mobile Friendly</h5>
					<p className="itemDesc">
						24/7 Support. Every line of code is written by hand to ensure the
						best performance, which helps bring in more customers to your site
						and bring more revenue to your business. LEARN MORE
					</p>
				</div>
				<div className="item gap-5">
					<img className="itemIcon" src={`${phoneIcon}`} alt="icon"></img>
					<h5 className="title">Mobile Friendly</h5>
					<p className="itemDesc">
						24/7 Support. Every line of code is written by hand to ensure the
						best performance, which helps bring in more customers to your site
						and bring more revenue to your business. LEARN MORE
					</p>
				</div>
			</div>
		</div>
	);
}

export { Intro };
