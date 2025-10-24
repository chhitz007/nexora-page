// components/data/homeData.ts

import {  Database, ShoppingBag, Globe2, Briefcase } from 'lucide-react';
import { HeroData, PillarsDataInterface, VMPanelContent, Founder } from '../types';

export const heroData: HeroData = {
    tagline: "Global Reach. Local Trust.",
    headline: "The Future Begins with Nexora.",
    highlightWord: "Nexora",
};


export const pillarsData: PillarsDataInterface = {
    header: {
        tagline: "The Core Four",
        title: "Intelligence. Execution. Scale.",
        subtitle: "We're not just a platform; we are the interconnected systems that transform global supply chains.",
    },
    items: [
        {
            name: 'TradeSphere',
            slogan: 'Connecting Businesses. Expanding Horizons.',
            description: 'TradeSphere is a global B2B marketplace designed to connect buyers and suppliers seamlessly. It empowers businesses with real-time trade insights, secure transactions, and a trusted network for scaling across borders. From discovery to delivery, TradeSphere simplifies every step of your trading journey.',
            icon: Database,
            status: 'waitlist',
            actionText: 'Join Waitlist',
            accentColor: 'text-indigo-700', // ✅ Matches professional & trustworthy tone
            actionHref: '/community',
        },
        {
            name: 'ShopNova',
            slogan: 'Shop Smart. Live Bright.',
            description: 'ShopNova redefines online retail with a modern, customer-first experience. It connects buyers to trusted sellers worldwide, ensuring smooth transactions, transparent pricing, and fast delivery. Every product and interaction reflects innovation and simplicity.',
            icon: ShoppingBag,
            status: 'waitlist',
            actionText: 'Explore Soon',
            accentColor: 'text-pink-700',
            actionHref: '/coming-soon',
        },
        {
            name: 'GlobalLink',
            slogan: 'Connecting Markets, Empowering Trade.',
            description: 'GlobalLink is the unified platform for global import-export operations. It bridges businesses across borders, providing real-time logistics tracking, compliance management, and data-driven trade intelligence to simplify international commerce.',
            icon: Globe2,
            status: 'launching',
            actionText: 'Get Started',
            accentColor: 'text-emerald-700',
            actionHref: '/global-link',
        },
        {
            name: 'SkillHub',
            slogan: 'Where Skills Meet Opportunity.',
            description: 'SkillHub connects professionals and businesses in a dynamic service ecosystem. From freelancers to enterprises, it’s the trusted hub to find, hire, and collaborate — powered by verified profiles, intelligent matching, and transparent contracts.',
            icon: Briefcase,
            status: 'launching',
            actionText: 'Join Beta',
            accentColor: 'text-amber-700',
            actionHref: '/skillhub',
        },

    ],
};

export const visionContent: VMPanelContent = {
    title: 'Our Vision',
    preview: 'Our vision is to build the greatest business ecosystem India has ever seen — one that begins at the origin, unlocks through the vault, expands across the sphere, and connects through the grid.',
    fullContent: 'Our vision is to build the greatest business ecosystem India has ever seen — one that begins at the origin, unlocks through the vault, expands across the sphere, and connects through the grid. We see a tomorrow where commerce is not noise but power, not confusion but clarity, not limited but limitless.\n\nWe envision a future where every transaction flows seamlessly, where trust is built into every interaction, and where businesses of all sizes can thrive in an interconnected digital landscape. Our ecosystem is designed to eliminate friction, foster innovation, and create unprecedented value for all stakeholders.\n\nThis is not just about building platforms — it\'s about crafting a movement that transforms how India does business, empowering millions to reach their full potential in the digital age.',
    accentColor: 'teal',
    type: 'vision'
};

