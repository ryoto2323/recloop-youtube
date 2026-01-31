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
      console.error('Error fetching address:', error);
    } finally {
      setIsAddressLoading(false);
    }
  };

  useEffect(() => {
    const zip = formData.zip
      .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
      .replace(/[^\d]/g, '');
      
    if (zip.length === 7) {
      searchAddress(zip);
    }
  }, [formData.zip]);

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  
  const getFieldError = (name: string, value: string) => {
    if (!touched[name as keyof typeof touched]) return '';
    if (!value.trim()) return '必須項目です';
    if (name === 'email' && !isValidEmail(value)) return '正しい形式で入力してください';
    return '';
  };

  const isFieldValid = (name: string, value: string) => {
    if (!value.trim()) return false;
    if (name === 'email' && !isValidEmail(value)) return false;
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    // Don't clear focus immediately to allow transitions or clicks on submit
  };

  // Handle focus updates
  const handleFocus = (name: string) => {
    setFocusedField(name);
  }

  // Helper to determine if a field should be highlighted
  // If no field is focused, all are "active" (opacity-100).
  // If a field is focused, only that field is "active".
  const isFieldFocused = (name: string) => {
      return focusedField === null || focusedField === name;
  }

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => {
      const newPurpose = prev.purpose.includes(value)
        ? prev.purpose.filter(p => p !== value)
        : [...prev.purpose, value];
      return { ...prev, purpose: newPurpose };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFocusedField(null); // Reset focus on submit attempt
    
    setTouched({ 
        company: true, 
        industry: true, 
        name: true, 
        email: true, 
        zip: true, 
        address: true, 
        date1: true,
        date2: true, 
        date3: true
    });

    const hasErrors = 
      !formData.company || 
      !formData.industry ||
      !formData.name || 
      !formData.email || !isValidEmail(formData.email) ||
      !formData.address || 
      !formData.date1; // Only date1 is required

    if (!hasErrors) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://formspree.io/f/xnjvbbep", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        });

        setIsSubmitting(false);

        if (response.ok) {
            setShowModal(true);
            setFormData({ 
                company: '', 
                industry: '', 
                name: '', 
                email: '', 
                zip: '', 
                address: '', 
                date1: '', 
                date2: '', 
                date3: '', 
                purpose: [], 
                message: '' 
            });
            setTouched({ 
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
        } else {
            alert("送信に失敗しました。");
        }
      } catch (error) {
        setIsSubmitting(false);
        alert("送信エラーが発生しました。");
      }
    }
  };

  // Clear focus when clicking outside (simple implementation using container click)
  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
        setFocusedField(null);
    }
  }

  return (
    <div id="contact" className="bg-navy-900 text-white relative" onClick={handleContainerClick}>
      <Section className="py-20 md:py-32">
        <div className="text-left md:text-center mb-12 md:mb-20 space-y-6 md:space-y-8">
           <h2 className="text-2xl md:text-5xl font-serif font-bold leading-tight tracking-wide text-center">
             飾らない姿が一番かっこいい<br/>
             御社の<span className="text-persimmon font-hand font-bold text-3xl md:text-6xl mx-1">「現場の熱」</span>を映像に残しませんか？
           </h2>
           <p className="text-gray-300 text-sm md:text-lg max-w-xl mx-auto leading-loose tracking-wide font-medium">
             5万円で、御社の資産となる映像を。<br className="hidden md:block"/>
             この価格で提供できる今のうちに<br className="hidden md:block"/>
             ぜひ一度お試しください。
           </p>
        </div>

        {/* High-End Contract Form */}
        <div className="max-w-3xl mx-auto bg-white text-navy-900 p-8 md:p-16 shadow-2xl relative rounded-sm overflow-hidden transition-all duration-500">
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 bg-[#fdfbf7] pointer-events-none opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-navy-900 z-10"></div>
          
          <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-10 opacity-70">
                  <PenTool size={20} className="text-navy-900" />
                  <h3 className="text-xl font-bold text-center text-navy-900 tracking-widest uppercase">Application Form</h3>
              </div>
              
              <form className="space-y-8 md:space-y-12" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <FormInput 
                    label="会社名 / 店舗名" 
                    name="company" 
                    autoComplete="organization"
                    placeholder="株式会社〇〇" 
                    value={formData.company} 
                    error={getFieldError('company', formData.company)}
                    valid={isFieldValid('company', formData.company)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    isFocused={isFieldFocused('company')}
                  />
                  <FormSelect 
                    label="業種" 
                    name="industry" 
                    options={industryOptions}
                    value={formData.industry} 
                    error={getFieldError('industry', formData.industry)}
                    valid={isFieldValid('industry', formData.industry)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    isFocused={isFieldFocused('industry')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <FormInput 
                        label="ご担当者名" 
                        name="name" 
                        autoComplete="name"
                        placeholder="山田 太郎" 
                        value={formData.name}
                        error={getFieldError('name', formData.name)}
                        valid={isFieldValid('name', formData.name)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        isFocused={isFieldFocused('name')}
                    />
                    <FormInput 
                        label="メールアドレス" 
                        name="email" 
                        type="email" 
                        inputMode="email"
                        autoComplete="email"
                        placeholder="email@example.com" 
                        value={formData.email}
                        error={getFieldError('email', formData.email)}
                        valid={isFieldValid('email', formData.email)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        isFocused={isFieldFocused('email')}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
                   <div className="md:col-span-1">
                     <div className="flex items-end gap-2">
                       <div className="flex-grow relative">
                          <FormInput 
                              label="郵便番号" 
                              name="zip" 
                              inputMode="numeric"
                              autoComplete="postal-code"
                              placeholder="123-4567" 
                              value={formData.zip}
                              error={getFieldError('zip', formData.zip)}
                              valid={isFieldValid('zip', formData.zip)}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              onFocus={handleFocus}
                              isFocused={isFieldFocused('zip')}
                              isLoading={isAddressLoading}
                          />
                       </div>
                     </div>
                   </div>
                   <div className="md:col-span-2">
                     <FormInput 
                        label="住所 / 撮影エリア" 
                        name="address" 
                        autoComplete="street-address"
                        placeholder="東京都渋谷区... (番地まで)" 
                        value={formData.address}
                        error={getFieldError('address', formData.address)}
                        valid={isFieldValid('address', formData.address)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        isFocused={isFieldFocused('address')}
                     />
                   </div>
                </div>

                <div className={`pt-2 transition-all duration-500 ${isFieldFocused('date1') || isFieldFocused('date2') || isFieldFocused('date3') ? 'opacity-100' : 'opacity-40 grayscale-[0.5]'}`}>
                    <label className="block text-sm font-bold text-gray-500 mb-4 flex items-center gap-2">
                        撮影候補日 <span className="text-red-500 text-xs">*</span>
                        <span className="text-xs font-normal text-gray-400 hidden md:inline">（3候補いただけますとスムーズです）</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <FormInput 
                            label="第一希望" 
                            name="date1" 
                            placeholder="例: 10/10 13:00〜" 
                            value={formData.date1}
                            error={getFieldError('date1', formData.date1)}
                            valid={isFieldValid('date1', formData.date1)}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            isFocused={true} // Controlled by parent div opacity
                            required={true}
                        />
                        <FormInput 
                            label="第二希望" 
                            name="date2" 
                            placeholder="例: 10/12 10:00〜" 
                            value={formData.date2}
                            error=""
                            valid={formData.date2.trim() !== ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            isFocused={true} // Controlled by parent div opacity
                            required={false}
                        />
                        <FormInput 
                            label="第三希望" 
                            name="date3" 
                            placeholder="例: 10/15 午後" 
                            value={formData.date3}
                            error=""
                            valid={formData.date3.trim() !== ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            isFocused={true} // Controlled by parent div opacity
                            required={false}
                        />
                    </div>
                </div>

                <div className={`group pt-4 transition-all duration-500 ${isFieldFocused('purpose') ? 'opacity-100' : 'opacity-40 grayscale-[0.5]'}`} onClick={() => handleFocus('purpose')}>
                  <label className="block text-sm font-bold text-gray-500 mb-4">目的 (複数可)</label>
                  <div className="flex flex-wrap gap-4">
                     {['認知拡大', '集客', '採用', '取引先開拓'].map(opt => (
                       <label key={opt} className="flex items-center space-x-3 cursor-pointer group/chk select-none">
                         <div className="relative w-5 h-5 border border-gray-400 flex items-center justify-center transition-all bg-white rounded-sm">
                            <input 
                              type="checkbox" 
                              name="purpose"
                              value={opt}
                              className="peer appearance-none w-full h-full cursor-pointer"
                              checked={formData.purpose.includes(opt)}
                              onChange={() => handleCheckboxChange(opt)}
                              onFocus={() => handleFocus('purpose')}
                            />
                            <div className="w-3 h-3 bg-navy-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></div>
                         </div>
                         <span className="text-sm font-medium text-gray-700">{opt}</span>
                       </label>
                     ))}
                  </div>
                </div>

                <FormTextArea 
                    label="備考・ご質問など"
                    name="message"
                    placeholder="その他、ご要望やご不明点がございましたらご記入ください。"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    isFocused={isFieldFocused('message')}
                    error=""
                    valid={false}
                />

                <div className="pt-8 text-center" onMouseEnter={() => setFocusedField(null)}>
                  <Button 
                    type="submit" 
                    className={`w-full md:w-auto min-w-[300px] text-lg font-bold flex items-center justify-center gap-2 relative overflow-hidden transition-all duration-500 ${isSubmitting ? 'bg-navy-800' : 'bg-navy-900 hover:bg-black'}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '送信中...' : '同意して送信する'}
                  </Button>
                </div>
              </form>
          </div>
        </div>
      </Section>

      {/* Cinematic Stamp Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/90 backdrop-blur-sm p-4 animate-focus-in">
          <div className="bg-white max-w-lg w-full p-8 md:p-12 relative shadow-2xl animate-fade-in-up rounded-sm text-center border-4 border-double border-navy-900">
            
            {/* Stamp Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-red-600 rounded-full flex items-center justify-center opacity-0 animate-stamp z-20 pointer-events-none mix-blend-multiply">
                <div className="text-red-600 font-serif font-bold text-xl tracking-widest border-t border-b border-red-600 py-2 -rotate-12">
                    受付完了
                </div>
            </div>

            <div className="relative z-10 pt-8">
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">お問い合わせ完了</h3>
                <p className="text-gray-600 leading-loose text-sm mb-8">
                    ご確認ありがとうございます。<br/>
                    担当者より24時間以内にご連絡いたします。<br/>
                    今しばらくお待ちください。
                </p>
                <Button onClick={() => setShowModal(false)} variant="outline">
                   閉じる
                </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};