# 程序尧的 3D 个人博客 🧑‍💻

> Java 后端开发 · AI 探索者 · Vibe Coder
>
> 一个写了 8 年 Java 后端，现在开始认真研究 AI 和 Vibe Coding 的程序员。

---

## ✨ 项目介绍

这是我的个人博客主页，使用 **React + Three.js** 构建，带有 3D 互动头像和流畅的动画效果。灵感来源于现代开发者个人站的设计风格，主打深色科技感 + 3D 交互体验。

### 主要特性

- 🎨 **3D 互动头像** — 基于 Three.js 渲染的 3D 头像，支持鼠标拖拽旋转查看
- 🖱️ **丝滑动画** — Framer Motion 驱动的滚动揭示、字符动画、视差效果
- 🌙 **深色主题** — 现代化深色界面，护眼又有质感
- 📱 **完全响应式** — 手机、平板、桌面端完美适配
- ⚡ **极致性能** — Vite 构建，秒级启动，热更新

### 页面板块

| 板块 | 说明 |
|------|------|
| **Hero** | 3D 头像 + 个人介绍 + 核心数据 |
| **About** | 关于我 |
| **Skills** | 技能栈展示 |
| **Experience** | 工作经历 |
| **Projects** | 项目作品 |
| **Journey** | 成长历程时间线 |
| **Vibe Coding** | AI 编程探索 |
| **Now Building** | 当前在做什么 |
| **Thinking** | 思考与文章 |
| **Interests** | 兴趣爱好 |
| **Life** | 生活记录 |
| **Future** | 未来规划 |
| **Connect** | 联系方式 |

---

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| **框架** | React 18 + TypeScript |
| **构建工具** | Vite 5 |
| **样式** | Tailwind CSS |
| **动画** | Framer Motion |
| **3D 渲染** | Three.js + @react-three/fiber + @react-three/drei |
| **图标** | Lucide React |

---

## 🚀 快速开始

### 环境要求

- Node.js >= 16
- npm（或 pnpm / yarn）

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动后访问 http://127.0.0.1:5175/

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

---

## 📁 项目结构

```
personal3D-blog/
├── public/                  # 静态资源
│   ├── avatar.png           # 备用 2D 头像
│   ├── favicon.svg          # 网站图标
│   └── life/                # 生活素材（已 gitignore，不提交）
├── src/
│   ├── components/
│   │   ├── layout/          # 布局组件（Navbar、Footer）
│   │   ├── sections/        # 页面板块（Hero、About、Projects...）
│   │   └── ui/              # 通用 UI 组件（Avatar3D、CharacterReveal...）
│   ├── data/                # 数据配置（个人信息、项目、技能...）
│   ├── hooks/               # 自定义 Hooks
│   ├── animations/          # 动画配置
│   ├── App.tsx              # 根组件
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── .gitignore
```

---

## 🎯 自定义指南

### 1. 修改个人信息

编辑 `src/data/profile.ts`，修改姓名、介绍、联系方式等：

```typescript
export const profile: Profile = {
  name: '你的名字',
  alias: '你的昵称',
  role: '你的职位',
  // ...
};
```

### 2. 修改 3D 头像

将你的 `.glb` 3D 模型文件放到 `public/` 目录下，然后编辑 `src/components/ui/Avatar3D.tsx`：

```typescript
const { scene } = useGLTF('/你的模型文件.glb');
```

> 💡 提示：3D 模型文件较大，默认已加入 `.gitignore`，不会提交到 GitHub。

### 3. 修改技能 / 项目 / 经历

对应的配置文件都在 `src/data/` 目录下：

- `skills.ts` — 技能栈
- `projects.ts` — 项目作品
- `experience.ts` — 工作经历
- `journey.ts` — 成长历程
- `future.ts` — 未来规划
- `interests.ts` — 兴趣爱好

### 4. 修改主题色

编辑 `tailwind.config.js` 中的 `accent` 颜色变量即可全局换色。

---

## 📝 注意事项

- **3D 模型文件**：`.glb` / `.gltf` 文件默认不提交（体积大），如需部署请自行上传到 CDN 或对象存储
- **生活素材**：`public/life/` 目录下的照片和视频不提交，保护隐私
- **IDE 配置**：`.idea`、`.vscode` 等编辑器配置已忽略

---

## 📬 联系我

- **GitHub**：[fujiayao](https://github.com/fujiayao)
- **Email**：1790018181@qq.com

---

## ⭐ 支持

如果这个项目对你有帮助，欢迎点个 Star ⭐ 支持一下！

也欢迎关注我的账号，一起交流 Java 后端、AI 和 Vibe Coding 的那些事儿~
