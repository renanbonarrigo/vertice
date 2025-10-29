import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { BarChart, LineChart, PieChart, Users, DollarSign, TrendingUp, CheckCircle } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2">
          <BarChart className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            View Reports
          </Button>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-4xl">$45,231.89</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+20.1% from last month</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Subscriptions</CardDescription>
                <CardTitle className="text-4xl">+2350</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+180.1% from last month</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Sales</CardDescription>
                <CardTitle className="text-4xl">12,234</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+19% from last month</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Active Now</CardDescription>
                <CardTitle className="text-4xl">573</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+201 since last hour</div>
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
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>You made 265 sales this month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>OM</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Olivia Martin</p>
                        <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
                      </div>
                      <div className="ml-auto font-medium">+$1,999.00</div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>JL</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Jackson Lee</p>
                        <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
                      </div>
                      <div className="ml-auto font-medium">+$39.00</div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Sofia Miller</p>
                        <p className="text-sm text-muted-foreground">sofia.miller@email.com</p>
                      </div>
                      <div className="ml-auto font-medium">+$2,000.00</div>
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
              <CardTitle>Subscription Plans</CardTitle>
              <CardDescription>Breakdown of active subscriptions by plan type.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Pro Plan</span>
                  <Progress value={60} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Business Plan</span>
                  <Progress value={25} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Basic Plan</span>
                  <Progress value={15} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">15%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Revenue by Source</CardTitle>
              <CardDescription>Distribution of revenue across different channels.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Direct Sales</p>
                    <p className="text-sm text-muted-foreground">50% of total revenue</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5 text-blue-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Referrals</p>
                    <p className="text-sm text-muted-foreground">30% of total revenue</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Online Ads</p>
                    <p className="text-sm text-muted-foreground">20% of total revenue</p>
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
