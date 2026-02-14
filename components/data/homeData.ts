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
        title: 'Operations & Flow',
        accentColor: 'red',
        avatarUrl: 'https://res.cloudinary.com/db7ieyyu4/image/upload/v1771094606/subham_bot_ggul1f.jpg',
        noteTitle: 'The focus is on making sure the system holds up when it matters.',
        noteContent: "Ideas matter, but what counts is how smoothly things move on ordinary days. Buying, services, logistics, and execution should stay connected without constant fixing. When volume grows or pressure builds, the system should remain steady, not fragile. Good operations don’t draw attention — they quietly prevent problems before they surface. Flow isn’t about speed alone, it’s about consistency, clarity, and control over time. When people don’t have to think about how things move, trust builds naturally.",
    },

    {
        id: 2,
        name: 'Chhitiz Updhayay',
        title: 'Systems & Product',
        accentColor: 'blue',
        avatarUrl: 'https://res.cloudinary.com/db7ieyyu4/image/upload/f_auto,q_auto,w_150,h_150,c_fill/v1759898103/1690482166121_yu1lhw.jpg',
        noteTitle: 'The focus here is on building things that make sense the first time.',
        noteContent: "Products should solve real problems without adding new ones. Good systems don’t feel clever, they feel obvious once they’re in place. Every decision is about clarity — what the user needs, what the system should do, and what should be left out. Complexity is easy to add and hard to remove, so restraint matters. When systems are designed well, people don’t need instructions or explanations. They just work, quietly and consistently, as part of everyday life.",
    },

    {
        id: 3,
        name: 'Shrey Mishra',
        title: 'Growth & Partnerships',
        accentColor: 'yellow',
        avatarUrl: 'https://res.cloudinary.com/db7ieyyu4/image/upload/f_auto,q_auto,w_150,h_150,c_fill/v1759899280/shrey_pic_kqmyig.jpg',
        noteTitle: 'Growth is built through relationships, not shortcuts.',
        noteContent: "Every partnership starts with understanding what truly matters on both sides. Good collaborations are based on alignment, not urgency. The focus is on creating value that lasts beyond a single deal or launch. Listening to the market matters more than trying to push it. When expectations are clear and incentives are honest, growth becomes steady instead of fragile. The strongest partnerships are the ones that still make sense when conditions change.",
    },

    {
        id: 4,
        name: 'Atishay Jain',
        title: 'Finance & Control',
        accentColor: 'green',
        avatarUrl: 'https://res.cloudinary.com/db7ieyyu4/image/upload/v1771094606/atii_fmtqti.jpg',
        noteTitle: 'The focus here is on keeping the numbers honest.',
        noteContent: "Spending needs to be intentional, not optimistic. Revenue, costs, and cash have to line up in reality, not just in plans. Every decision has a financial consequence, whether it’s visible immediately or not. Control is what keeps growth from turning into risk. When numbers are understood clearly, decisions become calmer and more disciplined. The goal is simple — avoid surprises and keep the system stable over time.",
    },

    {
        id: 5,
        name: 'Piyush',
        title: 'Logistics & Reliability',
        accentColor: 'pink',
        avatarUrl: 'https://res.cloudinary.com/db7ieyyu4/image/upload/v1771095338/pussy_y30rwx.jpg',
        noteTitle: 'The focus here is on making sure things arrive the way they’re supposed to.',
        noteContent: "Movement should be predictable, not stressful or uncertain. Delays, gaps, and handoffs need to be handled early, not explained later. Reliability comes from planning for real conditions, not ideal ones. When something goes wrong, it should be visible immediately and fixed properly. Consistency matters more than speed when trust is involved. If people can rely on movement without checking twice, the system is doing its job.",
    },

];