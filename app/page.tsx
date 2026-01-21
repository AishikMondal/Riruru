'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Gift from '@/components/Gift';
import Timeline from '@/components/Timeline';
import QRMemory from '@/components/QRMemory';
import LoveLetter from '@/components/LoveLetter';
import Ending from '@/components/Ending';
import FloatingHearts from '@/components/FloatingHearts';

export default function Home() {
  const [musicToggle, setMusicToggle] = useState(false);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-pink-200 via-rose-200 to-purple-200">
      <FloatingHearts />
      
      {/* Music Toggle */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setMusicToggle(!musicToggle)}
          className="p-3 rounded-full bg-white/70 backdrop-blur shadow-lg hover:bg-white/90 transition"
          aria-label="Toggle background music"
        >
          {musicToggle ? '🔊' : '🔇'}
        </button>
      </div>

      <Hero image="/images/whatsapp-20image-202026-01-22-20at-201.jpeg" />
      <Gift />
      <Timeline />
      <QRMemory />
      <LoveLetter />
      <Ending />
    </main>
  );
}
