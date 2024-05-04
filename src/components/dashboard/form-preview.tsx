
import React from 'react'
import { format } from 'date-fns';
import { Pickaxe, TicketSlash } from "lucide-react";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from '../ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider } from '../ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';


type FormValues = {
    description: string;
    type: string;
    post: string;
    department: string;
    posting: string;
    requirements: string[];
    closing: Date;
    visibility: string;
    positions: string;
};





function FromPreview({ values }: { values: FormValues }) {
    if (!values) return null;

    return (
        <DialogContent className="max-w-[1000px] overflow-auto  rounded-md shadow-md">
            <DialogHeader>
                <DialogTitle>Post Preview</DialogTitle>
                <DialogDescription>
                    Preview the form before posting it
                </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[80vh] w-full ">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3">

                            <div
                                className="group flex h-12 w-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground  md:text-base"
                            >
                                <Pickaxe className="h-6 w-6 transition-all group-hover:scale-110" />
                                <span className="sr-only">Acme Inc</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">{values.post} {" "}
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span className="cursor-pointer bg-green-100 text-green-800  font-medium me-2 px-1 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                    x<strong>{values.positions}</strong>
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent side="right">Number of positions available</TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </h1>
                                <p className="text-gray-600 dark:text-gray-200">{values.department}</p>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-4">
                            <div>
                                <dt className="text-sm text-gray-500 dark:text-gray-200 uppercase ">Posting Ref:</dt>
                                <dd className="text-lg font-medium">{values.posting}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-gray-500 dark:text-gray-200 uppercase">Post Visibility:</dt>
                                <dd className="text-lg font-medium">{values.visibility}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-gray-500 dark:text-gray-200 uppercase">Post Type:</dt>
                                <dd className="text-lg font-medium">{values.type}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-red-800 uppercase">Closing Date:</dt>
                                <dd className="text-lg font-medium">{format(values.closing, 'MMMM dd, yyyy')}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">Description</h1>
                        <p className="description-textarea text-gray-700 dark:text-gray-200">
                            <div dangerouslySetInnerHTML={{ __html: values.description }} />
                        </p>
                        <h1 className="text-2xl font-bold">Requirements</h1>
                        <ul className="list-disc ml-8 text-gray-700 dark:text-gray-200">
                            {values.requirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </ScrollArea>
        </DialogContent>
    );
}

export default FromPreview;