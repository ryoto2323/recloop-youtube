import React, { useState } from 'react';
import { Section } from './Section';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const FAQItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl font-medium text-navy-900 pr-8">{item.question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-persimmon shrink-0" /> : <Plus className="w-5 h-5 text-gray-400 shrink-0" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "本当に5万円以外かからないの？",
      answer: "原則かかりません。モニター価格のため利益度外視です。追加がある場合は交通費など実費のみです。"
    },
    {
      question: "撮影されるのが恥ずかしい / 演技できない…",
      answer: "演技は不要です。普段どおりの業務をしていただき、こちらが見ながら気になった点だけ質問します。答えられる範囲で軽く返すだけで大丈夫です。"
    },
    {
      question: "公開が不安です。",
      answer: "公開前に必ずご確認（校了）いただき、承認なく公開しません。機密・個人情報は撮影せず、必要に応じてモザイク等で安全に編集します。"
    },
    {
      question: "修正はできますか？",
      answer: "初稿提出後、無料で2回対応します（テロップ/BGM/微調整）。大幅な構成変更は別途になります。"
    }
  ];

  return (
    <Section className="bg-paper">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-serif font-bold text-navy-900 mb-12">FAQ</h2>
        <div>
          {faqs.map((faq, idx) => (
            <FAQItemComponent key={idx} item={faq} />
          ))}
        </div>
      </div>
    </Section>
  );
};