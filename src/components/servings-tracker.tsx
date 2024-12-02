import React from 'react'
import { ArrowLeft, Plus, Trash2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ServingsTracker() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Servings Tracker</h1>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Add New Serving */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add New Serving</CardTitle>
            <CardDescription>Track your prepared meals</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipe">Recipe</Label>
                <Select>
                  <SelectTrigger id="recipe">
                    <SelectValue placeholder="Select a recipe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grilled-chicken-salad">Grilled Chicken Salad</SelectItem>
                    <SelectItem value="vegetable-stir-fry">Vegetable Stir Fry</SelectItem>
                    <SelectItem value="beef-lasagna">Beef Lasagna</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="servings">Number of Servings</Label>
                <Input type="number" id="servings" placeholder="Enter number of servings" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storage">Storage Location</Label>
                <Select>
                  <SelectTrigger id="storage">
                    <SelectValue placeholder="Select storage location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fridge">Fridge</SelectItem>
                    <SelectItem value="freezer">Freezer</SelectItem>
                    <SelectItem value="pantry">Pantry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Serving
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Tracked Servings */}
        <Card>
          <CardHeader>
            <CardTitle>Tracked Servings</CardTitle>
            <CardDescription>Manage your prepared meals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Grilled Chicken Salad</h3>
                  <p className="text-sm text-gray-500">2 servings - Fridge</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Expires in 2 days</Badge>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Vegetable Stir Fry</h3>
                  <p className="text-sm text-gray-500">3 servings - Freezer</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Expires in 2 months</Badge>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Beef Lasagna</h3>
                  <p className="text-sm text-gray-500">1 serving - Fridge</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="destructive">Expires today</Badge>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}