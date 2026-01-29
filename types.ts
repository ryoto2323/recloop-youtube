export interface FAQItem {
  question: string;
  answer: string;
}

export interface Achievement {
  id: number;
  title: string;       // 実績① ブランドリユース企業
  platforms: string;   // TikTok / Instagram運用
  purpose: string;     // 目的
  role: string;        // 担当
  metricsText: string; // 動画成果例（テキスト全体）
  mainValue: number;   // 841 (アニメーション用数値)
  result: string;      // 結果
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PackageItem {
  title: string;
  description: string[];
}