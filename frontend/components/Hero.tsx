import React from 'react';
import { ArrowRight, Terminal, Star, GitBranch, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-cream rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-brand-brown/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Copy & CTA */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cream text-brand-textLight text-sm font-medium mb-6">
                            <span className="text-brand-brown">👋</span> Built for developers, by developers
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text mb-6 leading-[1.1]">
                            Build cool stuff.<br />
                            <span className="text-brand-brown relative">
                                Show it off.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-cream -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h1>
                        
                        <p className="text-lg text-brand-textLight mb-8 leading-relaxed">
                            We know you'd rather be coding than designing a portfolio from scratch. DevFolio is a no-nonsense space to drop your repos, share your side projects, and connect with people who actually understand your tech stack.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-text hover:bg-black text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-black/5">
                                Start your portfolio
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-brand-cream hover:border-brand-brown/30 text-brand-text px-8 py-3.5 rounded-xl font-medium transition-all">
                                Browse projects
                            </button>
                        </div>

                        <div className="mt-10 flex items-center gap-4 text-sm text-brand-textLight font-medium">
                            <span>Join 2,000+ devs already sharing their work</span>
                        </div>
                    </div>

                    {/* Right Column: Visual/Mockup */}
                    <div className="relative lg:ml-auto w-full max-w-lg">
                        {/* Decorative Mock Terminal */}
                        <div className="bg-[#1E1E1E] rounded-2xl shadow-2xl overflow-hidden border border-gray-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center px-4 py-3 bg-[#2D2D2D] border-b border-gray-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="mx-auto text-xs text-gray-400 font-mono flex items-center gap-2">
                                    <Terminal className="w-3 h-3" /> ship-it.sh
                                </div>
                            </div>
                            <div className="p-6 font-mono text-sm text-gray-300 space-y-2">
                                <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> git push origin main</p>
                                <p className="text-gray-500">Enumerating objects: 5, done.</p>
                                <p className="text-gray-500">Counting objects: 100% (5/5), done.</p>
                                <p>Writing objects: 100% (3/3), 324 bytes | 324.00 KiB/s, done.</p>
                                <p className="text-brand-brown mt-4">🚀 Deployed successfully to DevFolio!</p>
                            </div>
                        </div>

                        {/* Floating Project Card */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-5 rounded-2xl shadow-xl border border-brand-cream w-72 transform -rotate-2 hover:rotate-0 transition-transform duration-500 hidden md:block">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-brown">
                                        <Code2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-text text-sm">Payment Gateway</h4>
                                        <p className="text-xs text-brand-textLight">Updated 2h ago</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-brand-textLight mb-4 line-clamp-2">
                                A lightweight, open-source payment processor built with Rust and PostgreSQL.
                            </p>
                            <div className="flex items-center justify-between text-xs font-medium text-brand-textLight">
                                <div className="flex gap-3">
                                    <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 128</span>
                                    <span className="flex items-center gap-1"><GitBranch className="w-3 h-3" /> 14</span>
                                </div>
                                <span className="px-2 py-1 bg-brand-cream rounded-md text-brand-text">Rust</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};