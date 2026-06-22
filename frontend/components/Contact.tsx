import React, { useState, useCallback } from 'react';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    }, []);

    return (
        <section id="contact" className="py-24 bg-brand-cream/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-sm border border-brand-cream overflow-hidden flex flex-col md:flex-row">
                    
                    {/* Info Side */}
                    <div className="bg-brand-brown p-10 md:w-2/5 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-brand-cream/90 mb-8">
                                Have a question or want to partner with us? Drop us a message and we'll get back to you shortly.
                            </p>
                        </div>
                        <div className="space-y-4 text-brand-cream/90">
                            <p>hello@devfolio.network</p>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-10 md:w-3/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-brand-cream/50 border-transparent focus:border-brand-brown focus:bg-white focus:ring-0 transition-colors outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-brand-cream/50 border-transparent focus:border-brand-brown focus:bg-white focus:ring-0 transition-colors outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-brand-cream/50 border-transparent focus:border-brand-brown focus:bg-white focus:ring-0 transition-colors outline-none resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className="w-full flex items-center justify-center gap-2 bg-brand-text hover:bg-black text-white px-6 py-4 rounded-xl font-medium transition-colors disabled:opacity-70"
                            >
                                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                                {status === 'idle' && <Send className="w-4 h-4" />}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};