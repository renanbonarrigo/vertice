import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { BarChart, LineChart, PieChart, Users, DollarSign, TrendingUp, CheckCircle, Star } from 'lucide-react'

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Portfolio Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Add New Project
          </Button>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Total Projects</CardDescription>
                <CardTitle className="text-4xl">1,500</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+15.5% from last quarter</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Completed Projects</CardDescription>
                <CardTitle className="text-4xl">1,100</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">73% completion rate</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Average Project Value</CardDescription>
                <CardTitle className="text-4xl">$10K</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+5% from last year</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Client Retention</CardDescription>
                <CardTitle className="text-4xl">92%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">High client satisfaction</div>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="overview">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <LineChart className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">View Analytics</span>
                </Button>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <BarChart className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Generate Report</span>
                </Button>
              </div>
            </div>
            <TabsContent value="overview">
              <Card>
                <CardHeader className="px-7">
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>Overview of recently completed and ongoing projects.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>WP</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Website Redesign for CorpX</p>
                        <p className="text-sm text-muted-foreground">Status: Completed</p>
                      </div>
                      <div className="ml-auto font-medium text-sm">2 weeks ago</div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>MA</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Mobile App Development for InnovateCo</p>
                        <p className="text-sm text-muted-foreground">Status: In Progress</p>
                      </div>
                      <div className="ml-auto font-medium text-sm">1 month ago</div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>BC</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Branding Campaign for Global Brands</p>
                        <p className="text-sm text-muted-foreground">Status: Completed</p>
                      </div>
                      <div className="ml-auto font-medium text-sm">3 months ago</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Project Categories</CardTitle>
              <CardDescription>Distribution of projects across different service categories.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Web Development</span>
                  <Progress value={45} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Mobile App Development</span>
                  <Progress value={25} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Branding & Design</span>
                  <Progress value={20} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Digital Marketing</span>
                  <Progress value={10} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Project Milestones</CardTitle>
              <CardDescription>Upcoming and recently met project milestones.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Phase 1 Completion - Project Nova</p>
                    <p className="text-sm text-muted-foreground">Due: 2023-10-26</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Content Approval - E-commerce Site</p>
                    <p className="text-sm text-muted-foreground">Due: 2023-11-15</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Beta Launch - Social App</p>
                    <p className="text-sm text-muted-foreground">Due: 2023-12-01</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
