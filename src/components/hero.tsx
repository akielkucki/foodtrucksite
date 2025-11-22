import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ui/form";

export default function Hero() {
  return (
    <>
      <section className="relative w-full bg-white">
        {/* Hero Image Section */}
        <div className="relative h-[500px] w-full overflow-hidden bg-[#EDEDED] sm:h-[600px]">
          {/* Placeholder for hero image - replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8A8A8A]/20 to-[#8A8A8A]/10">
            <div className="text-center text-[#8A8A8A]">
              {/* Replace this div with actual Image component when you have the photo */}
              <Image src={"/heroalt.jpg"} alt={"Hero Image"} fill className={"object-cover"}/>
              <p className="mt-2 text-sm">Food truck parts image placeholder</p>
            </div>
          </div>

          {/* Overlay content - positioned on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
            <div className="mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Quality Food Truck Parts & Service{" "}
                  <span className="text-[#F5A623]">Since 1999</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
                  Everything you need to keep your mobile kitchen running at peak
                  performance.
                </p>

                {/* Quick CTAs */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <Link
                    href="/parts"
                    className="rounded-lg bg-[#D6452F] px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-all hover:bg-[#952d1d] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6452F]"
                  >
                    View Parts
                  </Link>
                  <Link
                    href="/quote"
                    className="rounded-lg border-2 border-white bg-white/10 px-8 py-3.5 text-center text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - absolutely positioned on the right */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[400px] max-w-[90vw] hidden lg:block">
            <ContactForm/>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <Benefits/>
    </>
  );
}
function Benefits() {
  return <div className="w-full px-6 py-16 lg:px-8 lg:py-24 bg-white">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Benefit 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDEDED]">
            <svg className="h-8 w-8 text-[#D6452F]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#2F2F2F]">
            Everything You Need
          </h3>
          <p className="text-sm text-[#8A8A8A]">
            Complete inventory of parts and equipment for your food truck
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDEDED]">
            <svg className="h-8 w-8 text-[#F5A623]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#2F2F2F]">
            Fast Shipping
          </h3>
          <p className="text-sm text-[#8A8A8A]">
            Quick turnaround on orders to minimize your downtime
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDEDED]">
            <svg className="h-8 w-8 text-[#D6452F]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#2F2F2F]">
            Expert Support
          </h3>
          <p className="text-sm text-[#8A8A8A]">
            Knowledgeable team ready to help you find the right parts
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDEDED]">
            <svg className="h-8 w-8 text-[#F5A623]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#2F2F2F]">
            Trusted Since 1999
          </h3>
          <p className="text-sm text-[#8A8A8A]">
            25+ years of experience serving the food truck industry
          </p>
        </div>
      </div>
    </div>
}