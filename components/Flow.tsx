import React from 'react';
import { Section } from './Section';
import { Play } from 'lucide-react';

export const Flow: React.FC = () => {
  const steps = [
    { num: "01", title: "申込み", desc: "フォーム入力", duration: "Day 1" },
    { num: "02", title: "確定連絡", desc: "日時決定", duration: "Day 2" },
    { num: "03", title: "お支払い", desc: "前日までに", duration: "Day 3" },
    { num: "04", title: "撮影当日", desc: "1日密着", duration: "Shooting" },
    { num: "05", title: "編集", desc: "1-2週間", duration: "Editing" },
    { num: "06", title: "校了", desc: "確認・承認", duration: "Check" },
    { num: "07", title: "納品", desc: "データ送付", duration: "Release" },
  ];

  return (
    <Section id="flow" className="bg-navy-900 text-white" grid={false}>
      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between border-b border-gray-800 pb-6">
         <div>
            <span className="text-xs font-bold text-gray-500 tracking-widest uppercase block mb-2">Production Flow</span>
            <h2 className="text-3xl font-serif font-bold text-white">制作フロー</h2>
         </div>
         <div className="text-gray-500 font-num text-sm tracking-widest hidden md:block">
            TIMELINE VIEW
         </div>
      </div>

      <div className="relative pt-8 pb-12 overflow-x-auto hide-scrollbar">
         {/* Timeline Ruler */}
         <div className="absolute top-0 left-0 right-0 h-4 border-b border-gray-700 flex justify-between px-10 text-[10px] text-gray-600 font-num tracking-widest select-none w-min md:w-full">
            <span>00:00</span>
            <span>00:15</span>
            <span>00:30</span>
            <span>00:45</span>
            <span>01:00</span>
         </div>

         {/* Steps Container */}
         <div className="flex space-x-4 px-4 w-max md:w-full min-w-[800px]">
            {steps.map((step, idx) => (
              <div key={idx} className="flex-1 min-w-[120px] group relative pt-8">
                 {/* Timeline Bar */}
                 <div className={`h-2 w-full rounded-sm mb-6 transition-all duration-300 ${idx === 3 ? 'bg-persimmon shadow-[0_0_15px_rgba(202,92,59,0.6)]' : 'bg-gray-700 group-hover:bg-gray-500'}`}></div>
                 
                 {/* Connection Vertical Line */}
                 <div className="absolute top-8 left-0 w-px h-full bg-gray-800 -z-10"></div>

                 {/* Content */}
                 <div className="pr-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-gray-500 font-num">0{idx + 1}</span>
                        {idx === 3 && <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>}
                    </div>
                    <h3 className="font-bold text-lg text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-400 mb-2">{step.desc}</p>
                    <span className="inline-block px-2 py-0.5 bg-gray-800 rounded text-[10px] text-gray-400 font-num">
                        {step.duration}
                    </span>
                 </div>
              </div>
            ))}
            
            {/* End Playhead */}
            <div className="flex items-center justify-center pl-4 opacity-50">
                <Play size={24} className="text-gray-600 fill-current" />
            </div>
         </div>
      </div>
    </Section>
  );
};