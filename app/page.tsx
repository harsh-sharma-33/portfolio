//'use client';

import About from '@/components/About';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

export default function Home() {
    return (
        <div>
            <Header />
            <HeroSection />
            <About />
        </div>
    );
}
