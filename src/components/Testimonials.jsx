import React from 'react';
import { FaStar, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const reviews = [
    {
        id: 1,
        name: "Ahmed Khan",
        location: "Lahore, Pakistan",
        rating: 5,
        review: "Muhtessam's photography doesn't just capture moments; it captures emotions. His work on our brand campaign was simply mesmerizing.",
        socials: ['facebook', 'twitter', 'linkedin']
    },
    {
        id: 2,
        name: "Sara Ali",
        location: "Islamabad, Pakistan",
        rating: 5,
        review: "Muhtessam has an incredible talent for making every event feel effortless, and the results speak for themselves. Truly world-class work.",
        socials: ['facebook', 'twitter', 'linkedin']
    },
    {
        id: 3,
        name: "Usman Raza",
        location: "Karachi, Pakistan",
        rating: 5,
        review: "I was blown away by Muhtessam's ability to capture the essence of our wedding day. His photographs are our most cherished memories.",
        socials: ['facebook', 'twitter', 'linkedin']
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <span className="text-accent text-sm uppercase tracking-widest">Testimonials</span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-white mt-2 uppercase">
                            What My Clients Say
                        </h2>
                        <div className="mt-4">
                            <p className="text-sm text-gray-400">Happy Clients</p>
                            <p className="text-2xl font-bold text-white">150+</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-4 border border-white/10 rounded-full hover:bg-white/5 text-white transition">
                            ←
                        </button>
                        <button className="p-4 border border-white/10 rounded-full hover:bg-white/5 text-white transition">
                            →
                        </button>
                        <button className="px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5 text-white text-sm transition">
                            View All Testimonials →
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-darkAccent p-8 rounded-2xl border border-white/5">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-white font-medium">{review.name}</h4>
                                    <p className="text-gray-500 text-sm">{review.location}</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center text-white border border-white/10"><FaFacebookF size={12} /></div>
                                    <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center text-white border border-white/10"><FaTwitter size={12} /></div>
                                    <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center text-white border border-white/10"><FaLinkedinIn size={12} /></div>
                                </div>
                            </div>

                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed text-sm">
                                {review.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
