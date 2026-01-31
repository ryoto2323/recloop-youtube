import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { Clock } from 'lucide-react';

export const Flow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    { num: "01", time: "00:00:00", title: "申込み", desc: "フォーム入力（1分）", detail: "まずは空き状況の確認から。LINEまたはフォームより簡単にお申し込みいただけます。" },
    { num: "02", time: "00:05:00", title: "確定連絡", desc: "日程調整", detail: "担当者より24時間以内にご連絡。撮影日時と事前ヒアリングシートを送付します。" },
    { num: "03", time: "00:15:00", title: "お支払い", desc: "前日までに", detail: "銀行振込またはクレジットカードにて決済。入金確認後、正式に撮影枠を確保します。" },
    { num: "04", time: "06:00:00", title: "撮影当日", desc: "1日密着 (Shooting)", detail: "カメラマンが1名でお伺いします。朝の朝礼から終業まで、ありのままの1日を記録します。演技は不要です。" },
    { num: "05", time: "12:00:00", title: "編集", desc: "1-2週間 (Editing)", detail: "膨大な素材から、企業の「らしさ」が伝わるシーンを厳選し、一本のストーリーに紡ぎます。" },
    { num: "06", time: "23:59:00", title: "納品・公開", desc: "データ送付", detail: "mp4データで納品。貴社の承認後、SNSやWebサイトで自由にご活用いただけます。" },
  ];

  useEffect(() => {
    const handleScroll = () => {
        if (!sectionRef.current) return;
        
        const stepElements = sectionRef.current.querySelectorAll('.flow-step');
        stepElements.forEach((el, index) => {
            const rect = el.getBoundingClientRect();
            // Activate when element is in the middle of the screen
            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                setActiveStep(index);
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section id="flow" className="bg-navy-900 text-white relative overflow-hidden" grid={false}>
      {/* Vertical Rhythm Decoration */}
      <div className="hidden md:block absolute top-0 left-10 h-full writing-vertical-rl text-[120px] font-serif font-bold text-white/5 select-none pointer-events-none z-0">
         制作の流れ
      </div>

      <div className="max-w-5xl mx-auto px-6 mb-16 flex items-end justify-between border-b border-gray-800 pb-6 relative z-10">
         <div>
            <span className="text-xs font-bold text-gray-500 tracking-widest uppercase block mb-2">Production Timeline</span>
            <h2 className="text-3xl font-serif font-bold text-white">制作フロー</h2>
         </div>
      </div>

      <div ref={sectionRef} className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
         
         {/* Sticky Timecode Display (Cinematic UX) */}
         <div className="hidden md:block w-48 sticky top-32 h-fit text-right">
            <div className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-2 flex items-center justify-end gap-2">
                <Clock size={14} /> Timecode
            </div>
            <div className="font-num text-5xl font-bold tracking-tight text-white tabular-nums">
                {steps[activeStep].time}
            </div>
            <div className="mt-4 border-r-2 border-persimmon pr-4">
                <p className="text-persimmon font-bold text-lg">{steps[activeStep].title}</p>
                <p className="text-gray-400 text-sm">{steps[activeStep].desc}</p>
            </div>
         </div>

         {/* Mobile Timecode (Sticky Header) */}
         <div className="md:hidden sticky top-16 bg-navy-900/90 backdrop-blur-md z-30 py-4 border-b border-gray-800 -mx-6 px-6 flex justify-between items-center">
            <span className="font-num text-2xl font-bold text-white tabular-nums">{steps[activeStep].time}</span>
            <span className="text-xs text-gray-400">{steps[activeStep].title}</span>
         </div>

         {/* Vertical Timeline Steps */}
         <div className="flex-1 space-y-24 relative pb-24">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-gray-800 -z-10"></div>

            {steps.map((step, idx) => (
                <div 
                    key={idx} 
                    className={`flow-step flex gap-8 transition-all duration-500 ${idx === activeStep ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'}`}
                >
                    {/* Marker */}
                    <div className="relative">
                        <div className={`w-8 h-8 md:w-4 md:h-4 rounded-full border-2 flex items-center justify-center bg-navy-900 z-10 transition-colors duration-300 ${idx === activeStep ? 'border-persimmon bg-persimmon' : 'border-gray-600'}`}>
                            {idx === activeStep && <div className="w-full h-full bg-persimmon animate-ping rounded-full opacity-50"></div>}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1 md:pt-0">
                        <span className="text-xs font-bold text-gray-500 tracking-widest font-num block mb-1">STEP {step.num}</span>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-md">
                            {step.detail}
                        </p>
                    </div>
                </div>
            ))}
         </div>

      </div>
    </Section>
  );
};