import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Globe, TrendingUp, Zap, Users, Target, CheckCircle, Star } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Services Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Add New Service
          </Button>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Total Services</CardDescription>
                <CardTitle className="text-4xl">12</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+2 new services this quarter</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Most Popular</CardDescription>
                <CardTitle className="text-4xl">Web Dev</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">500+ projects</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Avg. Client Rating</CardDescription>
                <CardTitle className="text-4xl">4.7</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">Across all services</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Revenue Share</CardDescription>
                <CardTitle className="text-4xl">30%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">From top 3 services</div>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="overview">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">View Performance</span>
                </Button>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Zap className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Optimize Services</span>
                </Button>
              </div>
            </div>
            <TabsContent value="overview">
              <Card>
                <CardHeader className="px-7">
                  <CardTitle>Service Offerings</CardTitle>
                  <CardDescription>Detailed list of all services provided.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Globe className="h-6 w-6 text-blue-500" />
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Website Development</p>
                        <p className="text-sm text-muted-foreground">Custom websites, e-commerce, landing pages.</p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="secondary">Active</Badge>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <TrendingUp className="h-6 w-6 text-green-500" />
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Digital Marketing</p>
                        <p className="text-sm text-muted-foreground">SEO, SEM, Social Media, Content Marketing.</p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="secondary">Active</Badge>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Zap className="h-6 w-6 text-purple-500" />
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Cloud Solutions</p>
                        <p className="text-sm text-muted-foreground">Cloud migration, infrastructure, optimization.</p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="secondary">Active</Badge>
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
              <CardTitle>Service Performance</CardTitle>
              <CardDescription>Revenue and client distribution per service.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Website Dev</span>
                  <Progress value={40} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Digital Marketing</span>
                  <Progress value={30} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Cloud Solutions</span>
                  <Progress value={20} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Other Services</span>
                  <Progress value={10} className="w-[60%]" />
                  <span className="text-sm text-muted-foreground">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Client Testimonials</CardTitle>
              <CardDescription>Recent feedback from clients on our services.</CardDescription>
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
                    <p className="text-sm text-muted-foreground">"Excellent website development service!"</p>
                  </div>
                  <div className="ml-auto">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Jane Smith</p>
                    <p className="text-sm text-muted-foreground">"Digital marketing campaigns delivered great ROI."</p>
                  </div>
                  <div className="ml-auto">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>RB</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Robert Brown</p>
                    <p className="text-sm text-muted-foreground">"Smooth cloud migration process."</p>
                  </div>
                  <div className="ml-auto">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
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
