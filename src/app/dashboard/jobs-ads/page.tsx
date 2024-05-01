import { JobAdForm } from "@/components/dashboard/job-ad-form"

function JobsAds() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">

          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Job Post
          </h1>
        
        </div>
        <JobAdForm />
      </div>
    </main>
  )
}

export default JobsAds