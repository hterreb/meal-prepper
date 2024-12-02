import React from 'react'
import { ArrowLeft, BookmarkPlus, Clock, Share2, Utensils } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="relative">
        <img
          src="/placeholder.svg?height=300&width=600"
          alt="Grilled Chicken Salad"
          className="w-full h-48 object-cover"
        />
        <Button variant="ghost" size="icon" className="absolute top-4 left-4 bg-white rounded-full">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h1 className="text-2xl font-bold text-white">Grilled Chicken Salad</h1>
          <div className="flex items-center text-white mt-2">
            <Clock className="w-4 h-4 mr-1" />
            <span className="mr-4">30 mins</span>
            <Utensils className="w-4 h-4 mr-1" />
            <span>4 servings</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <Badge>High Protein</Badge>
            <Badge>Low Carb</Badge>
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="icon">
              <BookmarkPlus className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="ingredients" className="mb-6">
          <TabsList>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          </TabsList>
          <TabsContent value="ingredients">
            <Card>
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
                <CardDescription>
                  Adjust servings:
                  <Slider
                    defaultValue={[4]}
                    max={8}
                    min={1}
                    step={1}
                    className="w-[60%] mt-2"
                  />
                  <span className="ml-2">4 servings</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>2 chicken breasts, grilled and sliced</li>
                  <li>4 cups mixed salad greens</li>
                  <li>1 cucumber, sliced</li>
                  <li>1 cup cherry tomatoes, halved</li>
                  <li>1/4 cup red onion, thinly sliced</li>
                  <li>1/4 cup feta cheese, crumbled</li>
                  <li>2 tbsp olive oil</li>
                  <li>1 tbsp balsamic vinegar</li>
                  <li>Salt and pepper to taste</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="instructions">
            <Card>
              <CardHeader>
                <CardTitle>Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Grill the chicken breasts until cooked through, then slice.</li>
                  <li>In a large bowl, combine mixed greens, cucumber, tomatoes, and red onion.</li>
                  <li>Add the sliced grilled chicken to the salad.</li>
                  <li>Sprinkle crumbled feta cheese over the salad.</li>
                  <li>In a small bowl, whisk together olive oil and balsamic vinegar.</li>
                  <li>Drizzle the dressing over the salad and toss gently to combine.</li>
                  <li>Season with salt and pepper to taste.</li>
                  <li>Serve immediately and enjoy your healthy Grilled Chicken Salad!</li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="nutrition">
            <Card>
              <CardHeader>
                <CardTitle>Nutrition Information</CardTitle>
                <CardDescription>Per serving (1/4 of recipe)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Calories</span>
                    <span className="font-semibold">320</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protein</span>
                    <span className="font-semibold">28g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbohydrates</span>
                    <span className="font-semibold">10g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fat</span>
                    <span className="font-semibold">20g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fiber</span>
                    <span className="font-semibold">3g</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="p-4 bg-white border-t border-gray-200">
        <Button className="w-full">Add to Meal Plan</Button>
      </div>
    </div>
  )
}