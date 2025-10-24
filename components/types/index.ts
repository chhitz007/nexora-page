// components/types/index.ts

import { LucideIcon } from 'lucide-react';

export interface Pillar {
    name: string;
    slogan: string;
    description: string;
    icon: LucideIcon;
    status: 'launching' | 'waitlist';
    actionText: string;
    actionHref: string;
    accentColor: string;
}

export interface PillarsDataInterface {
    header: {
        tagline: string;
        title: string;
        subtitle: string;
    };
    items: Pillar[];
}

export interface VMPanelContent {
    title: string;
    preview: string;
    fullContent: string;
    accentColor: 'teal' | 'purple';
    type: 'vision' | 'mission';
}

export interface Founder {
    id: number;
    name: string;
    title: string;
    accentColor: 'red' | 'blue' | 'yellow' | 'green' | 'pink';
    avatarUrl: string;
    noteTitle: string;
    noteContent: string;
}

export interface HeroData {
    tagline: string;
    headline: string;
    highlightWord: string;
}