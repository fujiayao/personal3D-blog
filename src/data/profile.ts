export interface Profile {
  name: string;
  alias: string;
  age: number;
  experience: number;
  role: string;
  location: string;
  education: string;
  school: string;
  avatarUrl: string;
  heroLines: string[];
  heroSub: string[];
  intro: string;
  transitioning: string[];
  stats: { value: string; suffix: string; label: string }[];
  contact: { label: string; href: string }[];
}

export const profile: Profile = {
  name: '格子衫程序尧',
  alias: '格子衫程序尧',
  age: 30,
  experience: 8,
  role: 'Java Backend Developer · AI Explorer · Vibe Coder',
  location: '金华',
  education: '软件工程本科',
  school: '西安工业大学',
  avatarUrl: '/avatar.png',
  heroLines: ["Hi, I'm 格子衫程序尧."],
  heroSub: ['Java Developer.', 'AI Explorer.', 'Vibe Coder.'],
  intro: '一个写了 8 年 Java 后端，\n现在开始认真研究 AI 和 Vibe Coding 的程序员。',
  transitioning: ['AI', 'Software', 'Creativity'],
  stats: [
    { value: '08', suffix: '+', label: 'YEARS EXPERIENCE' },
    { value: '07', suffix: '+', label: 'YEARS SPRING CLOUD' },
    { value: '20', suffix: '+', label: 'MICROSERVICES' },
    { value: '10', suffix: '+', label: 'MAJOR PROJECTS' },
    { value: '∞', suffix: '', label: 'THINGS TO LEARN' },
  ],
  contact: [
    { label: 'GitHub：https://github.com/fujiayao', href: 'https://github.com/fujiayao' },
    { label: 'Email：1790018181@qq.com', href: 'https://wx.mail.qq.com' },
  ],
};
