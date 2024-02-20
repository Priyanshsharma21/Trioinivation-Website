import { dm, dt, projectMgmt, ru } from "../assets/index.js"

export const navLinks = [
    {
        title : "Home",
        path : "/",
    },

    {
        title : "About us",
        path : "/about",
    },

    {
        title : "Career",
        path : "/career",
    },

    {
        title : "Blogs",
        path : "/blog",
    },

]


export const services = {
    "digital-transformation" : ["Frontend Development", "Backend Development", "Mobile App Development", "Support Services", "Cloud", "Testing", "Graphic Design"],

    "digital-marketing" : ["SEO", "Social Media Management", "Google Ads", "Content Creation", "Testing"],

    "recruitment-upsurge" : ["Senior Middle Hiring", "Global Sourcing", "Diversity Hiring"]
}

export const quickLinks = [
    {
        title : "Home",
        path : "/",
    },

    {
        title : "Blog",
        path : "/blog",
    },

    {
        title : "About us",
        path : "/about",
    },


    {
        title : "Contact us",
        path : "/contact",
    },

    {
        title : "Career",
        path : "/career",
    },

]


export const homeServiceCards = [
    {
        title : "Digital Transformation",
        description : "Transform your business with our comprehensive digital transformation services. From web and mobile app development to UI/UX design, we help you stay ahead in the digital age.",
        icon : dt,
        path : "/our-services/digital-transformation"
    },
    {
        title : "Digital Marketing",
        description : "Elevate your online presence with our digital marketing services. From content creation to SEO and social media management, we help you reach your target audience and grow your brand.",
        icon : dm,
        path : "/our-services/digital-marketing"
    },
    {
        title : "Recruitment Upsurge",
        description : "Find top talent with our recruitment upsurge services. From senior middle hiring to global sourcing and diversity hiring, we connect you with the right candidates to build your dream team.",
        icon : ru,
        path : "/our-services/recruitment-upsurge"
    }
]


export const homeCoreValuesCards = [
    {
        sr : "01",
        title : "Innovation",
        description : "We embrace innovation as a cornerstone of our approach, constantly seeking new ideas, technologies, and methodologies to stay at the forefront of our industry. We encourage creativity and out-of-the-box thinking, fostering an environment where innovation thrives and drives continuous improvement."
    },
    {
        sr : "02",
        title : "Integrity",
        description : "Integrity is at the heart of our business. We uphold the highest standards of honesty, transparency, and ethical behavior in all our endeavors. We believe in doing the right thing, even when no one is watching, and we prioritize building trust with our clients, partners, and team members."
    },
    {
        sr : "03",
        title : "Collaboration",
        description : "Collaboration fuels our success. We believe in the power of teamwork and cooperation, leveraging the diverse strengths and perspectives of our team to achieve common goals. We foster an inclusive and supportive environment where everyone's contributions are valued, and we actively seek opportunities to collaborate with clients, partners, and communities for shared success."
    },
]

export const careerBenefitsCards = [
    {
        sr : "01",
        title : "Competitive Compensation",
        description : "We offer competitive salaries and performance-based incentives to recognize and reward your contributions. Your hard work and dedication are valued and rewarded accordingly."
    },
    {
        sr : "02",
        title : "Work-Life Balance",
        description : "We understand the importance of maintaining a healthy work-life balance. That's why we offer flexible work arrangements, paid time off, and remote work options to help you manage your personal and professional commitments."
    },
    {
        sr : "03",
        title : "Professional Growth",
        description : `We are committed to helping you grow and develop professionally. Through mentorship programs, training opportunities, and career advancement paths, we empower you to reach your full potential and achieve your career goals.
        Join us and enjoy these benefits and more as part of our dynamic team. Explore our current openings and take the next step in your career with Trioinovations.`
    },
]


export const openRolesCardData = [
    {
        title : "Frontend Developer",
        position : "Intern",
        department : "Software Team",
    },

    {
        title : "Backend Developer",
        position : "Intern",
        department : "Software Team",
    },

    {
        title : "Video Editor",
        position : "Full Time",
        department : "Content Team",
    },

    {
        title : "UI/UX",
        position : "Full Time",
        department : "Designer",
    },
]





