import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { CheckCircle, X, Loader2, AlertCircle, Search, Video, PenTool, ChevronDown } from 'lucide-react';

// Focus Context Logic
// We pass focus state down to inputs

// Input Component
interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  inputMode?: "text" | "numeric" | "tel" | "search" | "email" | "url" | "decimal" | "none";
  autoComplete?: string;
  placeholder: string;
  value: string;
  error: string;
  valid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onFocus: (name: string) => void; // Added onFocus prop
  isFocused: boolean; // Added isFocused prop
  className?: string;
  isLoading?: boolean;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ 
  label, 
  name, 
  type = "text", 
  inputMode,
  autoComplete,
  placeholder, 
  value,
  error,
  valid,
  onChange,
  onBlur,
  onFocus,
  isFocused,
  className = "",
  isLoading = false,
  required = true
}) => {
  return (
    <div 
        className={`group relative w-full transition-all duration-500 ${isFocused ? 'opacity-100 scale-[1.01]' : 'opacity-40 grayscale-[0.5]'}`}
    >
      <label className={`block text-sm font-bold mb-2 transition-colors duration-300 flex items-center justify-between ${error ? 'text-red-500' : 'text-gray-500 group-focus-within:text-navy-900'}`}>
        <span className="flex items-center gap-2">
            {label} {required && <span className="text-red-500 text-xs">*</span>}
        </span>
      </label>
      
      <div className="relative">
        <input 
          type={type} 
          name={name}
          inputMode={inputMode}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={() => onFocus(name)}
          className={`w-full bg-transparent border-b-2 py-3 px-2 pr-10 focus:outline-none transition-all duration-300 text-base md:text-lg placeholder-gray-300 relative z-10 font-serif
            ${error ? 'border-red-500 bg-red-50/50' : 'border-gray-300 focus:border-navy-900'}
            ${valid ? 'bg-green-50/20' : ''}
            ${className}
          `} 
          placeholder={placeholder} 
        />
        
        {/* Fountain Pen Effect Line */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-navy-900 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-20 ${error ? 'bg-red-500 w-full' : 'w-0 group-focus-within:w-full'}`}></div>
        
        <div className="absolute right-2 top-3 pointer-events-none z-20">
           {isLoading && <Loader2 className="text-gray-400 animate-spin" size={20} />}
           {!isLoading && valid && <CheckCircle className="text-green-800/50 animate-check-pop" size={20} />}
           {!isLoading && error && <AlertCircle className="text-red-500 animate-pulse" size={20} />}
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ${error ? 'max-h-10 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
         <p className="text-red-500 text-xs flex items-center"><AlertCircle size={10} className="mr-1"/>{error}</p>
      </div>
    </div>
  );
};

// Select Component
interface FormSelectProps extends FormInputProps {
    options: string[];
}

const FormSelect: React.FC<FormSelectProps> = ({
    label,
    name,
    value,
    options,
    error,
    valid,
    onChange,
    onBlur,
    onFocus,
    isFocused,
    required = true
}) => {
    return (
        <div className={`group relative w-full transition-all duration-500 ${isFocused ? 'opacity-100 scale-[1.01]' : 'opacity-40 grayscale-[0.5]'}`}>
            <label className={`block text-sm font-bold mb-2 transition-colors duration-300 flex items-center justify-between ${error ? 'text-red-500' : 'text-gray-500 group-focus-within:text-navy-900'}`}>
                <span className="flex items-center gap-2">
                    {label} {required && <span className="text-red-500 text-xs">*</span>}
                </span>
            </label>
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={() => onFocus(name)}
                    className={`w-full bg-transparent border-b-2 py-3 px-2 pr-10 focus:outline-none transition-all duration-300 text-base md:text-lg appearance-none relative z-10 font-serif cursor-pointer
                        ${error ? 'border-red-500 bg-red-50/50' : 'border-gray-300 focus:border-navy-900'}
                        ${valid ? 'bg-green-50/20' : ''}
                        ${!value ? 'text-gray-300' : 'text-navy-900'}
                    `}
                >
                    <option value="" disabled>選択してください</option>
                    {options.map(opt => (
                        <option key={opt} value={opt} className="text-navy-900">{opt}</option>
                    ))}
                </select>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-navy-900 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-20 ${error ? 'bg-red-500 w-full' : 'w-0 group-focus-within:w-full'}`}></div>
                <div className="absolute right-2 top-4 pointer-events-none z-20 text-gray-400">
                    <ChevronDown size={20} />
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${error ? 'max-h-10 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                <p className="text-red-500 text-xs flex items-center"><AlertCircle size={10} className="mr-1"/>{error}</p>
            </div>
        </div>
    );
};

// Textarea Component
const FormTextArea: React.FC<FormInputProps> = ({
    label,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    onFocus,
    isFocused,
    required = false
}) => {
    return (
        <div className={`group relative w-full transition-all duration-500 ${isFocused ? 'opacity-100 scale-[1.01]' : 'opacity-40 grayscale-[0.5]'}`}>
            <label className="block text-sm font-bold mb-2 text-gray-500 group-focus-within:text-navy-900 transition-colors duration-300">
                {label} {!required && <span className="text-gray-300 text-xs ml-1">(任意)</span>}
            </label>
            <div className="relative">
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={() => onFocus(name)}
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-gray-300 focus:border-navy-900 py-3 px-2 focus:outline-none transition-all duration-300 text-base md:text-lg placeholder-gray-300 font-serif resize-none"
                    placeholder={placeholder}
                />
                <div className="absolute bottom-1 left-0 h-0.5 bg-navy-900 w-0 group-focus-within:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-20"></div>
            </div>
        </div>
    );
}


export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    industry: '', 
    name: '',
    email: '',
    zip: '', 
    address: '', 
    date1: '', // Changed from date to date1
    date2: '', // Added
    date3: '', // Added
    purpose: [] as string[],
    message: ''
  });

  const [touched, setTouched] = useState({
    company: false,
    industry: false,
    name: false,
    email: false,
    zip: false,
    address: false,
    date1: false,
    date2: false,
    date3: false
  });

  // Track the currently focused field for "Spotlight" mode
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAddressLoading, setIsAddressLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const industryOptions = [
      "建設・建築",
      "製造・工場",
      "飲食・サービス",
      "美容・サロン",
      "医療・介護",
      "不動産",
      "IT・通信",
      "物流・運送",
      "その他"
  ];

  // Address Search Logic
  const searchAddress = async (inputZip: string) => {
    const zip = inputZip
      .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
      .replace(/[^\d]/g, '');
      
    if (zip.length !== 7) return;

    setIsAddressLoading(true);
    
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`);
      const data = await response.json();
      
      if (data.results && data.results[0]) {
        const result = data.results[0];
        const fullAddress = `${result.address1}${result.address2}${result.address3}`;
        setFormData(prev => ({
          ...prev,
          address: fullAddress,
        }));
        setTouched(prev => ({ ...prev, address: true }));
      }
    } catch (error) {
      console.error('Error fetching address:',