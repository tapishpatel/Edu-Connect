import { Navigation } from "@/components/navigation"
import { ForumCategories } from "@/components/forum/forum-categories"
import { RecentDiscussions } from "@/components/forum/recent-discussions"
import { PopularTopics } from "@/components/forum/popular-topics"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Discussion Forum</h1>
          <p className="text-muted-foreground text-lg">Connect with fellow students and instructors</p>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search discussions..." className="pl-10" />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Discussion
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <ForumCategories />
            <RecentDiscussions />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <PopularTopics />
          </div>
        </div>
      </main>
    </div>
  )
}