export const blogLists = [
    {
        id : "3e2w2s2",
        title : "Embracing Neurodiversity Within Information Security",
        description :  `Learn more about neurodivergence and why a diverse team produces better results in many different fields of business.
        Get practical examples of skills that people of all neurotypes bring to strengthen your information security program.
        Tips for getting started on building a neurodiverse team.`,
        content : [
            {
                title : "The Science Behind Neurodivergence and The Technology Industry",
                description : "Many articles support the benefits of neurodiversity in the workforce, with fewer articles on the tech sector and even fewer on the security industry. There is consistent data supporting the positive benefits of diversity in teams and leadership roles [2]. While the research for neurodiversity in the workforce is still emerging, some signals indicate it provides similar advantages to those offered by other types of diversity."
            },
            {
                title : "Neurodiversity and InfoSec are Complimentary",
                description : `Let’s start by examining a few peer-studied strengths of neurodivergent individuals. We provide citations for these studies in the works cited section. We would like to clarify that these strengths are neither inclusive of all strengths nor present in all neurodivergent individuals. We also want to emphasize that these strengths can be found in neurotypical individuals and are not unique only to neurodivergent individuals. We cite each strength and suggest specific information security roles, functions, or problem sets that benefit from neurodivergent individuals. We also share personal stories on our experiences and how we leverage those strengths in our work.`
            },
            {
                title : "Conclusion",
                description : `We discussed several ways that embracing neurodiversity in Information Security benefits an organization. However, these examples merely scratch the surface, and the potential benefits are undoubtedly more comprehensive. We’ve shared our personal experiences as neurodivergent security professionals. We hope that others will see the value of continuing to invest in inclusion strategies that not only encourage work that all neurotypes can contribute to but also foster environments where security professionals can thrive in the ever-changing landscape of information security.`
            },
        ],
        date : "26-01-2023",
        readTime : 3,
        domain : "Tech",
        banner : "https://miro.medium.com/v2/resize:fit:640/format:webp/1*0aSpfwkZM-YmEfZ3-WsDvw.png"
    },

    {
        id : "3e2w2s3",
        title : "OpenAI Sora: One Step Away From The Matrix",
        description : `Taking another step toward pushing the boundaries of human imagination, I’m sure you’ve thought at least once, “If only I could be a director, I’d shoot a movie about this,” or “That would have been such a cool scene if only I had a camera,” or “I’d probably have recorded that.” Although no one can turn back time, OpenAI has been fast-forwarding us into the future for a few years now. Starting with DALL-E 2, followed by the successful ChatGPT, then multiple GPT models, and now the newly introduced text-to-video model, Sora, OpenAI continues to innovate and expand the possibilities of AI technology.`,
        content : [
            {
                title : "Sora’s technology",
                description : `Let’s tackle the first question first. Currently, OpenAI remains quite secretive about the inner workings and algorithms of its large AI continuous video model.
                They’ve only hinted on social media that OpenAI has made a breakthrough in “providing multi-frame prediction for the model”.
                🤐 Based on Big Ivan’s personal interpretation, this appears to signify that Sora has attained the capability to deeply and emotionally comprehend and construct the universal command language issued by humans through self-learning.`
            },
            {
                title : "What research was used?",
                description : `Sora builds on past research in DALL·E and GPT models. Specifically, it uses the recaptioning technique from DALL·E 3, which involves generating highly descriptive captions for visual training data. Sora is a diffusion model that uses a transformer architecture, similar to GPT models, and represents videos and images as collections of smaller units called patches. This approach allows for the generation of entire videos all at once or the extension of generated videos to make them longer.`
            },
            {
                title : "Who is it for?",
                description : `Sora is designed for users who want to create realistic and imaginative videos from text. It is aimed at individuals or organizations that require the ability to generate complex scenes, characters, and motions for various purposes, such as storytelling, entertainment, education, or content creation.`
            },
        ],
        date : "28-01-2023",
        readTime : 4,
        domain : "AI",
        banner : "https://miro.medium.com/v2/resize:fit:750/format:webp/1*fNjGMhVa1I5DLxf5VRYbkg.gif"
    },

    {
        id : "3e2w2s4",
        title : "Designing for Apple Vision Pro: Lessons Learned from Puzzling Places",
        description : `The Apple Vision Pro presents new design challenges to consider. Here are some of the lessons learned from redesigning Puzzling Places from the ground up for the Apple Vision Pro.`,
        content : [
            {
                title : "A new Platform",
                description : `Apple’s entry into the AR market has been highly anticipated. That’s why we decided to port the game to the new headset. Usually, the process of porting between VR headsets involves adjusting the tech backend so that it works on the new platform, but mostly leaving the design untouched. However, the more we found out about the headset, the more we thought this might really be a new platform in the truest sense. Officially, Apple doesn’t talk about AR or VR but spatial computing. While some of that is marketing, there are some real differences between how this headset is designed compared to something like Quest 3. So before you even start designing for this platform, it is worth thinking about what that even means.`
            },
            {
                title : "Direct and Indirect Controls",
                description : `One of the things that has suprisded me in the past few years, is how accessible VR games can be to non gamers. One of the reasons for that is probably that the main control paradigm for VR is Direct control. This is a fancy way of saying that you play the game through direct embodiment. This form of control is extermly intuative, because everyone knows how to use their own body.`
            },
            {
                title : "Shared Space means Shared Everything",
                description : `One of the challenges you will face in designing for the Shared Space is what it means when your app runs seamlessly next to other apps. The most obvious implication is that your computing resources are shared, so you shouldn’t assume the entire processing power would be dedicated to your app.`
            },
        ],
        date : "02-02-2023",
        readTime : 4,
        domain : "Design",
        banner : "https://i.gadgets360cdn.com/large/apple_vision_pro_1685992655621.jpg"
    },

    {
        id : "3e2w2s5",
        title : "B2B SaaS Lead Generation: Strategies for Success",
        description : `In the rapidly evolving world of B2B SaaS, lead generation stands as a crucial component for success. Generating leads is not just about attracting potential customers; it’s about attracting the right kind of customers who are genuinely interested in what you offer. This blog post will delve into effective strategies for B2B SaaS lead generation, providing insights and tips to help your business thrive in a competitive digital landscape.`,
        content : [
            {
                title : "Identifying Your Ideal Customer Profile",
                description : `The first step in effective lead generation is understanding who your ideal customer is. This involves creating a detailed customer profile that outlines the specific characteristics, needs, and behaviors of your target audience. By understanding who you are targeting, you can tailor your marketing efforts to address their specific pain points and interests, thereby increasing the likelihood of generating high-quality leads.`
            },
            {
                title : "The Role of Market Research",
                description : `Conducting thorough market research is essential to understand your audience deeply. This research should include analyzing your competitors, understanding industry trends, and gathering data on customer preferences and behaviors. By leveraging this information, you can refine your marketing strategies and create more targeted and effective campaigns.`
            },
            {
                title : "Creating Valuable and Relevant Content",
                description : `Content marketing is a powerful tool for B2B SaaS lead generation. By creating and sharing valuable, relevant content, you can attract and engage your target audience. This content could be in the form of blog posts, whitepapers, ebooks, or webinars. The key is to provide information that solves problems or addresses the needs of your potential customers.`
            },
        ],
        date : "05-02-2023",
        readTime : 3,
        domain : "B2B",
        banner : "https://miro.medium.com/v2/resize:fit:828/format:webp/1*egsbauEFoHuvsUFgpmpBdA.jpeg"
    },


    {
        id : "3e2w2s6",
        title : "Will AI Replace All Coders?",
        description : `Will AI take over all coding?
        During last year’s Abundance Summit, Emad Mostaque, CEO of Stability AI, made the statement that we would have “no more humans coding in 5 years.”
        Should we embrace this as inevitable and tell our kids they no longer need to learn to code?`,
        content : [
            {
                title : "AI is Democratizing Coding",
                description : `In a future where generative AI is doing the coding, anyone who can simply express what they want in natural language (for example, in English), will be able to use AI to convert their desires into code. As NVIDIA CEO Jensen Huang noted during a 2023 earnings call:
                “We’ve democratized computer programming for everyone … who could explain in human language a particular task to be performed.”
                In this fashion, doctors, lawyers, or kids will code.
                By eliminating barriers that once blocked creativity, anyone can now build systems that solve problems and create value for society.
                The platforms enabling this revolution are typically referred to as “no-code” and “low-code,” empowering individuals with little to no programming knowledge to develop applications swiftly and economically.
                `
            },
            {
                title : "Humanity’s Best “Coders” Will be Hybrids",
                description : `Technology has always allowed individuals to do more, faster. Robotic farm equipment has increased the output of a farmhand by 1,000-fold, while computers have empowered investors, scientists, and digital artists by orders of magnitude.
                Now AI, in a somewhat recursive manner, is enabling our best programmers to amplify their skills and programming prowess 100-fold.
                AI-enabled programming is a superpower for both the novice and the experienced coder.
                AI tools such as Replit and Github’s Copilot are helping developers automate redundant workflows, learn faster, work more efficiently, and scale their productivity.`
            },
            {
                title : "Why This Matters",
                description : `By democratizing humanity’s ability to code and by magnifying the abilities of our best coders by 100-fold using AI, we are super-charging our future.
                At the same time, AI is also learning how to code itself and improve its own performance and capabilities. Without question, we are accelerating the rate of technological advancement.`
            },
        ],
        date : "06-02-2023",
        readTime : 4,
        domain : "AI",
        banner : "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*EbdWwEVVAD6WijG_"
    },

    
    {
        id : "3e2w2s7",
        title : "I Constantly Use MrBeast’s Strategies to Grow My Business — Here’s How",
        description : `In the dynamic world of digital marketing, staying ahead means learning from the best. MrBeast, a YouTube phenomenon, has revolutionized content creation, offering invaluable lessons for marketers. In this post, we’ll explore MrBeast marketing strategies to understand how to maximize engagement and success on YouTube.
        The lessons are pulled from our very own CEO Ricky Ray Butler’s conversation with Jimmy Donaldson, aka MrBeast.`,
        content : [
            {
                title : "CONTENT IS KING: QUALITY OVER QUANTITY",
                description : `MrBeast’s meteoric rise is a testament to the power of high-quality content. He doesn’t just rely on the YouTube algorithm; his focus is on creating videos that captivate and retain his audience.
                For marketers, this underscores the necessity of investing in content quality over quantity. Crafting videos that resonate with your audience will naturally drive traffic and engagement.
                `
            },
            {
                title : "GO BIG OR GO HOME: LEVERAGING SCALE AND RESOURCES",
                description : `One notable aspect of MrBeast’s approach is his willingness to invest in large-scale productions. While not every brand has the resources to recreate a ‘Squid Game’, the principle remains relevant: leveraging your unique resources can make your content stand out. It’s about finding that sweet spot where your brand’s capabilities meet innovative ideas.`
            },
            {
                title : "INNOVATE TO CAPTIVATE: ORIGINALITY IN CONTENT CREATION",
                description : `Originality is MrBeast’s hallmark. His unique content sets a benchmark for creativity in the YouTube space. For marketers, this means thinking outside the box and experimenting with new ideas. It’s not just about following trends but about setting them.`
            },
        ],
        date : "04-01-2024",
        readTime : 5,
        domain : "Content Creation",
        banner : "https://miro.medium.com/v2/resize:fit:828/format:webp/1*NmMSl69h9v9dbMLBrRmCjA.png"
    },
]





