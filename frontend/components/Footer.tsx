import React from 'react';
import { Code2, MessageSquare, Globe, Code } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-brand-cream pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-brand-brown p-1.5 rounded-md">
                                <Code2 className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-xl text-brand-text">DevFolio</span>
                        </div>
                        <p className="text-brand-textLight max-w-sm mb-6">
                            The minimalist platform for developers to showcase their work, build their brand, and connect with the global IT community.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">
                                <MessageSquare className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">
                                <Code className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-brand-text mb-4">Platform</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">Explore Projects</a></li>
                            <li><a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">Find Developers</a></li>
                            <li><a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">For Companies</a></li>
                            <li><a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-brand-text mb-4">Resources</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">Blog</a></li>
                            <li><a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">Community Guidelines</a></li>
                            <li><a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">Help Center</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="pt-8 border-t border-brand-cream flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-textLight text-sm">
                        &copy; {new Date().getFullYear()} DevFolio Network. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">Privacy Policy</a>
                        <a href="#" className="text-brand-textLight hover:text-brand-brown transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};