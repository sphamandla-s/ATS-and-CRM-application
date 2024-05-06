import {
  Bird,
  Book,
  Bot,
  BriefcaseBusiness,
  Code2,
  CornerDownLeft,
  HardHat,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Search,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Timer,
  Triangle,
  Turtle,
  UsersRound,
} from "lucide-react"
import { format } from 'date-fns';


import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Jobs() {

  const jobOpenings = [
    {
      jobTitle: "Exploration Geologist",
      department: "Geology",
      applicants: 28,
      vacancies: 2,
      closingDate: new Date(2024, 4, 10), // May 10, 2024
    },
    {
      jobTitle: "Mine Surveyor",
      department: "Surveying",
      applicants: 72,
      vacancies: 3,
      closingDate: new Date(2024, 4, 15), // May 15, 2024
    },
    {
      jobTitle: "Process Engineer (Metallurgy)",
      department: "Processing",
      applicants: 41,
      vacancies: 1,
      closingDate: new Date(2024, 4, 20), // May 20, 2024
    },
    {
      jobTitle: "Environmental Specialist",
      department: "Environment",
      applicants: 35,
      vacancies: 4,
      closingDate: new Date(2024, 4, 25), // May 25, 2024
    },
    {
      jobTitle: "Blasting Technician",
      department: "Production",
      applicants: 100,
      vacancies: 8,
      closingDate: new Date(2024, 4, 30), // May 30, 2024
    },
    {
      jobTitle: "Geotechnical Engineer",
      department: "Engineering",
      applicants: 67,
      vacancies: 2,
      closingDate: new Date(2024, 5, 5), // June 5, 2024
    },
    {
      jobTitle: "Health and Safety Officer",
      department: "Safety",
      applicants: 82,
      vacancies: 1,
      closingDate: new Date(2024, 5, 10), // June 10, 2024
    },
    {
      jobTitle: "Drill Operator",
      department: "Production",
      applicants: 120,
      vacancies: 10,
      closingDate: new Date(2024, 5, 15), // June 15, 2024
    },
    {
      jobTitle: "Mining Analyst",
      department: "Finance",
      applicants: 38,
      vacancies: 3,
      closingDate: new Date(2024, 5, 20), // June 20, 2024
    },
    {
      jobTitle: "Human Resources Specialist (Mining Industry)",
      department: "Human Resources",
      applicants: 55,
      vacancies: 2,
      closingDate: new Date(2024, 5, 25), // June 25, 2024
    },
  ];



  return (

    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
      >
        <form className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Search
            </legend>

            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search Jobs..."
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="temperature">Temperature</Label>
              <Input id="temperature" type="number" placeholder="0.4" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="top-p">Top P</Label>
                <Input id="top-p" type="number" placeholder="0.7" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="top-k">Top K</Label>
                <Input id="top-k" type="number" placeholder="0.0" />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Messages
            </legend>
            <div className="grid gap-3">
              <Label htmlFor="role">Role</Label>
              <Select defaultValue="system">
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="system">System</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="assistant">Assistant</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="You are a..."
                className="min-h-[9.5rem]"
              />
            </div>
          </fieldset>
        </form>
      </div>
      <div className=" grid gap-4 lg:grid-cols-2 lg:gap-4 rounded-xl bg-muted/50 p-4 lg:col-span-2">
        {jobOpenings.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
              <div className=" flex items-center gap-4">
                <div

                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors  md:h-8 md:w-8 bg-primary text-lg font-semibold text-primary-foreground hover:text-muted-foreground`}
                >
                  <HardHat className="h-5 w-5" />
                </div>
                <div>
                  <h4>{item.jobTitle}</h4>
                  <p>{item.department}</p>
                </div>
              </div>
              <div className=" mt-3 flex flex-col gap-2">
                <div className=" flex items-center gap-4 text-gray-500">
                  <UsersRound />
                  <p> Applicants: {item.applicants}</p>
                </div>
                <div className=" flex items-center gap-4 text-gray-500">
                  <BriefcaseBusiness />
                  <p>Vacancies: {item.vacancies}</p>
                </div>
                <div className=" flex items-center gap-4 text-gray-500">
                  <Timer />
                  <p>Closing Date: {format(item.closingDate, 'MMMM dd, yyyy')}</p>
                </div>
                <Button>
                  More Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

      </div>
    </main>
  )
}
