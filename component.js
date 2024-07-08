/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CbaBgCaVwMP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="flex items-center justify-between px-4 py-3 bg-background shadow">
        <Link href="#" className="text-xl font-bold" prefetch={false}>
          John Doe
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-background">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Projects
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <img
                src="/placeholder.svg"
                width="400"
                height="400"
                alt="John Doe"
                className="mx-auto rounded-full w-40 h-40 object-cover"
              />
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-3xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">Software Engineer, Designer, and Photographer</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Hello! I'm John Doe, a passionate software engineer, designer, and photographer. I love creating
                beautiful and functional digital experiences. Check out some of my recent projects below.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Projects
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Recent Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the projects I've been working on recently.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-4">
                      <Card className="h-full">
                        <CardHeader>
                          <img
                            src="/placeholder.svg"
                            width="400"
                            height="200"
                            alt="Project 1"
                            className="rounded-t-lg object-cover"
                          />
                        </CardHeader>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold">Project 1</h3>
                          <p className="text-muted-foreground">A web application for managing tasks and projects.</p>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                          <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                          >
                            View Project
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-4">
                      <Card className="h-full">
                        <CardHeader>
                          <img
                            src="/placeholder.svg"
                            width="400"
                            height="200"
                            alt="Project 2"
                            className="rounded-t-lg object-cover"
                          />
                        </CardHeader>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold">Project 2</h3>
                          <p className="text-muted-foreground">A mobile app for tracking fitness activities.</p>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                          <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                          >
                            View Project
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-4">
                      <Card className="h-full">
                        <CardHeader>
                          <img
                            src="/placeholder.svg"
                            width="400"
                            height="200"
                            alt="Project 3"
                            className="rounded-t-lg object-cover"
                          />
                        </CardHeader>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold">Project 3</h3>
                          <p className="text-muted-foreground">A web-based photo editing tool.</p>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                          <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                          >
                            View Project
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

