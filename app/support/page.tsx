import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { LifeBuoy, Ticket, MessageSquare, Phone, Mail, CheckCircle, XCircle, Clock } from 'lucide-react'

export default function SupportPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2">
          <LifeBuoy className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Support Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Create New Ticket
          </Button>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Open Tickets</CardDescription>
                <CardTitle className="text-4xl">124</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+10% from last week</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Resolved Tickets</CardDescription>
                <CardTitle className="text-4xl">876</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+5% from last week</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Average Resolution Time</CardDescription>
                <CardTitle className="text-4xl">4h 30m</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">-1h from last month</div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-1">
              <CardHeader className="pb-2">
                <CardDescription>Customer Satisfaction</CardDescription>
                <CardTitle className="text-4xl">95%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">Based on recent feedback</div>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="open">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="open">Open Tickets</TabsTrigger>
                <TabsTrigger value="resolved">Resolved Tickets</TabsTrigger>
                <TabsTrigger value="all">All Tickets</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Ticket className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                </Button>
              </div>
            </div>
            <TabsContent value="open">
              <Card>
                <CardHeader className="px-7">
                  <CardTitle>Open Support Tickets</CardTitle>
                  <CardDescription>Tickets currently awaiting resolution.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Ticket className="h-5 w-5 text-blue-500" />
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Issue with API Integration</p>
                        <p className="text-sm text-muted-foreground">Client: Acme Corp</p>
                      </div>
                      <div className="ml-auto font-medium text-sm">Priority: High</div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Ticket className="h-5 w-5 text-blue-500" />
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Website Loading Slow</p>
                        <p className="text-sm text-muted-foreground">Client: Global Solutions</p>
                      </div>
                      <div className="ml-auto font-medium text-sm">Priority: Medium</div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Ticket className="h-5 w-5 text-blue-500" />
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Feature Request: Dark Mode</p>
                        <p className="text-sm text-muted-foreground">Client: Innovate Tech</p>
                      </div>
                      <div className="ml-auto font-medium text-sm">Priority: Low</div>
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
              <CardTitle>Support Channels</CardTitle>
              <CardDescription>Ways clients can reach out for support.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Live Chat</span>
                  </div>
                  <Badge variant="secondary">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Email Support</span>
                  </div>
                  <Badge variant="secondary">24/7</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Phone Support</span>
                  </div>
                  <Badge variant="secondary">9 AM - 5 PM EST</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Support Team Activity</CardTitle>
              <CardDescription>Recent actions by support agents.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Agent Sarah</p>
                    <p className="text-sm text-muted-foreground">Resolved Ticket #1234</p>
                  </div>
                  <div className="ml-auto font-medium text-sm">10 min ago</div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Agent Mark</p>
                    <p className="text-sm text-muted-foreground">Replied to Ticket #1235</p>
                  </div>
                  <div className="ml-auto font-medium text-sm">30 min ago</div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>LT</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Agent Lisa</p>
                    <p className="text-sm text-muted-foreground">Opened New Ticket #1236</p>
                  </div>
                  <div className="ml-auto font-medium text-sm">1 hour ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
