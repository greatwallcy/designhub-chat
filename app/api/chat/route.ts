import { NextRequest, NextResponse } from 'next/server'

const API_KEY = process.env.MINIMAX_API_KEY
const API_URL = 'https://api.minimaxi.com/v1/chat/completions'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: '无效的请求格式' }, { status: 400 })
    }

    if (!API_KEY) {
      return NextResponse.json({ error: 'API Key 未配置' }, { status: 500 })
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'MiniMax-M2.7-highspeed',
        messages: messages.map((msg: { role: string; content: string }) => ({
          role: msg.role,
          content: msg.content
        })),
        max_tokens: 4096,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return NextResponse.json(
        { error: `API 请求失败: ${response.status} - ${JSON.stringify(errorData)}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    if (data.error) {
      return NextResponse.json({ error: data.error.message || 'API 返回错误' }, { status: 400 })
    }

    const content = data.choices?.[0]?.message?.content || '没有收到回复'

    return NextResponse.json({ content })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '服务器内部错误' },
      { status: 500 }
    )
  }
}
