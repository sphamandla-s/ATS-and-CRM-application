import { MoreHorizontal, } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"

const data = [
    {
        "CandidateName": "Thabo Molefe",
        "Status": "Scheduled",
        "JobTitle": "Junior Mining Engineer",
        "Department": "Engineering",
        "InterviewDateTime": "2024-05-10 10:00:00"
    },
    {
        "CandidateName": "Nomthandazo Mbatha",
        "Status": "Confirmed",
        "JobTitle": "Geologist",
        "Department": "Geology",
        "InterviewDateTime": "2024-05-11 11:30:00"
    },
    {
        "CandidateName": "Sipho Khumalo",
        "Status": "Scheduled",
        "JobTitle": "Mine Surveyor",
        "Department": "Surveying",
        "InterviewDateTime": "2024-05-12 09:45:00"
    },
    {
        "CandidateName": "Lerato Nkosi",
        "Status": "Confirmed",
        "JobTitle": "Environmental Officer",
        "Department": "Environmental",
        "InterviewDateTime": "2024-05-13 14:00:00"
    },
    {
        "CandidateName": "Bongani Sithole",
        "Status": "Scheduled",
        "JobTitle": "Mining Technician",
        "Department": "Technician",
        "InterviewDateTime": "2024-05-14 10:30:00"
    },
    {
        "CandidateName": "Noluthando Zulu",
        "Status": "Scheduled",
        "JobTitle": "Safety Officer",
        "Department": "Safety",
        "InterviewDateTime": "2024-05-15 11:00:00"
    },
    {
        "CandidateName": "Thabiso Mahlangu",
        "Status": "Confirmed",
        "JobTitle": "Mining Geotechnician",
        "Department": "Geotechnical",
        "InterviewDateTime": "2024-05-16 13:15:00"
    },
    {
        "CandidateName": "Zanele Ngwenya",
        "Status": "Scheduled",
        "JobTitle": "Mining Engineer",
        "Department": "Engineering",
        "InterviewDateTime": "2024-05-17 09:00:00"
    },
    {
        "CandidateName": "Sanele Dlamini",
        "Status": "Scheduled",
        "JobTitle": "Safety Supervisor",
        "Department": "Safety",
        "InterviewDateTime": "2024-05-18 12:45:00"
    },
    {
        "CandidateName": "Nompilo Mabaso",
        "Status": "Confirmed",
        "JobTitle": "Mine Planner",
        "Department": "Planning",
        "InterviewDateTime": "2024-05-19 14:30:00"
    }
]



export function InterviewsTable() {
    return (

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Upcoming Interviews</CardTitle>
                    <CardDescription>
                        Upcoming Interviews sorted by date descending
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Candidate Name</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Job Title
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Department
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Interview Date & Time
                                </TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        {item.CandidateName}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {item.JobTitle}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {item.Department}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {item.InterviewDateTime}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{item.Status}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    aria-haspopup="true"
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className=" flex justify-between items-baseline">
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        Interviews
                    </div>
                    <Button asChild><Link href="dashboard/placement">View More</Link></Button>
                    
                </CardFooter>
            </Card>
        </main>


    )
}
