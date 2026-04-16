import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-foreground">The page you’re looking for doesn’t exist.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-card px-5 py-3 text-sm font-medium text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