export const digitalTransformationData = [
    {
        title: "Frontend Development",
        description: "We specialize in creating user-friendly and engaging interfaces using the latest frontend technologies such as React, Angular, and Vue.js. Our frontend development services focus on delivering high-performance and responsive web applications.",
        banner : "https://image.lexica.art/full_webp/0e8324eb-ef30-415f-b730-2a087ec4d2a5"
    },
    {
        title: "Backend Development",
        description: "Our backend development services cover a wide range of technologies and frameworks such as Node.js, Django, and Flask. We build scalable and secure backend solutions that power your applications and handle complex business logic.",
        banner : "https://image.lexica.art/full_webp/08ea4794-e36e-467e-8cb6-d5e622753d67"
    },
    {
        title: "Mobile App Development",
        description: "We offer end-to-end mobile app development services for iOS and Android platforms. From conceptualization to design and development, we ensure that your mobile app meets the highest standards of performance and usability.",
        banner : "https://image.lexica.art/full_webp/32864a67-59bf-4c35-b58a-cee8cbf1a76d"
    },
    {
        title: "Web Development",
        description: "Our web development services encompass a variety of technologies and frameworks to deliver robust and scalable web solutions. Whether you need a custom CMS or a complex web application, we have the expertise to bring your ideas to life.",
        banner : "https://image.lexica.art/full_webp/5a3d2d24-68ff-437d-ac6f-84975d683f6a"
    },
    {
        title: "Support Service",
        description: "Our support services ensure that your digital solutions run smoothly and efficiently. From troubleshooting and bug fixes to performance optimization, we provide comprehensive support to keep your systems up and running.",
        banner : "https://image.lexica.art/full_webp/e5c49c47-dd4e-47fd-8bf4-abd06a2f7c70"
    },
    {
        title: "Cloud",
        description: "We help businesses leverage the power of cloud computing to improve scalability, flexibility, and cost-efficiency. Our cloud services include cloud migration, infrastructure management, and application development for cloud platforms.",
        banner : "https://image.lexica.art/full_webp/0a92c22b-8e31-4e82-9245-1efba8ecb488"
    },
    {
        title: "Graphic Design",
        description: "Our graphic design services focus on creating visually stunning and impactful designs that resonate with your audience. From branding and logo design to digital illustrations and UI/UX design, we cover all aspects of graphic design.",
        banner : "https://image.lexica.art/full_webp/5b888512-6802-4fd9-bec8-8bc520d1beaf"
    },
    {
        title: "Testing",
        description: "We offer comprehensive testing services to ensure the quality and reliability of your digital solutions. Our testing services include manual and automated testing, performance testing, security testing, and more.",
        banner : "https://image.lexica.art/full_webp/56b19b28-e169-4d0c-a8d5-317cd95167ed"
    }
];



