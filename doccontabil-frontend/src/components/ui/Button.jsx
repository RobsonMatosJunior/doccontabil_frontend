import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false 
}) => {
  
  // Estilos base do botão (essa linha estava faltando!)
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-lg 
    transition-all duration-200 focus:outline-none focus:ring-2 
    focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-95
  `;
  
  // Estilos por variante (cor)
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
  };
  
  // Estilos por tamanho
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  // Combinar todos os estilos
  const buttonClasses = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]}
  `.trim();
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
      )}
      {children}
    </button>
  );
};

export default Button;