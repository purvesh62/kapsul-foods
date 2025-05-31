'use client';
import Link from "next/link";
import Image from "next/image";
import {appConfig as config} from "@/data"
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {useState, useEffect, useCallback, useRef} from "react";
import {ChevronLeft, ChevronRight, Shield, Leaf, Star} from "lucide-react";

const ProductImageCarousel = ({images, productName}: { images: string[], productName: string }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isMouseOver, setIsMouseOver] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	
	const nextImage = useCallback(() => {
		setCurrentImageIndex((prev) => (prev + 1) % images.length);
	}, [images.length]);
	
	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
	};
	
	useEffect(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		
		if (!isMouseOver && images.length > 1) {
			intervalRef.current = setInterval(() => {
				nextImage();
			}, 3000);
		}
		
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [images, isMouseOver, nextImage]);
	
	if (images.length <= 1) {
		return (
			<div className="text-center mb-6 h-48 w-full">
				<Image
					width={0}
					height={0}
					unoptimized={true}
					src={images[0]}
					alt={productName}
					className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
				/>
			</div>
		);
	}
	
	return (
		<div
			className="relative text-center mb-6 cursor-grab h-96 w-full"
			onMouseEnter={() => setIsMouseOver(true)}
			onMouseLeave={() => setIsMouseOver(false)}
		>
			<Image
				width={0}
				height={0}
				unoptimized={true}
				src={images[currentImageIndex]}
				alt={`${productName} - Image ${currentImageIndex + 1}`}
				className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
			/>
			
			{images.length > 1 && (
				<>
					<button
						onClick={prevImage}
						className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1 rounded-full hover:bg-white/90 transition-colors shadow-md"
						aria-label="Previous image"
					>
						<ChevronLeft className="h-4 w-4 text-gray-700"/>
					</button>
					<button
						onClick={nextImage}
						className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1 rounded-full hover:bg-white/90 transition-colors shadow-md"
						aria-label="Next image"
					>
						<ChevronRight className="h-4 w-4 text-gray-700"/>
					</button>
					
					<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentImageIndex(index)}
								className={`w-2 h-2 rounded-full transition-colors ${
									index === currentImageIndex ? "bg-gray-700" : "bg-gray-300"
								}`}
								aria-label={`Go to image ${index + 1}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

const HomePage = () => {
	// const [config, _] = useState(appConfig);
	const getIconComponent = (iconName: string) => {
		switch (iconName) {
			case 'Leaf':
				return Leaf;
			case 'Shield':
				return Shield;
			case 'Star':
				return Star;
			default:
				return Star;
		}
	};
	
	
	if (!config) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
				<div className="text-center">
					<p className="text-red-600">Failed to load configuration</p>
				</div>
			</div>
		);
	}
	
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
			<header className="bg-white border-b border-slate-200 sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<Link href="#" className="flex items-center space-x-3">
							<Image
								width={32}
								height={32}
								src="logo/logo.png"
								alt="Kapsul Logo"
								className="h-12 w-auto"
								unoptimized={true}
							/>
							<h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
							</h1>
						</Link>
						<div>
							<Image
								width={0}
								height={0}
								src="logo/bhatt-daughters.png"
								alt="Bhatt Daughters Logo"
								className="h-12 w-auto"
								unoptimized={true}
							/>
						</div>
					</div>
				</div>
			</header>
			
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
							{config.siteConfig.sectionTitles.productsSection}
						</h2>
						<div
							className="py-2 text-xl text-slate-600 max-w-2xl mx-auto flex gap-2 items-center justify-center">
							<Link
								href={config.siteConfig.sectionTitles.amazonLink}
								target="_blank"
								className="inline-flex items-center gap-2 hover:underline"
							>
								<Image
									width={0}
									height={0}
									src="logo/amazon-logo.svg"
									alt="Kapsul Logo"
									className="h-6 w-auto"
									unoptimized={true}
								/>
							</Link>
							<p>{config.siteConfig.sectionTitles.productsSubtitle}</p>
						</div>
						<div className={'mx-auto inline-flex gap-2 items-center justify-center'}>
							<p className="text-xl text-slate-600">
								{config.siteConfig.sectionTitles.productsDescription}
							</p>
							<Link
								href={config.siteConfig.sectionTitles.whatappLink}
								target="_blank"
							>
								<Image
									width={0}
									height={0}
									src="logo/whatsapp-logo.svg"
									alt="Kapsul Logo"
									className="h-8 w-auto"
									unoptimized={true}
								/>
							</Link>
						</div>
					</div>
					
					<div className="grid md:grid-cols-2 gap-8">
						{config.products.map((product) => (
							<Card key={product.id}
							      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
								<CardContent className="p-8">
									<ProductImageCarousel images={product.images} productName={product.name}/>
									
									<h3 className="text-2xl font-bold text-slate-800 mb-2">
										{product.name}
									</h3>
									<p className={`text-lg font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-4`}>
										{product.tagline}
									</p>
									<p className="text-slate-600 mb-6 leading-relaxed">
										{product.description}
									</p>
									
									<div className="space-y-3 mb-8">
										{product.features.map((feature: string, index: number) => (
											<div key={index} className="flex items-center text-sm text-slate-700">
												<Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0"/>
												{feature}
											</div>
										))}
									</div>
									
									<Button
										className={`w-full bg-gradient-to-r ${product.color} hover:shadow-lg transition-all duration-300 text-white font-semibold py-3`}
										size="lg"
										onClick={() => window.open(product.amazonUrl, '_blank')}
									>
										Buy on Amazon
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
			
			<section className="py-16 bg-white/60">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-8 text-center">
						{config.trustSection.map((item, index: number) => {
							const IconComponent = getIconComponent(item.icon);
							return (
								<div key={index} className="space-y-4">
									<div
										className={`${item.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
										<IconComponent className={`h-8 w-8 ${item.iconColor}`}/>
									</div>
									<h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
									<p className="text-slate-600">{item.description}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			
			<footer className="bg-slate-800 text-white py-12">
				<div className="container mx-auto px-4 text-center">
					<p className="text-sm text-slate-500">
						© {new Date().getFullYear()} {config.siteConfig.copyright}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default HomePage;