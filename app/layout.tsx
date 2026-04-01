import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Skill Up', description: 'スキルアップ・資格取得情報' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body style={{margin:0,fontFamily:'sans-serif'}}>{children}</body></html>
}