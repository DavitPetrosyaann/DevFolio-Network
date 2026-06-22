import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Showcase } from './components/Showcase';
import { Network } from './components/Network';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Showcase />
                <Network />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;