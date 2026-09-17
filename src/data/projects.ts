export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  highlights: string[];
  techStack: string[];
  challenges?: { title: string; solution: string }[];
}

export const projects: Project[] = [
  {
    id: 'p01',
    index: '01',
    title: '智慧养老信息化系统',
    subtitle: '区域养老一站式服务平台',
    tags: ['Spring Cloud', 'Microservices', 'Redis', 'Kafka', 'PolarDB-X', 'IoT', 'GIS'],
    description:
      '采用 Spring Cloud 分布式微服务架构，按照业务领域拆分为 20 余个微服务，涉及政府内外网数据交互、物联网设备、GIS、大数据分析与第三方平台对接。',
    highlights: [
      '智慧餐台',
      '时间银行',
      '幸福助手',
      '安居守护',
      '用户管理',
      '机构养老',
    ],
    techStack: ['Spring Cloud', 'Redis', 'Kafka', 'PolarDB-X'],
    challenges: [
      {
        title: 'High Concurrency',
        solution: 'Redis Distributed Lock + Kafka 异步消息解决高并发订单处理',
      },
      {
        title: 'Million-level Data',
        solution: 'PolarDB-X 分库分表 + 数据库优化 + 异步处理',
      },
    ],
  },
  {
    id: 'p02',
    index: '02',
    title: '数字化会员中心',
    subtitle: '优惠券微服务重构',
    tags: ['Spring Cloud', 'Redis', 'High Concurrency', 'Design Patterns'],
    description:
      '从复杂历史代码中重新梳理完整业务链路，并完成核心代码重构。引入工厂模式、策略模式等设计模式，结合分布式锁与乐观锁，实现高并发下的会员优惠券系统。',
    highlights: [
      'Factory Pattern',
      'Strategy Pattern',
      'Distributed Lock',
      'Optimistic Lock',
      'Rate Limiting',
      'Circuit Breaking',
      'Service Degradation',
    ],
    techStack: ['Spring Cloud', 'Redis', 'Design Patterns'],
  },
  {
    id: 'p03',
    index: '03',
    title: '定制浏览器',
    subtitle: 'Chromium 内核定制浏览器',
    tags: ['Chromium', 'C++', 'Spring Cloud', 'Membership'],
    description:
      '基于 Chromium 内核的定制浏览器，包含会员体系、IP 资源管理和虚拟机集成，后端使用 Spring Cloud 微服务架构。',
    highlights: [
      'Chromium 内核定制',
      'IP Resource Management',
      'Virtual Machine 集成',
      '会员体系',
    ],
    techStack: ['Chromium', 'C++', 'Spring Cloud'],
  },
  {
    id: 'p04',
    index: '04',
    title: '招商引资信息化平台',
    subtitle: '政府招商引资项目管理',
    tags: ['Project Management', 'GIS', 'Enterprise Data'],
    description: '面向政府招商引资场景的信息化管理平台，包含项目管理、企业数据、招商引资跟踪、GIS 地图可视化等功能。',
    highlights: ['Project Management', 'GIS 可视化', 'Enterprise Data', 'Investment Tracking'],
    techStack: ['Spring Cloud', 'GIS'],
  },
  {
    id: 'p05',
    index: '05',
    title: '电商商城系统',
    subtitle: 'B2C 电子商务平台',
    tags: ['E-commerce', 'ERP', 'WeChat Pay'],
    description: '包含商品、订单、会员、ERP 对接、微信支付等完整电商链路的 B2C 商城系统。',
    highlights: ['E-commerce', 'ERP 对接', 'WeChat Pay', 'Order System', 'Membership', 'Product'],
    techStack: ['Spring Cloud', 'MySQL', 'Redis'],
  },
];
