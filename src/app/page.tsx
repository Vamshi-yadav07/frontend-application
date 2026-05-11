import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-12 py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-4">
          <Image
            className="dark:invert mb-4"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={36}
            priority
          />
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white text-center">
            Next.js + Docker
          </h1>
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">
            Deploy to Azure — Complete Guide
          </h2>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 text-center">
            From Zero to Live Website
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8">
          <a
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-blue-600 text-white px-8 text-lg transition-all hover:bg-blue-700 hover:scale-105 md:w-auto"
            href="#"
          >
            Get Started
          </a>
          <a
            className="flex h-14 w-full items-center justify-center rounded-full border-2 border-zinc-200 px-8 text-lg transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 md:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentations
          </a>
        </div>
      </main>
    </div>
  );
}
