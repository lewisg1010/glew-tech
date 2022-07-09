import React from "react"
import Phone from '../pages/phone'

function HeroSection() {
	return (
		<div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
			<h1 className="text-gray-900 pb-10">
                Ideas about <span className="text-blue-500">Product</span>, <span className="text-blue-500">Web Dev</span>, and <span className="text-blue-500">Design</span>
			</h1>
			<div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
				<h1 className="text-center">Subscribe</h1>
			</div>
        <Phone />
		</div>
	);
}

export default HeroSection;