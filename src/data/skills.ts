export interface Skill {
  name: string;
  level: 'core' | 'proficient' | 'familiar' | 'exploring';
  category: 'backend' | 'devops' | 'ai' | 'frontend';
}

export const skills: Skill[] = [
  { name: 'Java', level: 'core', category: 'backend' },
  { name: 'Spring Boot', level: 'core', category: 'backend' },
  { name: 'Spring Cloud', level: 'core', category: 'backend' },
  { name: 'Redis', level: 'proficient', category: 'backend' },
  { name: 'Kafka', level: 'proficient', category: 'backend' },
  { name: 'MySQL', level: 'proficient', category: 'backend' },
  { name: 'MongoDB', level: 'familiar', category: 'backend' },
  { name: 'Docker', level: 'familiar', category: 'devops' },
  { name: 'Git', level: 'proficient', category: 'devops' },
  { name: 'Linux', level: 'familiar', category: 'devops' },
  { name: 'Python', level: 'familiar', category: 'backend' },
  { name: 'LangChain', level: 'exploring', category: 'ai' },
  { name: 'LangGraph', level: 'exploring', category: 'ai' },
  { name: 'Dify', level: 'exploring', category: 'ai' },
  { name: 'LLM', level: 'exploring', category: 'ai' },
  { name: 'Agent', level: 'exploring', category: 'ai' },
  { name: 'Vibe Coding', level: 'exploring', category: 'ai' },
  { name: 'Claude Code', level: 'exploring', category: 'ai' },
  { name: 'Codex', level: 'exploring', category: 'ai' },
  { name: 'Trae', level: 'exploring', category: 'ai' },
];

export const marqueeRow1 = [
  'JAVA', 'SPRING CLOUD', 'MICROSERVICES', 'AI', 'LLM',
  'LANGCHAIN', 'LANGGRAPH', 'DIFY', 'VIBE CODING', 'CODING',
  'PRODUCT', 'LIFE', 'THINKING',
];

export const marqueeRow2 = [
  'BUILDING', 'LEARNING', 'EXPLORING', 'CREATING',
  'THINKING', 'SHARING',
];
