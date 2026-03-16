import React from 'react';

export const Container = ({ children, className = '', size = 'xl' }) => {
    const sizes = {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full'
    };

    return (
        <div className={`mx-auto px-4 sm:px-6 lg:px-10 ${sizes[size] || sizes.xl} ${className}`}>
            {children}
        </div>
    );
};

export const Section = ({
    children,
    className = '',
    id = '',
    variant = 'light',
    padding = 'lg'
}) => {
    const variants = {
        light: 'bg-[#F8F5F0] text-luxury-dark',
        dark: 'bg-luxury-dark text-white',
        white: 'bg-white text-luxury-dark',
        beige: 'bg-[#EBE9E0] text-luxury-dark',
        form: 'bg-[#D6D2C4] text-luxury-dark'
    };

    const paddings = {
        none: 'py-0',
        sm: 'py-10 md:py-16',
        md: 'py-16 md:py-24',
        lg: 'py-24 md:py-32',
        xl: 'py-32 md:py-48'
    };

    return (
        <section
            id={id}
            className={`${variants[variant] || variants.light} ${paddings[padding] || paddings.lg} ${className}`}
        >
            {children}
        </section>
    );
};

export const Grid = ({
    children,
    cols = 3,
    gap = 8,
    className = ''
}) => {
    const colMap = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    };

    const gapMap = {
        4: 'gap-4',
        6: 'gap-4 md:gap-6',
        8: 'gap-6 md:gap-8',
        10: 'gap-10',
        12: 'gap-12',
    };

    return (
        <div className={`grid ${colMap[cols] || colMap[3]} ${gapMap[gap] || gapMap[8]} ${className}`}>
            {children}
        </div>
    );
};
