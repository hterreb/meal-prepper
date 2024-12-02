import React from 'react'
import { ArrowLeft, Check, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function GroceryList() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Grocery List</h1>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Add New Item */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add New Item</CardTitle>
            <CardDescription>Add items to your grocery list</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex items-center space-x-2">
              <div className="flex-1">
                <Label htmlFor="item" className="sr-only">New Item</Label>
                <Input type="text" id="item" placeholder="Enter item name" />
              </div>
              <Button type="submit">
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Grocery List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Grocery List</CardTitle>
            <CardDescription>Items to buy on your next shopping trip</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="item1" />
                <label
                  htmlFor="item1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Chicken breast (2 lbs)
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="item2" />
                <label
                  htmlFor="item2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mixed salad greens
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="item3" />
                <label
                  htmlFor="item3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cherry tomatoes
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="item4" />
                <label
                  htmlFor="item4"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Feta cheese
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="item5" />
                <label
                  htmlFor="item5"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Olive oil
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Mark All as Purchased
            </Button>
            <Button variant="outline">
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Completed
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}