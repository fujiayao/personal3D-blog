export interface CurrentItem {
  id: string;
  index: string;
  title: string;
  description: string;
  status: string;
  progress: number;
}

export const currentProjects: CurrentItem[] = [
  {
    id: 'now-01',
    index: '01',
    title: 'AI + SOFTWARE',
    description: '探索如何使用 AI 提升真实软件项目开发效率。',
    status: 'IN PROGRESS',
    progress: 60,
  },
  {
    id: 'now-02',
    index: '02',
    title: 'VIBE CODING',
    description: '尝试从需求 → UI → 前端 → 后端 → 调试，利用 AI 完成完整产品开发。',
    status: 'IN PROGRESS',
    progress: 45,
  },
  {
    id: 'now-03',
    index: '03',
    title: 'FINANCIAL SYSTEM',
    description: '正在参与/构建企业级财务系统，探索财务业务与现代软件架构结合。',
    status: 'IN PROGRESS',
    progress: 35,
  },
  {
    id: 'now-04',
    index: '04',
    title: 'PERSONAL WEBSITE',
    description: '持续打造属于自己的个人数字空间。',
    status: 'IN PROGRESS',
    progress: 80,
  },
  {
    id: 'now-05',
    index: '05',
    title: 'AI AGENT',
    description: '研究 LangChain / LangGraph / Dify 以及 Agent 工作流。',
    status: 'IN PROGRESS',
    progress: 50,
  },
];

export const vibeCodingTools = [
  'Codex', 'Claude Code', 'Trae', 'LLM APIs', 'LangChain', 'LangGraph', 'Dify',
];
