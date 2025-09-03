const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-foreground text-background py-12">
			<div className="container-custom">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-background/60">
						© {currentYear}, Matt Nash. All rights reserved.
					</p>
					<div className="flex gap-6 text-background/60">
						<span>&#127757; Built by Earthlings</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;