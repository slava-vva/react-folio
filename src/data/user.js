const INFO = {
	main: {
		title: "Portfolio of Slav",
		name: "Viacheslav",
		email: "east.slava@gmail.com",
		logo: `${process.env.PUBLIC_URL}/logo-hi-img.jpg`,
	},

	socials: {
		twitter: "https://x.com/ViacheslavTwit/",
		github: "https://github.com/slava-vva/",
		linkedin: "https://www.linkedin.com/in/viacheslav-vorozhbit-5b60b931b/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://www.facebook.com/share/1AW9N2DhzQ/",
	},

	certs: {
		cert_ms: "",
	},

	homepage: {
		title: "Full-stack web application developer and database engineer",
		description:
			"Hi, my name is Slav. I am an experienced IT specialist with a strong background in designing and developing applications using .NET Framework, React, and Django. I have solid expertise in building client–server solutions with SQL Server and PostgreSQL. In addition, I have hands-on experience with Helpdesk systems and data analytics.",
	},

	about: {
		title: "Programmer with extensive experience",
		description:
			"I am currently enrolled in the Postgraduate Diploma in Information Technology (PGDIT) at the Auckland Institute of Studies. I have successfully completed my second trimester, and my studies will continue until December 2025. After completing my studies, I will have a Post Study Work Visa.",
		description_2:
			"I have extensive experience in the IT field. For the past 11 years, I worked in a large company where I developed and administered a Helpdesk system based on Hewlett Packard technology, following ITIL best practices. My responsibilities included performance tuning and ensuring the stability of a system that operated 24/7. I was also responsible for the administration and management of a three-tier environment (development, testing, and production), each comprising up to 30 servers, including clusters and load balancers. In addition, I participated in the development of web applications, system integrations, and worked with a wide range of databases, including MS SQL Server, Informix, PostgreSQL, and others.",
		description_3:
			"I am now looking for a position in my professional field — software development. I am ready to contribute to projects of any complexity and eager to apply my skills and experience in a new environment",
		description_4:
			"I have a student visa with permission to work part-time and full-time during vacation.",
	},

	articles: {
		title: "Science & Technology Insights",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "ASP Core MVC. Golf Course App",
			description:
				"This is a simple website created for the development of functionality using the C# ASP Net Core technology. This project has CMS, the bootstrap, Ajax framework is used. The database is deployed on the MS SQL Server.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/csharp/csharp.svg",
			linkText: "ASP MVC Core Project",
			link: "https://github.com/slava-vva/WebApp-UI-1",
			image: `${process.env.PUBLIC_URL}/img/golf-course.png`
		},

		// {
		// 	title: "Data analysis",
		// 	description:
		// 		"Project to understand how to apply best practices and functions for data analysis with Python",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.svg",
		// 	linkText: "View Project",
		// 	link: "https://github.com/slava-vva",
		// },

		{
			title: "Microfocus Service Manager",
			description:
				"Implementation of ITIL best practices in a large enterprise using Microfocus SM with incident/change/problem management, using Java and MS SQL Server",
			logo: "https://images.saasworthy.com/tr:w-160,h-0,c-at_max,e-sharpen-1/microfocusservicemanager_31599_logo_1627970390_4e7cu.jpg",
			linkText: "Java, T-SQL",
			link: "https://www.saasworthy.com/product/micro-focus-service-manager",
			image: "https://images.saasworthy.com/tr:w-264,h-0,c-at_max,e-sharpen-1/microfocusservicemanager_31599_screenshot_1623926742_l1emh.png",
			//link: "https://docs.microfocus.com/SM/9.60/Hybrid/Content/buisness_modules.htm",
		},

		{
			title: "Cisco Finesse",
			description:
				"Creating a gadget on MVC for a dispatcher contact card, integrated with Microfocus SM, Cisco and Active Directory",
			logo: "https://logowik.com/content/uploads/images/cisco-systems9760.jpg",
			linkText: "ASP MVC Core Project",
			link: "https://www.cisco.com/c/en/us/products/contact-center/finesse/index.html",
			image: `${process.env.PUBLIC_URL}/img/cisco-finesse-300.png`
		},

		{
			title: "Blazor App AutoMarket",
			description:
				"Simple interactive application on Blazor",
			logo: "https://logowik.com/content/uploads/images/blazor4352.logowik.com.webp",
			linkText: "C# Blazor",
			link: "https://github.com/slava-vva/BlazorApp1_AutoMarket",
			image: `${process.env.PUBLIC_URL}/img/gh-default.png`
		},


		
		// {
		// 	title: "Project JS, jQuery, Ajax",
		// 	description:
		// 		"Practicing with front-end technologies",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.svg",
		// 	linkText: "View Project",
		// 	link: "https://github.com/slava-vva",
		// },
		// {
		// 	title: "Project R",
		// 	description:
		// 		"Practicing with programming language R for statistical computing and data visualization",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/r/r.svg",
		// 	linkText: "View Project",
		// 	link: "https://github.com/slava-vva",
		// },
		{
			title: "EasyFolio",
			description:
				"An interesting ergonomic website made on static HTML pages. " +
				"It implements modern elements and applies the best practices of UI/UX design. ",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.svg",
			linkText: "HTML Project",
			link: "https://slava-vva.github.io/pfolio/",
			image: `${process.env.PUBLIC_URL}/img/easy-folio.jpg`
		},

		{
			title: "WIX Website Builder",
			description:
				"Test site using site building technology WIX",
			logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a2/ed/a3/a2eda35b-2930-8d6d-6522-72b3f6e508d8/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/434x0w.webp",
			linkText: "View Project",
			link: "https://eastslava.wixsite.com/mysite",
			image: `${process.env.PUBLIC_URL}/img/wix-site.png`
		},
		{
			title: "WordPress Website Technology",
			description:
				"Using Popular Technology to Publish a Wordpress Site",
			logo: "https://www.svgrepo.com/show/349568/wordpress.svg",
			linkText: "View Project",
			link: "https://deveslav.wordpress.com/",
			image: `${process.env.PUBLIC_URL}/img/taylor-site.png`
		},
		// {
		// 	title: "WIX Website Builder",
		// 	description:
		// 		"Test site using site building technology WIX",
		// 	logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a2/ed/a3/a2eda35b-2930-8d6d-6522-72b3f6e508d8/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/434x0w.webp",
		// 	linkText: "View Project",
		// 	link: "https://eastslava.wixsite.com/mysite",
		// },
	],
};

export default INFO;
