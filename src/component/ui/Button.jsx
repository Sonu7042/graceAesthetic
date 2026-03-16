import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    loading = false,
    disabled = false,
    icon: Icon,
    iconPosition = 'left',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 uppercase tracking-[0.15em] text-[10px]";

    const variants = {
        primary: "bg-[#0D2B24] text-white hover:bg-[#153a31] shadow-md",
        secondary: "bg-white text-luxury-dark border border-luxury-dark/10 hover:bg-luxury-light",
        outline: "border border-[#0D2B24] text-[#0D2B24] hover:bg-[#0D2B24] hover:text-white",
        gold: "bg-primary text-white hover:bg-primary/90",
    };

    const sizes = {
        sm: "px-5 py-2",
        md: "px-8 py-3.5 rounded-full",
        lg: "px-10 py-4 rounded-full text-xs",
    };

    const currentVariant = variants[variant] || variants.primary;
    const currentSize = sizes[size] || sizes.md;

    return (
        <button
            className={`${baseStyles} ${currentVariant} ${currentSize} ${className}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}

            {!loading && Icon && iconPosition === 'left' && <Icon className="mr-2 h-4 w-4" />}
            <span className="flex items-center gap-2">
                {variant === 'primary' && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                {children}
            </span>
            {!loading && Icon && iconPosition === 'right' && <Icon className="ml-2 h-4 w-4" />}
        </button>
    );
};

export default Button;
