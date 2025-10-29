import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Projects Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Add New Project
          </Button>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Projects</CardDescription>
              <CardTitle className="text-4xl">1,500</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+15.5% from last quarter</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Completed Projects</CardDescription>
              <CardTitle className="text-4xl">1,100</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">73% completion rate</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Average Project Value</CardDescription>
              <CardTitle className="text-4xl">$10K</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+8% from last quarter</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Clients</CardDescription>
              <CardTitle className="text-4xl">450</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+12% from last quarter</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>Your latest project activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Website Redesign", client: "Tech Corp", status: "In Progress", value: "$15,000" },
                  { name: "Mobile App Development", client: "StartUp Inc", status: "Completed", value: "$25,000" },
                  { name: "Brand Identity", client: "Fashion Co", status: "In Progress", value: "$8,000" },
                  { name: "E-commerce Platform", client: "Retail Ltd", status: "Planning", value: "$30,000" },
                ].map((project, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="space-y-1">
                      <p className="font-medium">{project.name}</p>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                      <p className="font-semibold">{project.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
