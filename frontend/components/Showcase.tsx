import React from 'react';
import { MOCK_DEVELOPERS } from '../constants';
import { ExternalLink, FolderGit2 } from 'lucide-react';

export const Showcase: React.FC = () => {
    // Flatten projects for the showcase view
    const allProjects = MOCK_DEVELOPERS.flatMap(dev => 
        dev.projects.map(proj => ({ ...proj, developer: dev }))
    );

    return (
        <section id="showcase" className="py-24 bg-brand-cream/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Featured Projects</h2>
                        <p className="text-brand-textLight text-lg">
                            Explore exceptional work from our community of developers. Discover new technologies and innovative solutions.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-brand-brown font-medium hover:text-brand-brownDark transition-colors">
                        View all projects <ExternalLink className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project) => (
                        <div key={project.id} className="group bg-white rounded-2xl overflow-hidden border border-brand-cream hover:shadow-xl hover:shadow-brand-brown/5 transition-all duration-300 flex flex-col">
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-brand-cream">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <img 
                                        src={project.developer.avatarUrl} 
                                        alt={project.developer.name} 
                                        className="w-8 h-8 rounded-full border border-brand-cream"
                                    />
                                    <span className="text-sm font-medium text-brand-textLight">{project.developer.name}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-brown transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-brand-textLight text-sm mb-6 flex-grow line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags & Action */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-cream">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-brand-cream text-brand-textLight rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 2 && (
                                            <span className="text-xs font-medium px-2.5 py-1 bg-brand-cream text-brand-textLight rounded-md">
                                                +{project.tags.length - 2}
                                            </span>
                                        )}
                                    </div>
                                    <a href={project.link} className="text-brand-brown hover:text-brand-brownDark p-2 rounded-full hover:bg-brand-cream transition-colors">
                                        <FolderGit2 className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};