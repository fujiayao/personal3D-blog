export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-01',
    company: '*** 科技有限公司', // 已打码
    role: 'Java 软件工程师',
    period: '2020.10 — NOW',
    highlights: [
      '软件项目后端开发',
      '智慧养老',
      '智慧在线教育',
      '数字化会员中心',
      '低代码生成平台',
      '项目模块开发主导',
      '需求评审',
      '工时评估',
      '开发排期',
    ],
  },
  {
    id: 'exp-02',
    company: '*** 大数据运营公司', // 已打码
    role: 'Java 软件开发工程师',
    period: '2018.08 — 2020.10',
    highlights: [
      '招商引资信息化平台',
      '电商商城系统',
      '浏览器定制开发',
      '园林文物综合保护管理平台',
      '智慧养老信息化系统',
    ],
  },
];
