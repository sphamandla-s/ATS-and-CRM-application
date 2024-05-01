import { HardHat, Home, Megaphone, Tv2, UserRoundPlus, UsersRound } from "lucide-react";


 {/* <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/dashboard/jobs"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <HardHat className="h-5 w-5" />
                                    <span className="sr-only">Jobs</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Jobs</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Job Ads</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/dashboard/application"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Tv2 className="h-5 w-5" />
                                    <span className="sr-only">Application</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Application</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/dashboard/candidates"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <UsersRound className="h-5 w-5" />
                                    <span className="sr-only">Candidates</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Candidates</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/dashboard/placement"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <UserRoundPlus className="h-5 w-5" />
                                    <span className="sr-only">Placement</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Placement</TooltipContent>
                        </Tooltip> */}


export const DASHBOARD_LINKS = [
    {
        title: "Overview",
        href: "/dashboard",
        icon: Home,
    },
    {
        title: "Jobs",
        href : "/dashboard/jobs",
        icon: HardHat,
    }, 
  
    {
        title: "Job Ads",
        href: "/dashboard/jobs-ads",
        icon: Megaphone,
    },
 
    {
        title: "Application",
        href: "/dashboard/application",
        icon: Tv2,
    },

    {
        title: "Candidates",
        href: "/dashboard/candidates",
        icon: UsersRound,
    }, 

    {
        title: "Placement",
        href: "/dashboard/placement",
        icon: UserRoundPlus,
    },
]