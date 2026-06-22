import React from 'react';
import { Code2, Menu } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-brand-white/80 backdrop-blur-md border-b border-brand-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="bg-brand-brown p-2 rounded-lg">
                            <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-brand-text">DevFolio</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#showcase" className="text-brand-textLight hover:text-brand-brown transition-colors font-medium">Showcase</a>
                        <a href="#network" className="text-brand-textLight hover:text-brand-brown transition-colors font-medium">Network</a>
                        <a href="#contact" className="text-brand-textLight hover:text-brand-brown transition-colors font-medium">Contact</a>
                        <button className="bg-brand-brown hover:bg-brand-brownDark text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                            Join Network
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-brand-text hover:text-brand-brown transition-colors">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};