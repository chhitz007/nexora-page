// components/data/homeData.ts

import { Globe2, PersonStanding, Network, ShoppingCart } from 'lucide-react';
import { HeroData, PillarsDataInterface, VMPanelContent, Founder } from '../types';

export const heroData: HeroData = {
    tagline: "Global Reach. Local Trust.",
    headline: "The Future Begins with Nexora.",
    highlightWord: "SKYBHARAT",
};


export const pillarsData: PillarsDataInterface = {
    header: {
        tagline: "The Core Four",
        title: "Intelligence. Execution. Scale.",
        subtitle: "Four forces. One living ecosystem.",
    },
    items: [
        {
            // 1. SkyeCentral: The core hub for B2B transactions and services.
            name: 'SkyeCentral',
            slogan: 'The Place Where Buying Stops Being Guesswork',
            description: `SkyeCentral takes care of the full business buying journey, from selecting products to completing the order. All prices, quantities, orders, payments, delivery details, and records are managed in one system. Businesses don’t need to follow up with multiple people or track things separately. Everything stays organized and connected, so buying remains clear, controlled, and hassle-free from start to end.`,
            icon: Network,
            status: 'waitlist',
            actionText: 'Join Waitlist',
            accentColor: 'text-indigo-700', // Matches professional & trustworthy tone
            actionHref: '/community',
        },

        {
            // 2. SkyeCart: The B2C e-commerce/retail arm.
            name: 'SkyeCart',
            slogan: 'Easy shopping, Built on Trust.',
            description: `SkyeCart is built for people who want shopping to be easy and dependable. It brings trusted products, clear prices, and a smooth checkout into one seamless experience. Payments are secure, deliveries are reliable, and what you see is exactly what arrives. SkyeCart cuts out the extra steps and confusion, keeping shopping quick, comfortable, and stress-free.`,
            icon: ShoppingCart,
            status: 'waitlist',
            actionText: 'Explore Soon',
            accentColor: 'text-pink-700', // Retains original color for a consumer-facing feel
            actionHref: '/coming-soon',
        },

        {
            // 3. SkyeSphere: Implies global coverage; suitable for Logistics/Global Trade.
            name: 'SkyeSphere',
            slogan: 'One Route. The Whole World.',
            description: `SkyeSphere makes global export and import feel like one connected journey. Instead of handling borders, paperwork, and multiple partners, businesses move goods through a single, clear flow. Shipping, customs, tracking, and delivery stay aligned from start to finish. International trade stops feeling like a maze and starts moving like a straight road.`,
            icon: Globe2,
            status: 'launching',
            actionText: 'Get Started',
            accentColor: 'text-emerald-700', // Retains original color for growth/expansion
            actionHref: '/global-link',
        },

        {
            // 4. SkyeAccess
            name: 'SkyeAccess',
            slogan: 'Trusted Services, One Place',
            description: `SkyeAccess is where people and businesses find services they can trust. From everyday needs to specialised professional support, everything comes together in one reliable place. Providers are verified, prices are transparent, and work happens without back-and-forth or confusion. Getting the right service finally feels simple, controlled, and stress-free.`,
            icon: PersonStanding,
            status: 'launching',
            actionText: 'Join Beta',
            accentColor: 'text-amber-700', // Retains original color for energy/opportunity
            actionHref: '/skillhub',
        },

    ],
};

export const visionContent: VMPanelContent = {
    title: 'Our Vision',

    // Short teaser shown before opening / expanding
    preview: `We’re not here to build more tools. We’re here to remove friction, restore trust, and make everyday work feel simpler and more predictable.`,

    // Full vision text shown on expand / modal
    fullContent: `This is not about building more apps, platforms, or tools. It’s about fixing the everyday problems people face while doing business or getting work done. Too often, simple things become complicated, slow, or uncertain and they shouldn’t be.

                  We believe systems should work quietly in the background, without constant follow-ups or effort. Trust should come naturally from how things function, not from claims or promises. Buying, selling, moving goods, and accessing services should feel connected and predictable.

                  When systems are clear, people can focus on their work instead of solving problems. Our goal is to reduce friction, remove doubt, and make progress feel steady  so businesses grow with confidence, individuals move forward with ease, and everyday work feels simpler than it does today.`,

    accentColor: 'teal',
    type: 'vision'
};


export const missionContent: VMPanelContent = {
    title: 'Our Mission',

    // Short teaser shown before opening / expanding
    preview: `We focus on building dependable systems that reduce effort, remove uncertainty, and quietly support everyday work.`,

    // Full mission text shown on expand / modal
    fullContent: `We build dependable systems that people and organisations use every day. Our focus is on practical work simplifying buying, selling, movement, and services across one connected ecosystem.

                 Everything we create is designed to reduce effort, remove uncertainty, and save time. We care deeply about reliability, because small failures break trust at scale. The technology stays in the background, but the results are felt in daily work and life.

                By keeping systems clear, connected, and predictable, we help people act with confidence. This is how we earn trust by making things work, every single day.`,

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