export const digitalMarketingData = [
    {
        title: "SEO",
        description: "Our SEO services focus on improving your website's visibility and ranking on search engines. We use proven strategies and techniques to optimize your website for relevant keywords, increase organic traffic, and drive conversions.",
        banner : "https://image.lexica.art/full_webp/14edbc4e-6676-4652-a49f-6e6f1ab2e528"
    },
    {
        title: "Social Media Management",
        description: "We offer comprehensive social media management services to help you build and maintain a strong presence on popular social media platforms. From content creation to community engagement, we handle all aspects of your social media strategy.",
        banner : "https://image.lexica.art/full_webp/0c224b06-09ef-425a-baa2-6c41fba892ea"
    },
    {
        title: "Google Ads",
        description: "Our Google Ads services help you reach your target audience and drive relevant traffic to your website. We create and manage Google Ads campaigns that are optimized for maximum ROI and conversions.",
        banner : "https://image.lexica.art/full_webp/23291298-232c-4569-9c06-38ed7f8f36f8"
    },
    {
        title: "Content Creation",
        description: "We specialize in creating high-quality and engaging content that resonates with your audience. From blog posts and articles to videos and infographics, we produce content that drives traffic, leads, and sales.",
        banner : "https://image.lexica.art/full_webp/f5a57874-e56b-4a64-bfc2-d8dcdbe4f70e"
    },
    {
        title: "Testing",
        description: "Our testing services ensure that your digital marketing campaigns are performing optimally. We conduct A/B testing, performance testing, and user testing to identify areas for improvement and optimize your campaigns for better results.",
        banner : "https://image.lexica.art/full_webp/a073bd1f-1409-41ad-8586-229308b82d6a"
    }
];



