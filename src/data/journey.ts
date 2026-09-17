export interface JourneyItem {
  year: string;
  period?: string;
  title: string;
  description?: string;
  tags?: string[];
}

export const journey: JourneyItem[] = [
  {
    year: '2014',
    title: '开始软件工程学习',
    description: '进入大学，开始系统学习软件工程。',
  },
  {
    year: '2018',
    title: '进入软件开发行业',
    description: '正式开始职业生涯，加入浙江万博大数据。',
  },
  {
    year: '2018 — 2020',
    title: 'Java 软件开发',
    description: '参与招商引资、商城、浏览器、园林文物等多个项目开发。',
  },
  {
    year: '2020 — NOW',
    title: '数理技术有限公司',
    description: 'Java 软件工程师，深入参与智慧养老等大型 Spring Cloud 微服务项目。',
  },
  {
    year: '2021 — 2024',
    title: '深入参与智慧养老系统',
    description: '大型 Spring Cloud 微服务项目，20 余个微服务，千万级数据处理。',
    tags: ['Spring Cloud', 'Microservices', 'Redis', 'Kafka', 'PolarDB-X'],
  },
  {
    year: '2024+',
    title: '开始更加关注 AI 与大模型',
    description: '从传统后端开发逐渐转向 AI 领域探索。',
  },
  {
    year: '2025+',
    title: 'LangChain / LangGraph / Dify / Agent',
    description: '深入学习 AI 应用开发框架与 Agent 工作流。',
    tags: ['LangChain', 'LangGraph', 'Dify', 'Agent'],
  },
  {
    year: '2026',
    title: 'Vibe Coding · AI × Software · 个人产品探索',
    description: '探索 AI 辅助编程、个人产品创造与数字空间构建。',
    tags: ['Vibe Coding', 'AI', 'Product'],
  },
];
