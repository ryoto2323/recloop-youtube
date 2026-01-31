import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { CheckCircle, X, Loader2, AlertCircle, Search, Video, PenTool, ChevronDown } from 'lucide-react';

// Input Component
interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  inputMode?: "text" | "numeric" | "tel" | "search" | "email" | "url" | "decimal" | "none";
  autoComplete?: string;
  placeholder: string;
  value: string;
  error?: string;
  valid?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onFocus: (name: string) => void;
  isFocused: boolean;
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
        className={`group relative w-full transition-all duration-500 ${isFocused ? 'opacity-100 scale-[1.01]' : 'opacity-80'}`}
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
        <div className={`group relative w-full transition-all duration-500 ${isFocused ? 'opacity-100 scale-[1.01]' : 'opacity-80'}`}>
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
        <div className={`group relative w-full transition-all duration-500 ${isFocused ? 'opacity-100 scale-[1.01]' : 'opacity-80'}`}>
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
    phone: '',
    zip: '', 
    address: '', 
    date1: '', 
    date2: '', 
    date3: '', 
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
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

  const validate = (name: string, value: string) => {
      let error = "";
      if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "正しいメールアドレスを入力してください";
      }
      if (name === "phone" && value && !/^[0-9-]{10,13}$/.test(value)) {
          error = "電話番号を正しく入力してください";
      }
      if (name === "zip" && value && !/^\d{7}$/.test(value.replace(/-/g, ''))) {
          error = "郵便番号は7桁で入力してください";
      }
      if (!value && ["company", "industry", "name", "email", "phone"].includes(name)) {
          error = "必須項目です";
      }
      return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-search address on zip change
    if (name === 'zip' && value.replace(/-/g, '').length === 7) {
        searchAddress(value);
    }

    if (touched[name]) {
        setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    setFocusedField(null);
  };

  const handleFocus = (name: string) => {
    setFocusedField(name);
  };

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
        setErrors(prev => ({ ...prev, address: "" })); // Clear address error if any
      } else {
        setErrors(prev => ({ ...prev, zip: "住所が見つかりませんでした" }));
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setErrors(prev => ({ ...prev, zip: "住所検索に失敗しました" }));
    } finally {
      setIsAddressLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
        const error = validate(key, (formData as any)[key]);
        if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setTouched(Object.keys(formData).reduce((acc, key) => ({...acc, [key]: true}), {}));
        const firstErrorField = document.querySelector(`[name="${Object.keys(newErrors)[0]}"]`);
        firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    setIsSubmitting(true);
    
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowModal(true);
    setFormData({
        company: '', industry: '', name: '', email: '', phone: '', zip: '', address: '', date1: '', date2: '', date3: '', message: ''
    });
    setTouched({});
  };

  return (
    <Section id="contact" className="bg-white relative">
       {/* Background Decoration */}
       <div className="hidden md:block absolute top-0 right-10 h-full writing-vertical-rl text-[120px] font-serif font-bold text-gray-100 select-none pointer-events-none z-0">
         お問い合わせ
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-900 mb-4 break-keep">お問い合わせ・空き日程確認</h2>
          <p className="text-gray-600 leading-relaxed break-keep">
             毎月5社限定のため、まずは日程の確保を<br />
             お願いいたします。<br />
             無理な営業は一切いたしませんので<br />
             ご安心ください。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12 bg-white md:p-12">
            {/* Group 1: Basic Info */}
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormInput 
                        label="会社名" 
                        name="company" 
                        placeholder="株式会社〇〇" 
                        value={formData.company} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        isFocused={focusedField === 'company'}
                        error={errors.company}
                        valid={touched.company && !errors.company}
                    />
                    <FormSelect
                        label="業種"
                        name="industry"
                        value={formData.industry}
                        options={industryOptions}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        isFocused={focusedField === 'industry'}
                        error={errors.industry}
                        valid={touched.industry && !errors.industry}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormInput 
                        label="担当者名" 
                        name="name" 
                        placeholder="山田 太郎" 
                        value={formData.name} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        isFocused={focusedField === 'name'}
                        error={errors.name}
                        valid={touched.name && !errors.name}
                    />
                     <FormInput 
                        label="電話番号" 
                        name="phone" 
                        type="tel"
                        inputMode="tel"
                        placeholder="090-1234-5678" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        isFocused={focusedField === 'phone'}
                        error={errors.phone}
                        valid={touched.phone && !errors.phone}
                    />
                </div>

                <FormInput 
                    label="メールアドレス" 
                    name="email" 
                    type="email"
                    inputMode="email"
                    placeholder="example@company.co.jp" 
                    value={formData.email} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    isFocused={focusedField === 'email'}
                    error={errors.email}
                    valid={touched.email && !errors.email}
                />
            </div>

            {/* Group 2: Address (Auto Search) */}
            <div className="space-y-8 border-t border-gray-100 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                     <div className="md:col-span-1">
                        <FormInput 
                            label="郵便番号" 
                            name="zip" 
                            inputMode="numeric"
                            placeholder="123-4567" 
                            value={formData.zip} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            isFocused={focusedField === 'zip'}
                            error={errors.zip}
                            valid={touched.zip && !errors.zip}
                            isLoading={isAddressLoading}
                            required={false}
                        />
                     </div>
                     <div className="md:col-span-2">
                        <FormInput 
                            label="住所" 
                            name="address" 
                            placeholder="東京都..." 
                            value={formData.address} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            isFocused={focusedField === 'address'}
                            error={errors.address}
                            valid={touched.address && !errors.address}
                            required={false}
                        />
                     </div>
                </div>
            </div>

            {/* Group 3: Dates */}
            <div className="space-y-6 border-t border-gray-100 pt-8">
                <label className="block text-sm font-bold text-navy-900 mb-2">
                    撮影希望日候補 <span className="text-gray-400 text-xs ml-2 font-normal">※3つほど挙げていただけるとスムーズです</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input 
                        type="datetime-local" 
                        name="date1"
                        value={formData.date1}
                        onChange={handleChange}
                        className="w-full bg-paper border-b-2 border-gray-300 focus:border-navy-900 py-3 px-2 focus:outline-none transition-colors"
                    />
                    <input 
                        type="datetime-local" 
                        name="date2"
                        value={formData.date2}
                        onChange={handleChange}
                        className="w-full bg-paper border-b-2 border-gray-300 focus:border-navy-900 py-3 px-2 focus:outline-none transition-colors"
                    />
                    <input 
                        type="datetime-local" 
                        name="date3"
                        value={formData.date3}
                        onChange={handleChange}
                        className="w-full bg-paper border-b-2 border-gray-300 focus:border-navy-900 py-3 px-2 focus:outline-none transition-colors"
                    />
                </div>
            </div>

            {/* Group 4: Message */}
            <div className="border-t border-gray-100 pt-8">
                <FormTextArea
                    label="その他・ご質問など"
                    name="message"
                    placeholder="ご自由にご記入ください"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    isFocused={focusedField === 'message'}
                />
            </div>
            
            <div className="pt-8 text-center">
                <Button 
                    type="submit" 
                    variant="rec" 
                    className="w-full md:w-1/2 py-5 text-lg shadow-xl"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <Loader2 className="animate-spin" /> 送信中...
                        </span>
                    ) : (
                        "空き日程を確認する (送信)"
                    )}
                </Button>
                <p className="text-xs text-gray-500 mt-4">
                    ※ 送信時点では予約は確定しません。<br/>
                    担当者より24時間以内にご連絡いたします。
                </p>
            </div>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] h-[100dvh] w-screen flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-focus-in">
            <div className="bg-white p-8 md:p-12 max-w-lg w-full shadow-2xl relative text-center border-t-4 border-persimmon">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">送信完了しました</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    お問い合わせありがとうございます。<br/>
                    ご入力いただいた内容を確認の上、<br/>
                    <span className="font-bold text-navy-900">24時間以内</span>に担当者よりご連絡いたします。
                </p>
                <Button onClick={() => setShowModal(false)} variant="primary" className="w-full">
                    閉じる
                </Button>
            </div>
        </div>
      )}
    </Section>
  );
};