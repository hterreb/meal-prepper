import React from 'react'
import { ArrowLeft, Plus, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PantryInventory() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Pantry Inventory</h1>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Search and Add */}
        <div className="flex space-x-2 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Search inventory" className="pl-8" />
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>

        {/* Inventory Tabs */}
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="fridge">Fridge</TabsTrigger>
            <TabsTrigger value="freezer">Freezer</TabsTrigger>
            <TabsTrigger value="pantry">Pantry</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>All Items</CardTitle>
                <CardDescription>View and manage your entire inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Chicken Breast</h3>
                      <p className="text-sm text-gray-500">2 lbs - Fridge</p>
                    </div>
                    <Badge>Expires in 3 days</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Mixed Vegetables</h3>
                      <p className="text-sm text-gray-500">1 bag - Freezer</p>
                    </div>
                    <Badge>Expires in 2 months</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Pasta</h3>
                      <p className="text-sm text-gray-500">2 boxes - Pantry</p>
                    </div>
                    <Badge>Expires in 6 months</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Milk</h3>
                      <p className="text-sm text-gray-500">1 gallon - Fridge</p>
                    </div>
                    <Badge variant="destructive">Expires tomorrow</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          {/* Similar structure for fridge, freezer, and pantry tabs */}
        </Tabs>
      </div>
    </div>
  )
}