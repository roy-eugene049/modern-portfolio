export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];
export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },  
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for Frontend Development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Currently building a Tech Startup",
        description: "EccoSync",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];
export const projects = [
    {
        id: 1,
        title: "YuvoAi - Web3 Startup Website",
        des: "Explore the intricacies of Ai coupled with Web3 harnessing magic in the Blockchain realm",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://yuvoai.vercel.app/",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/roy-eugene049",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/roy-eugene049",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://titanium-ebon.vercel.app/",
    },
];
export const testimonials = [
    {
        quote: "Collaborating with Roy was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Dexta Ogada",
        title: "Director of Dexx Media Labs",
    },
    {
        quote: "Roy's expertise and creativity were exactly what we needed. He brought innovative ideas to the table and executed them flawlessly. Adrian's ability to understand our vision and turn it into a reality exceeded our expectations.",
        name: "Jeff Ubayi",
        title: "Software Developer",
    },
    {
        quote: "Working with Roy was a game-changer for our business. His technical skills are top-notch, and his commitment to delivering high-quality work is unmatched. Adrian's passion for his craft is evident in every aspect of his work.",
        name: "Esther Mwongeli",
        title: "Frontend Developer",
    },
    {
        quote: "Roy demonstrated exceptional technical knowledge and project management skills. His attention to detail and ability to meet tight deadlines were crucial to the success of our project. Adrian's dedication and work ethic are truly commendable.",
        name: "Shadrack Kirui",
        title: "Head of Digital at YuvoAi",
    },
    {
        quote: "Roy's work ethic and problem-solving abilities made our collaboration seamless. He tackled complex challenges with ease and delivered results that far exceeded our expectations. Adrian's approach to development is both innovative and practical.",
        name: "Francis Mwakidoshi",
        title: "Software Engineer at Safaricom",
    },
];

export const companies = [
    {
        id: 1,
        name: "SWAHILIBOX",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "TWIICE TECH",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "CP CIM-POOL AG",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "PLANET CENTS",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "DEXX MEDIA LABS",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];
export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Software Engineer",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Software Developer",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];
export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/roy-eugene049"
    },
    {
        id: 2,
        img: "/twit.svg",
        link: "https://x.com/eugenes000"
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/roy-eugene-2a1a361b4/"
    },
];
