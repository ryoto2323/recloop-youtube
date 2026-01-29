import React from 'react';
import { Section } from './Section';
import { Circle, Square, Triangle, Hexagon } from 'lucide-react';

export const Mission: React.FC = () => {
  const values = [
    {
      icon: <Circle className="w-8 h-8 font-thin" strokeWidth={1} />,
      title: "認知拡大",
      desc: "仕事の裏側がコンテンツになり、潜在層へ届く"
    },
    {
      icon: <Square className="w-8 h-8 font-thin" strokeWidth={1} />,
      title: "集客増加",
      desc: "こだわりが物語になり、サービス提供者の人柄が伝わる"
    },
    {
      icon: <Triangle className="w-8 h-8 font-thin" strokeWidth={1} />,
      title: "採用増加",
      desc: "仕事の流れ、社風や人柄が伝わり、ミスマッチがなくなる"
    },
    {
      icon: <Hexagon className="w-8 h-8 font-thin" strokeWidth={1} />,
      title: "取引先増加",
      desc: "現場の体制・品質が可視化され、安心材料になる"
    }
  ];

  return (
    <Section className="bg-paper" fullWidth>
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20">
        <h2 className="text-2xl md:text-5xl font-serif font-bold text-navy-900 leading-tight tracking-tight">
          透明性の可視化で、<br className="hidden md:block"/>
          企業の「伝わらない」を解決します。
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-gray-200">
        {values.map((val, idx) => (
          <div 
            key={idx} 
            className="group relative border-b md:border-b-0 md:border-r border-gray-200 p-8 md:p-12 h-auto md:h-[30rem] flex flex-col justify-between transition-all duration-500 hover:bg-navy-900 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:z-10 cursor-default"
          >
            <div className="text-navy-900 group-hover:text-white transition-colors duration-500 opacity-50 mb-6 md:mb-0">
              {val.icon}
            </div>
            
            <div>
              <span className="text-xs font-num font-bold text-gray-400 mb-2 md:mb-4 block group-hover:text-gray-500 tracking-widest">0{idx + 1}</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-6 text-navy-900 group-hover:text-white transition-colors duration-500 tracking-tight">
                {val.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed md:leading-loose group-hover:text-gray-300 transition-colors duration-500">
                {val.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};