export const recruitmentUpsurgeData = [
    {
        title: "Senior Middle Hiring",
        description: "Our senior middle hiring services focus on recruiting top-tier talent for mid-level and senior positions within your organization. We leverage our extensive network and industry expertise to identify and attract qualified candidates who meet your specific requirements.",
        banner : "https://image.lexica.art/full_webp/32e10278-e8dd-411b-a6cf-6d042ebf86b2"
    },
    {
        title: "Global Sourcing",
        description: "Our global sourcing services enable you to expand your talent pool beyond local boundaries. We leverage our global network and resources to source qualified candidates from around the world, ensuring that you have access to the best talent, regardless of location.",
        banner : "https://image.lexica.art/full_webp/1e54e1cc-84f0-433e-92a4-20ef5a6edcd8"
    },
    {
        title: "Diversity Hiring",
        description: "We are committed to promoting diversity and inclusion in the workplace. Our diversity hiring services help you attract and retain a diverse workforce, ensuring that your organization benefits from a range of perspectives and experiences.",
        banner : "https://image.lexica.art/full_webp/306ab7ce-0305-4b65-bc37-cd05e4b4fec7"
    }
];



export const testimonialList = [
    {
        id : "d32ws2",
        profileImg : "https://image.lexica.art/full_webp/54477fa6-0768-4d70-830f-7a2d7870c40c",
        name : "John Doe",
        designation : "CEO, Tech Company",
        title : "Game-Changing Expertise",
        testimonial : "Working with Trioinovations has been a game-changer for our business. Their expertise in digital transformation helped us streamline our processes and adapt to the ever-evolving tech landscape. Highly recommend their services!"
    },
    {
        id : "d32ws3",
        profileImg : "https://image.lexica.art/full_webp/45a3e0ac-32b1-4a36-9821-d6b67c1f1ee4",
        name : "Jane Smith",
        designation : "Marketing Director, E-commerce Firm",
        title : "Incredible Results",
        testimonial : "Incredible results! Trioinovations took our digital marketing strategy to new heights. Their innovative approach to SEO and social media management significantly boosted our online presence and drove sales. Couldn't be happier with the outcome."
    },
    {
        id : "d32ws4",
        profileImg : "https://image.lexica.art/full_webp/ded6c421-dadd-48ed-808b-cbea56a1cc8c",
        name : "Deepika Johnson",
        designation : "HR Manager, Fortune 500 Company",
        title : "Exceptional Talent Acquisition",
        testimonial : "Exceptional talent acquisition services! Trioinovations helped us find top-tier candidates for critical roles through their senior middle hiring and diversity hiring initiatives. Their commitment to excellence and professionalism is unmatched. A pleasure to work with!"
    }
];



export const additionalServices = [
    {
        title: "Project Management",
        description: "Ensure smooth project execution from inception to completion, meeting deadlines and budgets while maintaining quality standards. Manage resources, schedules, and deliverables effectively.",
        bannerImg : projectMgmt,
        path : "/our-services/digital-transformation"
    },
    {
        title: "Consulting Services",
        description: "Provide expert guidance and insights to clients on digital transformation strategies, helping them leverage technology for business growth and efficiency.",
        bannerImg : ru,
        path : "/our-services/digital-transformation"
    },
    {
        title: "Quality Assurance",
        description: "Ensure the reliability, security, and performance of digital solutions through comprehensive testing and quality assurance processes, delivering high-quality products to clients.",
        bannerImg : dm,
        path : "/our-services/digital-transformation"
    },
    {
        title: "User Experience Design",
        description: "Create intuitive and engaging user experiences for digital products, focusing on usability, accessibility, and user satisfaction to drive customer engagement and loyalty.",
        bannerImg : dt,
        path : "/our-services/digital-transformation"
    }
];