export const missionContent: VMPanelContent = {
    title: 'Our Mission',
    preview: 'We are not here to follow the old ways of business — we are here to rewrite them. Cluchh exists to empower India\'s backbone — its manufacturers, retailers, traders, and customers — with silent systems, invisible bridges, and unbreakable trust.',
    fullContent: 'We are not here to follow the old ways of business — we are here to rewrite them. Cluchh exists to empower India\'s backbone — its manufacturers, retailers, traders, and customers — with silent systems, invisible bridges, and unbreakable trust.\n\nOur mission is to create technology that works invisibly in the background, enabling seamless commerce without complexity. We build tools that don\'t demand attention but deliver results. We forge connections that feel natural, not forced.\n\nEvery day, we work to strengthen the foundation of Indian commerce by providing infrastructure that is reliable, scalable, and accessible to all. We believe in democratizing access to world-class business tools, ensuring that every entrepreneur has the resources to compete and succeed in the modern marketplace.',
    accentColor: 'purple',
    type: 'mission'
};

export const foundersData: Founder[] = [
    {
        id: 1,
        name: 'Shubham Gupta',
        title: 'Co-Founder & CEO',
        accentColor: 'red',
        avatarUrl: 'https://res.cloudinary.com/db7ieyyu4/image/upload/f_auto,q_auto,w_150,h_150,c_fill/v1759898586/subham_img_jxhms6.jpg',
        noteTitle: 'The Quiet Revolution',
        noteContent: "Cluchh was never meant to be just another company — it is the quiet revolution of commerce. We are not chasing today, we are shaping tomorrow, crafting unseen networks that will empower every business, every customer, every dreamer. We see a world where supply chain friction is a memory, replaced by efficiency and seamless flow.",
    },
    {
        id: 2,
        name: 'Chhitiz Updhayay',
        title: 'Co-Founder & CTO',
        accentColor: 'blue',
        avatarUrl: 'https://res.cloudinary.com/db7ieyyu4/image/upload/f_auto,q_auto,w_150,h_150,c_fill/v1759898103/1690482166121_yu1lhw.jpg',
        noteTitle: 'Long-Term Gains',
        noteContent: "Our focus has always been on the long game. It's not about short-term gains, but about building sustainable institutions that will stand the test of time. We believe in the power of technology to solve real-world problems and in the potential of our people to execute that vision flawlessly. Technology must serve purpose.",
    },
    {
        id: 3,
        name: 'Shrey Mishra ',
        title: 'Head of Strategic Partnerships',
        accentColor: 'yellow',
        avatarUrl: 'https://res.cloudinary.com/db7ieyyu4/image/upload/f_auto,q_auto,w_150,h_150,c_fill/v1759899280/shrey_pic_kqmyig.jpg',
        noteTitle: 'Building Unbreakable Trust',
        noteContent: "Commerce is built on trust. Our role is to build a platform where every buyer and seller feels secure. This means rigorous verification, transparent transactions, and a commitment to fairness. Our network of verified partners is the backbone of Cluchh's reliability. We're not just moving goods; we're cultivating a community where every handshake is digital, and every agreement is guaranteed. Let's grow together.",
    },
    {
        id: 4,
        name: 'Atishay Jain',
        title: 'Chief Operations Officer',
        accentColor: 'green',
        avatarUrl: 'https://res.cloudinary.com/db7ieyyu4/image/upload/f_auto,q_auto,w_150,h_150,c_fill/v1759899282/ati_pic_yixhdg.jpg',
        noteTitle: 'Execution is Everything',
        noteContent: "A great vision is nothing without flawless execution. My focus is on the ground—optimizing every route, minimizing every bottleneck, and ensuring real-time reliability. Our operational models are constantly learning and evolving. We promise a logistical experience that is smooth, predictable, and consistently excellent. From warehouse floor to final delivery, we handle the complexity so you can focus on growth.",
    },
    {
        id: 5,
        name: 'Piyush ',
        title: 'Director of Finance',
        accentColor: 'pink',
        avatarUrl: 'https://res.cloudinary.com/db7ieyyu4/image/upload/f_auto,q_auto,w_150,h_150,c_fill/v1759899569/piyush_pic_v1k2yi.jpg',
        noteTitle: 'Fueling Financial Flow',
        noteContent: "Capital shouldn't be a constraint on ambition. Ascend is our answer to the financial friction in bulk business. We provide seamless, integrated financial solutions that unlock working capital for our partners. This is about more than just transactions; it's about providing the financial power to scale. We are committed to making growth capital accessible and transparent for every business in our ecosystem.",
    },
];