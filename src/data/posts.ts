export interface Post {
  id: string;
  index: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  excerpt: string;
  status: 'published' | 'draft' | 'coming-soon';
}

export const posts: Post[] = [
  {
    id: 'post-01',
    index: '01',
    title: '为什么我开始认真使用 AI 写代码',
    date: '2026',
    category: 'AI',
    readingTime: '5 min',
    excerpt: '从传统 Java 后端到 AI 辅助编程，是什么促使我做出这个转变。',
    status: 'coming-soon',
  },
  {
    id: 'post-02',
    index: '02',
    title: 'Vibe Coding 到底改变了什么',
    date: '2026',
    category: 'Vibe Coding',
    readingTime: '6 min',
    excerpt: 'Vibe Coding 不仅仅是用 AI 写代码，它改变的是整个开发流程。',
    status: 'coming-soon',
  },
  {
    id: 'post-03',
    index: '03',
    title: '一个企业级财务系统的架构思考',
    date: '2026',
    category: 'Architecture',
    readingTime: '8 min',
    excerpt: '财务业务与现代软件架构结合的实践与思考。',
    status: 'coming-soon',
  },
  {
    id: 'post-04',
    index: '04',
    title: '程序员应该如何面对 AI',
    date: '2026',
    category: 'Thinking',
    readingTime: '5 min',
    excerpt: 'AI 时代，程序员的价值在哪里？',
    status: 'coming-soon',
  },
  {
    id: 'post-05',
    index: '05',
    title: '从 Java 开发到 AI Developer',
    date: '2026',
    category: 'Career',
    readingTime: '7 min',
    excerpt: '一个 8 年 Java 工程师的转型之路。',
    status: 'coming-soon',
  },
];

export interface Philosophy {
  text: string;
}

export const philosophies: Philosophy[] = [
  { text: 'Technology is a tool.' },
  { text: 'Building is the goal.' },
  { text: 'AI is changing the way we create.' },
];
