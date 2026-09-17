export interface LifeItem {
  id: string;
  type: 'photo' | 'video';
  src: string;
  title: string;
  description?: string;
  date?: string;
  location?: string;
}

export interface LifeCategory {
  id: string;
  label: string;
  labelCn: string;
  items: LifeItem[];
}

export const lifeCategories: LifeCategory[] = [
  {
    id: 'travel',
    label: 'A PLACE I VISITED',
    labelCn: '走过的路',
    items: [
      {
        id: 'travel-1',
        type: 'photo',
        src: '/life/photos/旅游-寺庙-祈福.jpg',
        title: '寺庙祈福',
        description: '心诚则灵',
        date: '2024',
        location: '寺庙',
      },
      {
        id: 'travel-2',
        type: 'photo',
        src: '/life/photos/旅游-户外-沙滩-1.jpg',
        title: '沙滩漫步',
        description: '海风与自由',
        date: '2024',
        location: '海边沙滩',
      },
      {
        id: 'travel-3',
        type: 'photo',
        src: '/life/photos/旅游-户外-沙滩-2.jpg',
        title: '海边日落',
        description: '最温柔的时光',
        date: '2024',
        location: '海边沙滩',
      },
      {
        id: 'travel-4',
        type: 'photo',
        src: '/life/photos/旅游-户外活动-1.jpg',
        title: '户外探险',
        description: '走出去，看见世界',
        date: '2024',
        location: '户外',
      },
      {
        id: 'travel-5',
        type: 'photo',
        src: '/life/photos/旅游-户外活动-2.jpg',
        title: '山野之间',
        description: '自然是最好的疗愈',
        date: '2024',
        location: '户外',
      },
      {
        id: 'travel-6',
        type: 'photo',
        src: '/life/photos/旅游-户外活动-3.jpg',
        title: '在路上',
        description: '每一步都是风景',
        date: '2024',
        location: '户外',
      },
    ],
  },
  {
    id: 'guitar',
    label: 'GUITAR WORKS',
    labelCn: '指尖的旋律',
    items: [
      {
        id: 'guitar-1',
        type: 'photo',
        src: '/life/photos/兴趣-吉他-中秋沙滩.jpg',
        title: '中秋沙滩弹唱',
        description: '月光、海浪与琴声',
        date: '中秋',
        location: '海边沙滩',
      },
      {
        id: 'guitar-2',
        type: 'photo',
        src: '/life/photos/兴趣-吉他-日常苦练.jpg',
        title: '日常苦练',
        description: '每一个音符背后都是重复',
        date: '日常',
      },
      {
        id: 'guitar-video-1',
        type: 'video',
        src: '/life/videos/吉他-作品-1.mp4',
        title: '吉他作品 · 一',
        description: '指尖流淌的旋律',
      },
      {
        id: 'guitar-video-2',
        type: 'video',
        src: '/life/videos/吉他-作品-2.mp4',
        title: '吉他作品 · 二',
        description: '弦上的故事',
      },
      {
        id: 'guitar-video-3',
        type: 'video',
        src: '/life/videos/吉他-作品-3.mp4',
        title: '吉他作品 · 三',
        description: '音乐是另一种语言',
      },
    ],
  },
  {
    id: 'lifestyle',
    label: 'LIFE MOMENTS',
    labelCn: '生活碎片',
    items: [
      {
        id: 'life-1',
        type: 'photo',
        src: '/life/photos/生活-乔迁.jpg',
        title: '乔迁之喜',
        description: '新的开始',
        date: '2024',
      },
      {
        id: 'life-2',
        type: 'photo',
        src: '/life/photos/生活-户外-烧烤.jpg',
        title: '户外烧烤',
        description: '烟火气最抚凡人心',
        date: '2024',
        location: '户外',
      },
      {
        id: 'life-3',
        type: 'photo',
        src: '/life/photos/生活-新年-舞龙.jpg',
        title: '新年舞龙',
        description: '年味与传承',
        date: '新年',
      },
      {
        id: 'life-4',
        type: 'photo',
        src: '/life/photos/生活-搞笑-新发型.jpg',
        title: '新发型',
        description: '换个发型换种心情',
        date: '日常',
      },
    ],
  },
  {
    id: 'daily',
    label: 'A RANDOM IDEA',
    labelCn: '日常随想',
    items: [
      {
        id: 'daily-1',
        type: 'photo',
        src: '/life/photos/日常-搞笑.jpg',
        title: '日常搞笑',
        description: '生活不缺笑点',
        date: '日常',
      },
    ],
  },
];
