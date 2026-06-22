import React from 'react';
import { MOCK_DEVELOPERS } from '../constants';
import { MapPin, Briefcase } from 'lucide-react';

export const Network: React.FC = () => {
    return (
        <section id="network" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Connect with Talent</h2>
                    <p className="text-brand-textLight text-lg">
                        Build your professional network. Find collaborators for your next big idea or discover top talent for your team.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_DEVELOPERS.map((dev) => (
                        <div key={dev.id} className="bg-brand-white border border-brand-cream rounded-2xl p-6 hover:border-brand-brown/30 transition-colors">
                            <div className="flex items-start gap-4 mb-6">
                                <img 
                                    src={dev.avatarUrl} 
                                    alt={dev.name} 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-cream"
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-brand-text">{dev.name}</h3>
                                    <div className="flex items-center gap-1 text-brand-brown text-sm font-medium mt-1">
                                        <Briefcase className="w-4 h-4" />
                                        {dev.role}
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-brand-textLight text-sm mb-6 line-clamp-3">
                                {dev.bio}
                            </p>

                            <div className="space-y-3">
                                <h4 className="text-xs font-semibold text-brand-text uppercase tracking-wider">Top Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {dev.skills.map(skill => (
                                        <span key={skill} className="text-xs px-3 py-1.5 bg-brand-cream text-brand-text rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full mt-8 py-2.5 border border-brand-cream text-brand-text font-medium rounded-xl hover:bg-brand-cream hover:text-brand-brown transition-colors">
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};