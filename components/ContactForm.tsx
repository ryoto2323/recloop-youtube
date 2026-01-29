import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { MessageCircle, CheckCircle, X } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    area: '',
    date: '',
    purpose: [] as string[],
    message: ''
  });

  const [errors, setErrors] = useState({
    company: '',
    name: '',
    email: '',
    area: '',
    date: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.company.trim()) {
      newErrors.company = '会社名・店舗名は必須です';
      isValid = false;
    } else {
      newErrors.company = '';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'ご担当者名は必須です';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '正しいメールアドレス形式で入力してください';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.area.trim()) {
      newErrors.area = '撮影エリアは必須です';
      isValid = false;
    } else {
      newErrors.area = '';
    }

    if (!formData.date.trim()) {
      newErrors.date = '撮影候補日は必須です（未定の場合は「未定」とご記入ください）';
      isValid = false;
    } else {
      newErrors.date = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

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
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setShowModal(true);
      setFormData({ company: '', name: '', email: '', area: '', date: '', purpose: [], message: '' });
    } else {
      // Shake animation or scroll to error? For now, just focus.
      const firstError = document.querySelector('.error-input');
      if (firstError) {
        (firstError as HTMLElement).focus();
      }
    }
  };

  return (
    <div id="contact" className="bg-navy-900 text-white relative">
      <Section className="py-20 md:py-32">
        {/* Pre-Form CTA Text */}
        <div className="text-center mb-12 md:mb-20 space-y-6 md:space-y-8">
           <h2 className="text-2xl md:text-5xl font-serif font-bold leading-tight tracking-wide">
             飾らない姿が、一番かっこいい。<br className="hidden md:block"/>
             御社の「現場の熱」を、<br className="hidden md:block"/>映像に残しませんか？
           </h2>
           <p className="text-gray-300 text-sm md:text-lg max-w-xl mx-auto leading-loose tracking-wide font-medium">
             上手く話す必要も、盛る必要もありません。<br className="hidden md:block"/>
             いつもどおりの1日が、最強の採用コンテンツであり、営業ツールになります。<br/><br/>
             <span className="text-white border-b border-persimmon pb-1">5万円で、御社の資産となる映像を。</span><br className="hidden md:block"/>
             この価格で提供できる今のうちに、ぜひ一度お試しください。
           </p>
        </div>

        {/* High-End Form */}
        <div className="max-w-3xl mx-auto bg-white text-navy-900 p-6 md:p-16 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy-900 via-persimmon to-navy-900"></div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 text-center text-navy-900">お問い合わせフォーム</h3>
          
          <form className="space-y-8 md:space-y-10" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="group relative">
                <label className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-persimmon transition-colors duration-300">
                  会社名 / 店舗名 <span className="text-red-500 text-xs ml-1">*</span>
                </label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full bg-gray-50 border-b py-3 px-2 focus:outline-none focus:bg-white transition-all duration-300 text-base md:text-lg placeholder-gray-300 relative z-10 ${errors.company ? 'border-red-500 error-input' : 'border-gray-300 focus:border-navy-900'}`} 
                  placeholder="株式会社〇〇" 
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-navy-900 transition-all duration-500 ease-out group-focus-within:w-full ${errors.company ? 'w-full bg-red-500' : 'w-0'}`}></div>
                {errors.company && <p className="text-red-500 text-xs mt-1 absolute">{errors.company}</p>}
              </div>
              
              <div className="group relative">
                <label className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-persimmon transition-colors duration-300">
                  ご担当者名 <span className="text-red-500 text-xs ml-1">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-50 border-b py-3 px-2 focus:outline-none focus:bg-white transition-all duration-300 text-base md:text-lg placeholder-gray-300 relative z-10 ${errors.name ? 'border-red-500 error-input' : 'border-gray-300 focus:border-navy-900'}`} 
                  placeholder="山田 太郎" 
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-navy-900 transition-all duration-500 ease-out group-focus-within:w-full ${errors.name ? 'w-full bg-red-500' : 'w-0'}`}></div>
                {errors.name && <p className="text-red-500 text-xs mt-1 absolute">{errors.name}</p>}
              </div>
            </div>

            <div className="group relative">
              <label className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-persimmon transition-colors duration-300">
                メールアドレス <span className="text-red-500 text-xs ml-1">*</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-gray-50 border-b py-3 px-2 focus:outline-none focus:bg-white transition-all duration-300 text-base md:text-lg placeholder-gray-300 relative z-10 ${errors.email ? 'border-red-500 error-input' : 'border-gray-300 focus:border-navy-900'}`} 
                placeholder="email@example.com" 
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-navy-900 transition-all duration-500 ease-out group-focus-within:w-full ${errors.email ? 'w-full bg-red-500' : 'w-0'}`}></div>
              {errors.email && <p className="text-red-500 text-xs mt-1 absolute">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
               <div className="group relative">
                  <label className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-persimmon transition-colors duration-300">
                    撮影エリア <span className="text-red-500 text-xs ml-1">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border-b py-3 px-2 focus:outline-none focus:bg-white transition-all duration-300 text-base md:text-lg placeholder-gray-300 relative z-10 ${errors.area ? 'border-red-500 error-input' : 'border-gray-300 focus:border-navy-900'}`} 
                    placeholder="都道府県" 
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-navy-900 transition-all duration-500 ease-out group-focus-within:w-full ${errors.area ? 'w-full bg-red-500' : 'w-0'}`}></div>
                  {errors.area && <p className="text-red-500 text-xs mt-1 absolute">{errors.area}</p>}
               </div>
               <div className="group relative">
                  <label className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-persimmon transition-colors duration-300">
                    撮影候補日 <span className="text-red-500 text-xs ml-1">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border-b py-3 px-2 focus:outline-none focus:bg-white transition-all duration-300 text-base md:text-lg placeholder-gray-300 relative z-10 ${errors.date ? 'border-red-500 error-input' : 'border-gray-300 focus:border-navy-900'}`} 
                    placeholder="例: 10/10, 10/15など" 
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-navy-900 transition-all duration-500 ease-out group-focus-within:w-full ${errors.date ? 'w-full bg-red-500' : 'w-0'}`}></div>
                  {errors.date && <p className="text-red-500 text-xs mt-1 absolute">{errors.date}</p>}
               </div>
            </div>

            <div className="group">
              <label className="block text-sm font-bold text-gray-500 mb-4 group-focus-within:text-persimmon transition-colors duration-300">目的 (複数可)</label>
              <div className="flex flex-wrap gap-4 md:gap-6">
                 {['認知拡大', '集客', '採用', '取引先開拓'].map(opt => (
                   <label key={opt} className="flex items-center space-x-3 cursor-pointer group/chk select-none">
                     <div className="relative w-6 h-6 border-2 border-gray-300 flex items-center justify-center transition-all duration-300 group-hover/chk:border-navy-900 bg-white group-hover/chk:shadow-md">
                        <input 
                          type="checkbox" 
                          className="peer appearance-none w-full h-full cursor-pointer"
                          checked={formData.purpose.includes(opt)}
                          onChange={() => handleCheckboxChange(opt)}
                        />
                        <div className="w-3 h-3 bg-navy-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></div>
                     </div>
                     <span className="text-sm md:text-base font-medium text-gray-700 group-hover/chk:text-navy-900 transition-colors">{opt}</span>
                   </label>
                 ))}
              </div>
            </div>

            <div className="group relative">
               <label className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-persimmon transition-colors duration-300">備考</label>
               <textarea 
                 rows={3} 
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 className="w-full bg-gray-50 border border-gray-300 p-4 focus:outline-none focus:border-navy-900 focus:bg-white transition-all duration-300 resize-none text-base relative z-10" 
                 placeholder="ご質問などあればお書きください"
               ></textarea>
               <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900 transition-all duration-500 ease-out group-focus-within:w-full"></div>
               {/* Corner accent for textarea */}
               <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-200 group-focus-within:border-persimmon transition-colors duration-300"></div>
            </div>

            <div className="pt-8 text-center space-y-8">
              <div>
                  <Button type="submit" className="w-full md:w-auto min-w-[300px] text-lg font-bold" glow disabled={isSubmitting}>
                    {isSubmitting ? '送信中...' : '送信する'}
                  </Button>
                  <p className="text-xs text-gray-400 mt-6 tracking-wide font-medium">
                    先着5社/月 | 所要1分 | 相談のみOK
                  </p>
              </div>

              {/* LINE CTA for Contact Form */}
              <div className="border-t border-gray-100 pt-8 mt-8">
                  <p className="text-sm font-bold text-gray-500 mb-4">フォーム入力が面倒な方はこちら</p>
                  <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white py-4 px-8 font-bold hover:opacity-90 transition-opacity rounded-sm shadow-md w-full md:w-auto min-w-[300px]">
                      <MessageCircle size={20} fill="currentColor" />
                      <span>LINEで気軽に相談する</span>
                  </a>
              </div>
            </div>
          </form>
        </div>
      </Section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/80 backdrop-blur-sm p-4 animate-focus-in">
          <div className="bg-white max-w-lg w-full p-8 md:p-12 relative shadow-2xl animate-fade-in-up">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-navy-900 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-900">
                送信完了
              </h3>
              <p className="text-gray-600 leading-loose text-sm md:text-base">
                お問い合わせありがとうございます。<br/>
                内容を確認の上、担当者より24時間以内に<br/>
                メールにてご連絡させていただきます。
              </p>
              <div className="pt-6">
                 <Button onClick={() => setShowModal(false)} variant="outline" className="min-w-[200px]">
                   閉じる
                 </Button>
              </div>
            </div>
            
            {/* Decorative Corner */}
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-navy-900 opacity-10"></div>
          </div>
        </div>
      )}
    </div>
  );
};