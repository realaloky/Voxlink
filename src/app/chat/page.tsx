'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Chat() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
  }, [])

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl">Chat App</h1>
      </header>
      <div className="flex-1 flex">
        <aside className="w-64 bg-gray-100 p-4">
          <h2 className="font-bold mb-4">Chats</h2>
          <p className="text-sm text-gray-500">No chats yet</p>
        </aside>
        <main className="flex-1 flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            <p className="text-center text-gray-500">Select a chat to start messaging</p>
          </div>
          <div className="p-4 border-t">
            <input 
              type="text" 
              placeholder="Type a message..."
              className="w-full p-2 border rounded"
            />
          </div>
        </main>
      </div>
    </div>
  )
}
