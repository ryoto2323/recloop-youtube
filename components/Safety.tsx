import React from 'react';
import { Section } from './Section';
import { ShieldCheck, EyeOff, CheckCircle } from 'lucide-react';

export const Safety: React.FC = () => {
  return (
    <Section className="bg-paper">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-900 mb-4">
            公開が不安な方へ。<br className="hidden md:block"/>「完全承認制」で進めます。
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16">
          <div className="bg-white p-8 border border-gray-200">
            <CheckCircle className="w-8 h-8 text-navy-900 mb-4" strokeWidth={1.5} />
            <h3 className="font-bold text-lg mb-2 text-navy-900 font-serif">完全承認制</h3>
            <p className="text-sm text-gray-600 leading-relaxed">お客様の校了（OK）が出るまで、1秒たりとも公開しません。</p>
          </div>
          <div className="bg-white p-8 border border-gray-200">
            <EyeOff className="w-8 h-8 text-navy-900 mb-4" strokeWidth={1.5} />
            <h3 className="font-bold text-lg mb-2 text-navy-900 font-serif">映せないものは撮らない</h3>
            <p className="text-sm text-gray-600 leading-relaxed">事前にNG項目（PC画面、伝票、特定エリアなど）をすり合わせます。</p>
          </div>
          <div className="bg-white p-8 border border-gray-200">
            <ShieldCheck className="w-8 h-8 text-navy-900 mb-4" strokeWidth={1.5} />
            <h3 className="font-bold text-lg mb-2 text-navy-900 font-serif">モザイク処理対応</h3>
            <p className="text-sm text-gray-600 leading-relaxed">編集段階で、映り込みへのボカシや音声カットに対応します。</p>
          </div>
        </div>

        {/* Rights Section - Sophisticated Certificate Style */}
        <div className="bg-navy-900 text-white p-8 md:p-12 relative overflow-hidden border-l-4 border-persimmon">
          {/* Background Texture */}
          <div className="absolute top-0 right-0 w-64 h-64 border-[20px] border-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

          <div className="relative z-10 md:flex items-start justify-between gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <div className="h-px w-8 bg-persimmon"></div>
                 <h3 className="font-serif text-xl md:text-2xl font-medium tracking-wide">権利・二次利用について</h3>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-loose font-serif">
                納品データは<span className="text-white border-b border-gray-500 mx-1">「無期限・無制限」</span>で二次利用可能です。<br className="hidden md:block"/>
                自社サイト、SNS、広告、採用媒体などに自由にお使いください。
              </p>
            </div>
            
            <div className="mt-8 md:mt-0 flex flex-col items-end opacity-40">
              <span className="font-serif italic text-4xl md:text-5xl">Rights Free</span>
              <span className="text-[10px] tracking-[0.3em] uppercase mt-2 border-t border-gray-600 pt-2 block">Unlimited Usage License</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};