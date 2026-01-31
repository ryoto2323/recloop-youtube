import React, { useState } from 'react';
import { Section } from './Section';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

const FAQItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-5 md:py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-lg font-bold text-navy-900 pr-8 leading-relaxed group-hover:text-persimmon transition-colors">
            {item.question}
        </span>
        {isOpen ? (
            <Minus className="w-5 h-5 text-persimmon shrink-0" />
        ) : (
            <Plus className="w-5 h-5 text-gray-400 shrink-0 group-hover:text-persimmon transition-colors" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-700 text-sm md:text-base leading-loose">
            {item.answer.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                    {line}
                    {i < item.answer.split('\n').length - 1 && <br />}
                </React.Fragment>
            ))}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const faqs: FAQItem[] = [
    {
      question: "本当に5万円以外かからないの？",
      answer: "原則かかりません。モニター価格のため利益度外視です。\n追加がある場合は交通費などの実費のみです。"
    },
    {
      question: "支払い・振込のタイミングは？",
      answer: "撮影日の3営業日前（土日祝除く）までにお振込をお願いします。\n※スタッフ確保のため、期日までにご入金がない場合は自動キャンセルとなりますのでご注意ください。"
    },
    {
      question: "キャンセル料はかかりますか？",
      answer: "ご入金後の返金は、撮影4営業日前まで可能です。\nそれ以降（3営業日前〜当日）のキャンセルは返金できませんが、撮影2日前までなら無料で「日程変更」が可能ですのでご安心ください。"
    },
    {
      question: "撮影されるのが恥ずかしい / 演技できない…",
      answer: "演技は不要です。普段どおりの業務をしていただき、こちらが見ながら気になった点だけ質問します。答えられる範囲で軽く返すだけで大丈夫です。"
    },
    {
      question: "公開が不安です。",
      answer: "公開前に必ずご確認（校了）いただき、承認なく公開しません。\n機密・個人情報は撮影せず、必要に応じてモザイク等で安全に編集します。"
    },
    {
      question: "納品された動画は、自社のYouTubeやHPに使えますか？",
      answer: "はい、ご自由にお使いください。「無期限・無制限」で二次利用OKですので、自社サイト、SNS、採用媒体、営業資料など、あらゆる場面でご活用いただけます。"
    },
    {
      question: "対応エリアはどこですか？",
      answer: "全国対応可能です。\n遠方の場合は別途交通費（実費）をご負担いただく場合がありますが、まずはご相談ください。"
    },
    {
      question: "撮影当日の準備は何が必要ですか？",
      answer: "特別な準備は一切不要です。いつもの業務をしていただくだけで構いません。「ありのまま」を撮影するため、掃除や片付けも無理にしなくて大丈夫です。"
    },
    {
      question: "修正はできますか？",
      answer: "初稿提出後、無料で2回対応します（テロップ/BGM/微調整）。大幅な構成変更は別途になります。"
    }
  ];

  // Logic to show limited items initially
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <Section id="faq" className="bg-paper">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900">FAQ</h2>
            <p className="text-gray-500 text-sm mt-2 font-medium tracking-wider">よくある質問</p>
        </div>
        
        {/* Desktop: 2 Columns, Mobile: 1 Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-0 items-start">
          {displayedFaqs.map((faq, idx) => (
            <FAQItemComponent key={idx} item={faq} />
          ))}
        </div>

        {!showAll && (
            <div className="mt-12 text-center">
                <button 
                    onClick={() => setShowAll(true)}
                    className="group inline-flex items-center gap-2 text-navy-900 font-bold tracking-widest border-b-2 border-navy-900 pb-1 hover:text-persimmon hover:border-persimmon transition-colors"
                >
                    もっと見る
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        )}
      </div>
    </Section>
  );
};