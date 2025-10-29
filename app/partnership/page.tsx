import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Handshake, Users, DollarSign, TrendingUp, CheckCircle, Star } from 'lucide-react'

export default function PartnershipPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2">
          <Handshake className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Partnership Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Add New Partner
          </Button>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Total Partners</CardDescription>
                <CardTitle className="text-4xl">50+</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+5 new partners this month</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Joint Projects</CardDescription>
                <CardTitle className="text-4xl">120</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+10% from last quarter</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Revenue Share</CardDescription>
                <CardTitle className="text-4xl">$2.5M</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+18% from last year</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Partner Satisfaction</CardDescription>
                <CardTitle className="text-4xl">96%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">Based on annual surveys</div>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="overview">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="agreements">Agreements</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">View Performance</span>
                </Button>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Handshake className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Manage Agreements</span>
                </Button>
              </div>
            </div>
            <TabsContent value="overview">
              <Card>
                <CardHeader className="px-7">
                  <CardTitle>Active Partnerships</CardTitle>
                  <CardDescription>Overview of current active partnerships.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Acme Solutions</p>
                        <p className="text-sm text-muted-foreground">Type: Technology Partner</p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="secondary">Tier 1</Badge>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>GS</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Global Marketing Agency</p>
                        <p className="text-sm text-muted-foreground">Type: Marketing Partner</p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="secondary">Tier 2</Badge>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>IT</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Innovate Consulting</p>
                        <p className="text-sm text-muted-foreground">Type: Consulting Partner</p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="secondary">Tier 1</Badge>
                      </div>
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
              <CardTitle>Partnership Tiers</CardTitle>
              <CardDescription>Distribution of partners across different tiers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Tier 1 (Strategic)</span>
                  <Progress value={50} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">50%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Tier 2 (Growth)</span>
                  <Progress value={30} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Tier 3 (Associate)</span>
                  <Progress value={20} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">20%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Renewals</CardTitle>
              <CardDescription>Partnership agreements due for renewal soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Acme Solutions</p>
                    <p className="text-sm text-muted-foreground">Renewal Date: 2023-11-30</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Innovate Consulting</p>
                    <p className="text-sm text-muted-foreground">Renewal Date: 2023-12-15</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Tech Solutions Co.</p>
                    <p className="text-sm text-muted-foreground">Renewal Date: 2024-01-05</p>
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
