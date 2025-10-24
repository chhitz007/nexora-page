'use client';

// 🚀 FIX 1: Import the Next.js Image component
import Image from 'next/image';
import React from 'react';
import { ChevronRight, Briefcase, Database, Handshake, Users, TrendingUp, MessageSquare } from 'lucide-react';
import { Founder } from '@/components/types';

interface CarouselCardProps {
  founder: Founder;
  onClick: (founder: Founder) => void;
}

// Helper functions - FIXED: Changed all text colors from -600 to -700 for better contrast
const founderColorMap = (accentColor: Founder['accentColor']): { cardBg: string, text: string, dot: string, avatarBorder: string } => {
  switch (accentColor) {
    case 'red':
      return { cardBg: 'bg-red-500/10', text: 'text-red-700', dot: 'bg-red-500', avatarBorder: 'border-red-500' };
    case 'blue':
      return { cardBg: 'bg-blue-500/10', text: 'text-blue-700', dot: 'bg-blue-500', avatarBorder: 'border-blue-500' };
    case 'yellow':
      return { cardBg: 'bg-yellow-500/10', text: 'text-yellow-700', dot: 'bg-yellow-500', avatarBorder: 'border-yellow-500' };
    case 'green':
      return { cardBg: 'bg-green-500/10', text: 'text-green-700', dot: 'bg-green-500', avatarBorder: 'border-green-500' };
    case 'pink':
      return { cardBg: 'bg-pink-500/10', text: 'text-pink-700', dot: 'bg-pink-500', avatarBorder: 'border-pink-500' };
    default:
      return { cardBg: 'bg-gray-500/10', text: 'text-gray-700', dot: 'bg-gray-500', avatarBorder: 'border-gray-500' };
  }
};

const founderIconMap = (title: string): React.ElementType => {
  switch (title) {
    case 'Co-Founder & CEO': return Briefcase;
    case 'Co-Founder & CTO': return Database;
    case 'Head of Strategic Partnerships': return Handshake;
    case 'Chief Operations Officer': return Users;
    case 'Director of Finance': return TrendingUp;
    default: return MessageSquare;
  }
};

export default function FounderCarouselCard({ founder, onClick }: CarouselCardProps) {
  const colorClasses = founderColorMap(founder.accentColor);
  const Icon = founderIconMap(founder.title);

  return (
    <div
      className="flex-shrink-0 w-full md:w-full bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-gray-700 hover:-translate-y-0.5"
      onClick={() => onClick(founder)}
    >
      <div className="flex items-center space-x-5 mb-7">
        {/* Avatar / Image Space - Parent div is w-24 h-24 (96px) */}
        <div className={`w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center bg-gray-100/50 overflow-hidden border-2 ${colorClasses.avatarBorder}`}>
          {founder.avatarUrl ? (
            // 🚀 FIX 2 & 3: Use <Image />, set explicit dimensions, and set loading="lazy"
            <Image
              src={founder.avatarUrl}
              alt={founder.name}
              width={96} // Fixes CLS
              height={96} // Fixes CLS
              // Use fill to respect the parent div's w-24/h-24 and object-cover
              style={{ objectFit: 'cover' }}
              loading="lazy" // Defers off-screen images
              sizes="(max-width: 768px) 96px, 96px"
            />
          ) : (
            <Icon className={`w-8 h-8 ${colorClasses.text}`} />
          )}
        </div>

        {/* Name and Title Block */}
        <div className="flex-grow">
          <h3 className="text-2xl font-extrabold text-gray-900">{founder.name}</h3>
          {/* Title uses dynamic colorClasses.text which is now -700 */}
          <p className={`text-base font-semibold ${colorClasses.text}`}>{founder.title}</p>
        </div>
      </div>

      <div className="flex-grow">
        {/* Note Content - FIXED: Changed text-gray-700 to text-gray-800 for better contrast */}
        <p className="text-base text-gray-800 leading-normal line-clamp-4">
          {founder.noteContent}
        </p>
      </div>

      {/* Read More Link - FIXED: Changed text-purple-600 to text-purple-700 */}
      <div className="mt-5 flex items-center text-base font-bold text-purple-700 hover:text-purple-900 transition-colors">
        Read More
        <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}