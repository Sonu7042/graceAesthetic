import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../assets/blogouterimg/blog_hero.jpg';
import { blogPosts } from '../data/blogData';

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    // Calculate pagination
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogPosts.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(blogPosts.length / blogsPerPage);

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="bg-[#EFEFEE] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2s] hover:scale-105"
                    style={{
                        backgroundImage: `url('${heroImg}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    {/* <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary text-xs md:text-sm uppercase tracking-[0.5em] font-bold mb-6 block"
                    >
                        Journal
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white text-4xl md:text-7xl font-serif mb-8 tracking-tighter uppercase leading-none"
                    >
                        Graceful <br /> Landscapes
                    </motion.h1> */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white text-2xl md:text-[38px] font-serif mb-8 tracking-tighter uppercase leading-tight"
                    >
                        Explore our collection of insights on architecture, nature, and the pursuit of a beautiful way to live.
                    </motion.p>
                </div>
            </section>

            {/* Banner Section */}
            <section className="bg-black py-15 px-4 overflow-hidden border-b border-white/5">
                <div className="container-custom mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-white text-[10px] md:text-xs uppercase tracking-[0.6em] font-light mb-4 text-white/40">
                            Over 20 years of craftsmanship
                        </p>
                        {/* <h2 className="text-white text-xl md:text-3xl font-serif uppercase tracking-widest">
                            Crafting <span className="text-primary italic">Timeless Homes</span> in Green Destinations
                        </h2> */}
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-32 px-4 bg-white">
                <div className="container-custom mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
                    >
                        <AnimatePresence mode="wait">
                            {currentBlogs.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="group"
                                >
                                    <Link to={`/blog/${post.slug}`} className="block overflow-hidden relative">
                                        <div className="aspect-[16/10] overflow-hidden mb-10 bg-gray-100 relative">
                                            <img
                                                src={post.images[0]}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <span className="text-[8px] uppercase tracking-widest font-bold text-black">Read More</span>
                                        </div>
                                    </Link>
                                    <div className="space-y-4 px-1 flex flex-col items-start text-left">
                                        {/* <span className="text-[9px] md:text-[10px] text-primary uppercase tracking-[0.4em] font-bold">
                                            {post.date}
                                        </span> */}
                                        <Link to={`/blog/${post.slug}`}>
                                            <h3 className="text-xl md:text-[18px] font-serif text-black leading-[1.2] tracking-tight hover:text-primary transition-colors ">
                                                {post.title}
                                            </h3>
                                        </Link>
                                        <p className="text-sm md:text-base text-black/50 leading-[1.7] line-clamp-2 font-light tracking-wide">
                                            {post.description}
                                        </p>
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="text-[10px] uppercase tracking-[0.3em] font-bold text-black border-b border-black pb-1 mt-4 hover:text-primary hover:border-primary transition-all"
                                        >
                                            {/* Read Story */}
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-10 flex justify-center items-center gap-8 border-t border-gray-100 ">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-colors ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-primary'
                                    }`}
                            >
                                Prev
                            </button>

                            <div className="flex gap-10">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => handlePageChange(num)}
                                        className={`text-xs font-bold tracking-widest transition-all duration-400 relative ${num === currentPage
                                            ? 'text-primary'
                                            : 'text-black/30 hover:text-black font-medium'
                                            }`}
                                    >
                                        {num === currentPage && (
                                            <motion.span
                                                layoutId="pagination-line"
                                                className="absolute -bottom-2 left-0 w-full h-px bg-primary"
                                            />
                                        )}
                                        0{num}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-colors ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:text-primary'
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BlogPage;

