import React from 'react';

const Input = ({
  label,
  type = 'text',
  name,        // ← ADICIONAMOS ESTA LINHA!
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  id
}) => {
  
  // Gerar ID único se não for fornecido
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  // Estilos base do input
  const baseStyles = `
    w-full px-3 py-2 border rounded-lg text-gray-900 placeholder-gray-500 
    focus:outline-none focus:ring-2 transition-colors duration-200
    disabled:bg-gray-100 disabled:cursor-not-allowed
  `;
  
  // Estilos baseados no estado (normal ou erro)
  const stateStyles = error 
    ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';
  
  // Combinar estilos
  const inputClasses = `${baseStyles} ${stateStyles}`.trim();
  
  return (
    <div className="space-y-1">
      {/* Label do input */}
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {/* Campo de input */}
      <input
        id={inputId}
        name={name}        // ← ADICIONAMOS ESTA LINHA!
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={inputClasses}
      />
      
      {/* Mensagem de erro */}
      {error && (
        <p className="text-sm text-red-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;