import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { BarChart, LineChart, PieChart, Users, DollarSign, TrendingUp, CheckCircle, Star } from 'lucide-react'

export default function ClientelePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Clientele Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Add New Client
          </Button>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Total Clients</CardDescription>
                <CardTitle className="text-4xl">2,350</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+20.1% from last month</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Active Projects</CardDescription>
                <CardTitle className="text-4xl">1,234</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+15.3% from last month</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Revenue Generated</CardDescription>
                <CardTitle className="text-4xl">$1.5M</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+10.5% from last month</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Client Satisfaction</CardDescription>
                <CardTitle className="text-4xl">98%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">Based on recent surveys</div>
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
                  <CardTitle>Recent Client Activity</CardTitle>
                  <CardDescription>Overview of recent client interactions and project updates.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-sm text-muted-foreground">Project Alpha - Design Phase</p>
                      </div>
                      <div className="ml-auto font-medium text-sm">2 days ago</div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Jane Smith</p>
                        <p className="text-sm text-muted-foreground">Marketing Campaign - Launched</p>
                      </div>
                      <div className="ml-auto font-medium text-sm">1 week ago</div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>RB</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Robert Brown</p>
                        <p className="text-sm text-muted-foreground">Website Redesign - Feedback Awaited</p>
                      </div>
                      <div className="ml-auto font-medium text-sm">3 weeks ago</div>
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
              <CardTitle>Client Segmentation</CardTitle>
              <CardDescription>Breakdown of clients by various segments.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Enterprise</span>
                  <Progress value={40} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Small Business</span>
                  <Progress value={30} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Startup</span>
                  <Progress value={20} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Non-Profit</span>
                  <Progress value={10} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Top Performing Clients</CardTitle>
              <CardDescription>Clients with highest engagement and revenue.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Acme Corp</p>
                    <p className="text-sm text-muted-foreground">Revenue: $500K</p>
                  </div>
                  <div className="ml-auto">
                    <Badge variant="secondary">Platinum</Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>GS</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Global Solutions</p>
                    <p className="text-sm text-muted-foreground">Revenue: $350K</p>
                  </div>
                  <div className="ml-auto">
                    <Badge variant="secondary">Gold</Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/06.png" alt="Avatar" />
                    <AvatarFallback>IT</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Innovate Tech</p>
                    <p className="text-sm text-muted-foreground">Revenue: $200K</p>
                  </div>
                  <div className="ml-auto">
                    <Badge variant="secondary">Silver</Badge>
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
