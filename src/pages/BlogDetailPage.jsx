import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import { useState } from 'react';

const BlogDetailPage = () => {
    const { slug } = useParams();
    const blog = blogPosts.find(p => p.slug === slug);
// useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [slug]);
    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4 uppercase">Blog Not Found</h1>
                    <Link to="/blog" className="text-primary hover:underline uppercase tracking-[0.3em] text-xs font-bold">Return to Journal</Link>
                </div>
            </div>
        );
    }

    const suggestedBlogs = blogPosts
        .filter(p => p.id !== blog.id)
        .slice(0, 3);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${blog.images[0]}')` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    {/* <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary text-xs md:text-sm uppercase tracking-[0.5em] font-bold mb-6"
                    >
                        {blog.date}
                    </motion.p> */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white text-2xl md:text-[38px] font-serif mb-8 tracking-tighter uppercase leading-tight"
                    >
                        {blog.title}
                    </motion.h1>
                </div>
            </section>

            {/* Layout Section: Left Fixed Images, Right Scrolled Content */}
            <section className="container-custom-blog mx-auto  py-24 md:py-32">
                <div className="flex flex-col md:flex-row gap-16 md:gap-4 relative">

                    {/* Left Column - Fixed-like Sticky Images */}
                    <div className="w-full md:w-[35%]">
                        <div className="md:sticky md:top-16 space-y-6">
                            <div className="aspect-4/3 overflow-hidden bg-gray-100">
                                <img src={blog.images[0]} alt="Featured" className="w-full h-full object-cover" />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="aspect-3/2 overflow-hidden bg-gray-100">
                                    <img src={blog.images[1]} alt="Detail 1" className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-3/2 overflow-hidden bg-gray-100">
                                    <img src={blog.images[2]} alt="Detail 2" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Scrollable Content */}
                    <div className="w-full md:w-[65%]">
                        <div className="max-w-187.5 mx-auto">
                            <h2 className="text-xl md:text-2xl font-serif text-black leading-relaxed mb-12 tracking-tight italic border-l-4 border-primary pl-8 py-2">
                                {blog.description}
                            </h2>
                            <div className="space-y-10">
                                {blog.content.map((paragraph, index) => (
                                    <p key={index} className="text-base md:text-[16px] text-black/70 font-light leading-[1.9] tracking-wide">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Author/Share Placeholder */}
                            {/* <div className="mt-20 pt-12 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">GA</div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Written By</p>
                                        <p className="text-xs uppercase tracking-widest text-black font-bold">Grace Aesthetic</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button className="text-[10px] uppercase tracking-widest font-bold text-black/40 hover:text-black transition-colors">Share</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Section: Suggested Blogs */}
            <section className="bg-[#F9F9F8] py-32 px-4">
                <div className="container-custom mx-auto">
                    {/* <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div>
                            <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">Up Next</span>
                            <h3 className="text-3xl md:text-5xl font-serif uppercase tracking-tighter">Journal Suggestions</h3>
                        </div>
                        <Link to="/blog" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-primary pb-1 hover:text-primary transition-all">
                            View All Stories
                        </Link>
                    </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {suggestedBlogs.map((post) => (
                            <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                                <div className="aspect-[500px] overflow-hidden mb-8 bg-white shadow-xl">
                                    <img
                                        src={post.images[0]}
                                        alt={post.title}
                                        className="w-full h-62.5 object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                    />
                                </div>
                                <div className="space-y-4">
                                    {/* <p className="text-primary text-[9px] uppercase tracking-[0.4em] font-bold">{post.date}</p> */}
                                    <h4 className="text-lg md:text-xl font-serif text-black  tracking-tight leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h4>
                                    <h4 className="text-base md:text-[15px] text-black/70 font-light leading-[1.9] tracking-wide">
                                        {post.description}
                                    </h4>
                                    <div className="w-12 h-px bg-black/20 group-hover:w-full group-hover:bg-primary transition-all duration-700"></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailPage;
