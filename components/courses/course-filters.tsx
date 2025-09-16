"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface CourseFiltersProps {
  onFiltersChange?: (filters: string[]) => void
}

export function CourseFilters({ onFiltersChange }: CourseFiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const filterCategories = [
    {
      title: "Category",
      options: ["Computer Science", "Business", "Finance", "Language", "Mathematics", "Engineering"],
    },
    {
      title: "Level",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      title: "Duration",
      options: ["1-4 weeks", "5-8 weeks", "9-12 weeks", "12+ weeks"],
    },
    {
      title: "Data Usage",
      options: ["Low", "Medium", "High"],
    },
    {
      title: "Features",
      options: ["Offline Available", "Live Sessions", "Certificates", "Assignments"],
    },
  ]

  const toggleFilter = (filter: string) => {
    const newFilters = selectedFilters.includes(filter) 
      ? selectedFilters.filter((f) => f !== filter) 
      : [...selectedFilters, filter]
    setSelectedFilters(newFilters)
    onFiltersChange?.(newFilters)
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
    onFiltersChange?.([])
  }

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <button onClick={clearAllFilters} className="text-xs text-muted-foreground hover:text-foreground">
                Clear All
              </button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="text-xs cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filter Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {filterCategories.map((category, index) => (
            <div key={category.title}>
              <h4 className="font-medium mb-3">{category.title}</h4>
              <div className="space-y-2">
                {category.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={selectedFilters.includes(option)}
                      onCheckedChange={() => toggleFilter(option)}
                    />
                    <Label htmlFor={option} className="text-sm font-normal cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
              {index < filterCategories.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
