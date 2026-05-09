import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DesignHub AI 对话',
  description: 'DesignHub AI 对话助手 - 基于 MiniMax-M2.7-highspeed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
