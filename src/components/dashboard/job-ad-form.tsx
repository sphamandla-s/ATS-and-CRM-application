"use client"

import { format } from "date-fns"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { string, z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, X } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import Tiptap from "../Tiptap"
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog"
import FromPreview from "./form-preview"
import { useState } from "react"

const formSchema = z.object({
  post: z.string().min(2, {
    message: "post must be at least 2 characters.",
  }),
  department: z.string().min(2, {
    message: "department must be at least 2 characters.",
  }),
  posting: z.string().min(2, {
    message: "posting number must be at least 2 characters.",
  }),
  description: z.string().min(20, {
    message: "description must be at least 20 characters.",
  }),
  requirements: z.array(z.string()),
  visibility: z
    .string({
      required_error: "Please select an Job visibility.",
    }),
  type: z
    .string({
      required_error: "Please select an Job Type.",
    }),
  closing: z.date({
    required_error: "Closing date is required.",
  }),
})

export function JobAdForm() {
  const [previewValues, setPreviewValues] = useState<z.infer<typeof formSchema>>();
  const [requirements, setRequirements] = useState<string[]>([]);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      post: "",
      department: "",
      description: "",
      posting: "",
      type: "",
      requirements: [],
      closing: new Date(),

    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  const onPreview = () => {
    form.handleSubmit((values) => {
      setPreviewValues(values);
    })();
  };

  // Function to add a requirement tag
  const handleAddRequirement = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newRequirement = e.currentTarget.value.trim();
      if (newRequirement) {
        setRequirements([...requirements, newRequirement]);
        form.setValue("requirements", [...requirements, newRequirement]);
        e.currentTarget.value = ""; // Clear the input field after adding
      }
    }
  };


  // Function to remove a requirement tag
  const handleRemoveRequirement = (requirement: string) => {
    const updatedRequirements = requirements.filter((req) => req !== requirement);
    setRequirements(updatedRequirements);
    form.setValue("requirements", updatedRequirements);
  };


  return (
    <Form {...form}>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Posting Details</CardTitle>
                <CardDescription>
                  Give details about the job
                </CardDescription>
              </CardHeader>
              <CardContent>

                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <FormField
                        control={form.control}
                        name="post"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Position</FormLabel>
                            <FormControl>
                              <Input
                                id="name"
                                type="text"
                                className="w-full"
                                placeholder="eg : Operator - ADT"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Department</FormLabel>
                            <FormControl>
                              <Input
                                id="name"
                                type="text"
                                className="w-full"
                                placeholder="eg : Mining"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <FormField
                        control={form.control}
                        name="posting"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Posting Number</FormLabel>
                            <FormControl>
                              <Input
                                id="name"
                                type="text"
                                className="w-full"
                                placeholder="eg : T001"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger id="status" aria-label="Select status">
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="full-time">Full Time</SelectItem>
                                <SelectItem value="part-time">Part Time</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="requirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Requirements</FormLabel>
                          <div className="flex flex-wrap gap-1">
                            {requirements.map((requirement) => (
                              <span id="badge-dismiss-green" className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300">
                                {requirement}
                                <button onClick={() => handleRemoveRequirement(requirement)} type="button" className="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300" data-dismiss-target="#badge-dismiss-green" aria-label="Remove">
                                  <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                  </svg>
                                  <span className="sr-only">Remove badge</span>
                                </button>
                              </span>
                            ))}
                            <Input
                              type="text"
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none"
                              placeholder="Add requirement"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleAddRequirement(e);
                                }
                              }}
                            />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}


                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Post Description</FormLabel>
                          <FormControl>
                            <Tiptap description={field.name} onChange={field.onChange} />

                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle>Post Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="visibility"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Post Availability</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger id="status" aria-label="Select status">
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="external">External</SelectItem>
                              <SelectItem value="internal">Internal</SelectItem>
                              <SelectItem value="external/internal">External/Internal</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
            >
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="closing"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Closing date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date()
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-start gap-10 mt-5">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" type="button" onClick={onPreview}>
                Preview
              </Button>
            </AlertDialogTrigger>
            <FromPreview values={previewValues!} />
          </AlertDialog>
          <Button type="submit" size="sm">Post Job</Button>
        </div>
      </form>
    </Form>
  )
}

