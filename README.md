# DesignHub Chat

基于 MiniMax-M2.7-highspeed 的 AI 对话助手

## 功能

- 🤖 与 AI 对话（基于 MiniMax M2.7 高速版模型）
- 💬 流畅的对话界面
- 🔒 API Key 安全存储在后端，不在前端暴露

## 部署到 Vercel

### 1. 注册 Vercel

访问 https://vercel.com 注册账号（可用 GitHub 账号登录）

### 2. 上传代码到 GitHub

```bash
cd G:\AI\designhub-chat

# 初始化 git
git init
git add .
git commit -m "Initial commit"

# 在 GitHub 创建新仓库，然后：
git remote add origin https://github.com/你的用户名/designhub-chat.git
git push -u origin main
```

### 3. 在 Vercel 导入项目

1. 登录 Vercel
2. 点击 "New Project"
3. 选择 "Import Git Repository"
4. 选择刚创建的 designhub-chat 仓库
5. 点击 "Deploy"

### 4. 配置环境变量

1. 在 Vercel 项目页面，点击 "Settings"
2. 左侧点击 "Environment Variables"
3. 添加：
   - Name: `MINIMAX_API_KEY`
   - Value: `sk-cp-YjjxUzGVFhryPzg91oxYScpHkezNRJNlMWA3dkRWJb37Migb1iov882hr3UpyjbgdCduE7w9jjqyrHXdMmgjyoeVaVzpXZVIdemGjDJeOg5w_xc82pRpbxU4`
4. 点击 "Save"
5. 重新部署：在 "Deployments" 页面，点击 "Redeploy"

### 5. 完成！

部署成功后，Vercel 会给你一个 URL，例如：`https://designhub-chat.vercel.app`

## 本地开发

```bash
cd G:\AI\designhub-chat
npm install
npm run dev
```

然后访问 http://localhost:3000

## 技术栈

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Vercel Serverless Functions
