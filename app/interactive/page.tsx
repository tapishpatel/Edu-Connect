import { Navigation } from "@/components/navigation"
import { LiveSession } from "@/components/interactive/live-session"
import { ChatPanel } from "@/components/interactive/chat-panel"
import { PollsPanel } from "@/components/interactive/polls-panel"
import { QuizPanel } from "@/components/interactive/quiz-panel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InteractivePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Interactive Learning</h1>
          <p className="text-muted-foreground text-lg">
            Engage with live sessions, discussions, and interactive content
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <LiveSession />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Tabs defaultValue="chat" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="polls">Polls</TabsTrigger>
                <TabsTrigger value="quiz">Quiz</TabsTrigger>
              </TabsList>

              <TabsContent value="chat">
                <ChatPanel />
              </TabsContent>

              <TabsContent value="polls">
                <PollsPanel />
              </TabsContent>

              <TabsContent value="quiz">
                <QuizPanel />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
