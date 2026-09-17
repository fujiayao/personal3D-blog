export interface Interest {
  name: string;
  icon: string;
  status: 'active' | 'coming-soon';
  description?: string;
}

export const interests: Interest[] = [
  { name: 'AI', icon: 'Brain', status: 'active', description: '人工智能与大模型应用' },
  { name: 'CODING', icon: 'Code2', status: 'active', description: '软件开发与编程' },
  { name: 'PRODUCT', icon: 'Package', status: 'active', description: '产品设计与构建' },
  { name: 'DESIGN', icon: 'Palette', status: 'coming-soon', description: 'Coming Soon' },
  { name: 'TECHNOLOGY', icon: 'Cpu', status: 'active', description: '技术探索' },
  { name: '3D', icon: 'Box', status: 'coming-soon', description: 'Coming Soon' },
  { name: 'PHOTOGRAPHY', icon: 'Camera', status: 'coming-soon', description: "I'm still discovering this." },
  { name: 'TRAVEL', icon: 'MapPin', status: 'coming-soon', description: "I'm still discovering this." },
  { name: 'MUSIC', icon: 'Music', status: 'coming-soon', description: 'Coming Soon' },
  { name: 'MOVIES', icon: 'Film', status: 'coming-soon', description: 'Coming Soon' },
  { name: 'READING', icon: 'BookOpen', status: 'coming-soon', description: 'Coming Soon' },
];
