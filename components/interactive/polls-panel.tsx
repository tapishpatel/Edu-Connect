"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, Clock } from "lucide-react"

const activePoll = {
  id: "1",
  question: "Which component is considered the 'brain' of the computer?",
  options: [
    { id: "a", text: "RAM (Memory)", votes: 12, percentage: 15 },
    { id: "b", text: "CPU (Processor)", votes: 65, percentage: 78 },
    { id: "c", text: "Hard Drive", votes: 4, percentage: 5 },
    { id: "d", text: "Graphics Card", votes: 2, percentage: 2 },
  ],
  totalVotes: 83,
  timeLeft: "2:45",
  hasVoted: false,
}

const completedPolls = [
  {
    id: "2",
    question: "What is the primary function of RAM?",
    correctAnswer: "Temporary data storage",
    yourAnswer: "Temporary data storage",
    isCorrect: true,
    totalVotes: 89,
  },
  {
    id: "3",
    question: "Which storage device is fastest?",
    correctAnswer: "SSD",
    yourAnswer: "HDD",
    isCorrect: false,
    totalVotes: 87,
  },
]

export function PollsPanel() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(activePoll.hasVoted)

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true)
      // In a real app, this would send the vote to the server
    }
  }

  return (
    <Card className="h-[500px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <BarChart3 className="h-5 w-5" />
          Live Polls
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto space-y-4">
        {/* Active Poll */}
        <div className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Active Poll</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-3 w-3" />
              {activePoll.timeLeft}
            </div>
          </div>

          <h4 className="font-medium">{activePoll.question}</h4>

          <div className="space-y-2">
            {activePoll.options.map((option) => (
              <div key={option.id}>
                {!hasVoted ? (
                  <button
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full text-left p-3 border rounded-md transition-colors ${
                      selectedOption === option.id ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <span className="font-medium mr-2">{option.id.toUpperCase()}.</span>
                    {option.text}
                  </button>
                ) : (
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>
                        <span className="font-medium mr-2">{option.id.toUpperCase()}.</span>
                        {option.text}
                      </span>
                      <span>{option.percentage}%</span>
                    </div>
                    <Progress value={option.percentage} className="h-2" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {!hasVoted ? (
            <Button onClick={handleVote} disabled={!selectedOption} className="w-full">
              Submit Vote
            </Button>
          ) : (
            <div className="text-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 inline mr-1" />
              {activePoll.totalVotes} votes • Thank you for participating!
            </div>
          )}
        </div>

        {/* Completed Polls */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Previous Polls</h4>
          {completedPolls.map((poll) => (
            <div key={poll.id} className="border rounded-lg p-3 space-y-2">
              <h5 className="text-sm font-medium">{poll.question}</h5>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>Correct Answer:</span>
                  <span className="font-medium">{poll.correctAnswer}</span>
                </div>
                <div className="flex justify-between">
                  <span>Your Answer:</span>
                  <span className={`font-medium ${poll.isCorrect ? "text-green-600" : "text-red-600"}`}>
                    {poll.yourAnswer}
                  </span>
                </div>
              </div>
              <Badge
                variant={poll.isCorrect ? "default" : "secondary"}
                className={`text-xs ${poll.isCorrect ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}`}
              >
                {poll.isCorrect ? "Correct" : "Incorrect"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
