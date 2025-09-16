"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, Award } from "lucide-react"

const quizData = {
  id: "1",
  title: "Computer Hardware Quiz",
  questions: [
    {
      id: "1",
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
      correctAnswer: 0,
      explanation: "CPU stands for Central Processing Unit, which is the main component that executes instructions.",
    },
    {
      id: "2",
      question: "Which type of memory is volatile?",
      options: ["ROM", "Hard Drive", "RAM", "SSD"],
      correctAnswer: 2,
      explanation: "RAM (Random Access Memory) is volatile memory that loses its data when power is turned off.",
    },
    {
      id: "3",
      question: "What is the smallest unit of data in computing?",
      options: ["Byte", "Bit", "Kilobyte", "Word"],
      correctAnswer: 1,
      explanation: "A bit (binary digit) is the smallest unit of data, representing either 0 or 1.",
    },
  ],
  timeLimit: 300, // 5 minutes
  passingScore: 70,
}

export function QuizPanel() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(quizData.timeLimit)
  const [quizStarted, setQuizStarted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    quizData.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / quizData.questions.length) * 100)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (!quizStarted) {
    return (
      <Card className="h-[500px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Award className="h-5 w-5" />
            {quizData.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-center space-y-4">
          <div className="text-center space-y-4">
            <div className="text-4xl">📝</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Ready to start the quiz?</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• {quizData.questions.length} questions</p>
                <p>• {Math.floor(quizData.timeLimit / 60)} minutes time limit</p>
                <p>• {quizData.passingScore}% passing score</p>
                <p>• You can review your answers</p>
              </div>
            </div>
            <Button onClick={() => setQuizStarted(true)} className="w-full">
              Start Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const passed = score >= quizData.passingScore

    return (
      <Card className="h-[500px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Award className="h-5 w-5" />
            Quiz Results
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-center space-y-4">
          <div className="text-center space-y-4">
            <div className="text-4xl">{passed ? "🎉" : "📚"}</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{score}%</h3>
              <Badge
                className={`text-sm ${passed ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}`}
              >
                {passed ? "Passed" : "Failed"}
              </Badge>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                You answered{" "}
                {selectedAnswers.filter((answer, index) => answer === quizData.questions[index].correctAnswer).length}{" "}
                out of {quizData.questions.length} questions correctly.
              </p>
              {!passed && <p className="text-muted-foreground">Don't worry! Review the material and try again.</p>}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 bg-transparent">
                Review Answers
              </Button>
              <Button className="flex-1">{passed ? "Continue" : "Retry"}</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = quizData.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100

  return (
    <Card className="h-[500px] flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            Question {currentQuestion + 1} of {quizData.questions.length}
          </CardTitle>
          <div className="flex items-center gap-1 text-sm">
            <Clock className="h-4 w-4" />
            {formatTime(timeLeft)}
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-4">
        <div className="flex-1">
          <h3 className="font-medium mb-4">{question.question}</h3>

          <div className="space-y-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-3 border rounded-md transition-colors ${
                  selectedAnswers[currentQuestion] === index
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted/50"
                }`}
              >
                <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="bg-transparent"
          >
            Previous
          </Button>
          <Button onClick={handleNext} disabled={selectedAnswers[currentQuestion] === undefined}>
            {currentQuestion === quizData.questions.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
