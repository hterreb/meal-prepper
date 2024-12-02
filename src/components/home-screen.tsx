import React from 'react'
import { Bell, BookOpen, Calendar, Home, Search, Settings, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-white">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1 mx-4">
          <Input type="text" placeholder="Search recipes, ingredients..." className="w-full" />
        </div>
        <Bell className="text-gray-500" />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Meal of the Day */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Meal of the Day</CardTitle>
            <CardDescription>Try something new today!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video relative rounded-md overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Grilled Chicken Salad"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h3 className="text-lg font-semibold">Grilled Chicken Salad</h3>
                <p className="text-sm">High protein, low carb</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Recipe</Button>
          </CardFooter>
        </Card>

        {/* Quick Planner */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Quick Planner</CardTitle>
            <CardDescription>Your upcoming meals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Today</span>
              <Button variant="ghost" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Breakfast</span>
                <Badge>Oatmeal with Berries</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Lunch</span>
                <Badge>Grilled Chicken Salad</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Dinner</span>
                <Badge variant="outline">Not planned</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expiring Soon */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Expiring Soon</CardTitle>
            <CardDescription>Use these items quickly!</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Spinach</span>
                <Badge variant="destructive">Expires today</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span>Chicken Breast</span>
                <Badge variant="warning">Expires in 2 days</Badge>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All</Button>
          </CardFooter>
        </Card>

        {/* Recipe Categories */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <img
                src="/placeholder.svg?height=100&width=200"
                alt="Quick Meals"
                className="rounded-md mb-2"
              />
              <h3 className="font-semibold">Quick Meals</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img
                src="/placeholder.svg?height=100&width=200"
                alt="Vegetarian"
                className="rounded-md mb-2"
              />
              <h3 className="font-semibold">Vegetarian</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img
                src="/placeholder.svg?height=100&width=200"
                alt="High Protein"
                className="rounded-md mb-2"
              />
              <h3 className="font-semibold">High Protein</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img
                src="/placeholder.svg?height=100&width=200"
                alt="Low Carb"
                className="rounded-md mb-2"
              />
              <h3 className="font-semibold">Low Carb</h3>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center p-4 bg-white border-t border-gray-200">
        <Button variant="ghost" size="icon">
          <Home className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <BookOpen className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Calendar className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}