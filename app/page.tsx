'use client';

import React, { useState } from 'react';
// Corrected imports to use relative paths (e.g., ../) instead of path aliases (@/)
import HeroSection from '../components/home/HeroSection';
import CorePillarsSection from '../components/home/CorePillarsSection';
import VisionMissionSection from '../components/home/VisionMissionSection';
import FoundersNoteSection from '../components/home/FoundersNoteSection';
import PillarModal from '../components/home/modals/PillarModal';
import VisionMissionModal from '../components/home/modals/VisionMissionModal';
import FoundersModal from '../components/home/modals/FoundersModal';
import { Pillar, VMPanelContent, Founder } from '../components/types';
import { foundersData } from '../components/data/homeData';

export default function HomePage() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);
  const [selectedVMContent, setSelectedVMContent] = useState<VMPanelContent | null>(null);
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  // Lock/unlock scroll when modals open/close
  const lockScroll = (lock: boolean) => {
    document.body.style.overflow = lock ? 'hidden' : 'unset';
  };

  // Pillar Modal handlers
  const openPillarModal = (pillar: Pillar) => {
    setSelectedPillar(pillar);
    lockScroll(true);
  };

  const closePillarModal = () => {
    setSelectedPillar(null);
    lockScroll(false);
  };

  // Vision/Mission Modal handlers
  const openVMModal = (content: VMPanelContent) => {
    setSelectedVMContent(content);
    lockScroll(true);
  };

  const closeVMModal = () => {
    setSelectedVMContent(null);
    lockScroll(false);
  };

  // Founder Modal handlers
  const openFounderModal = (founder: Founder) => {
    setSelectedFounder(founder);
    lockScroll(true);
  };

  const closeFounderModal = () => {
    setSelectedFounder(null);
    lockScroll(false);
  };

  const setCurrentFounder = (founder: Founder) => {
    setSelectedFounder(founder);
  };

  return (
    <>
      {/* Global Styles for Animations */}
      <style jsx global>{`
        /* Modal Animations */
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-backdrop {
          animation: modalFadeIn 0.1s ease-out;
        }
        .modal-content {
          animation: modalSlideUp 0.2s ease-out;
        }
        
        /* Shimmer Effect */
        @keyframes shimmer-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .group:hover .group-hover\\:animate-\\[shimmer-slide_1\\.5s_ease-in-out\\] {
          animation: shimmer-slide 1.5s ease-in-out;
        }

        /* Pillar Border Accent */
        .pillar-border-base {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px; 
          background-color: transparent;
          transition: background-color 0.3s ease-out;
        }
        .pillar-border-accent {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          transition: width 0.3s ease-out;
        }
        .group:hover .pillar-border-accent {
          width: 100%;
        }
      `}</style>

      {/* Hero Section */}
      <HeroSection />

      {/* Core Pillars Section */}
      <CorePillarsSection openPillarModal={openPillarModal} />

      {/* Vision & Mission Section */}
      <VisionMissionSection openVMModal={openVMModal} />

      {/* Founders Note Section */}
      <FoundersNoteSection openModal={openFounderModal} />

      {/* Pillar Modal */}
      <PillarModal
        pillar={selectedPillar}
        closeModal={closePillarModal}
      />

      {/* Vision/Mission Modal */}
      <VisionMissionModal
        content={selectedVMContent}
        closeModal={closeVMModal}
      />

      {/* Founder Modal */}
      <FoundersModal
        founder={selectedFounder}
        closeModal={closeFounderModal}
        founders={foundersData}
        setCurrentFounder={setCurrentFounder}
      />
    </>
  );
}
