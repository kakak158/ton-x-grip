import Link from "next/link";

type UnderConstructionPageProps = {
  pageName: string;
};

export default function UnderConstructionPage({
  pageName,
}: UnderConstructionPageProps) {
  return (
    <main className="flex min-h-screen flex-col bg-orange-50 px-6 py-8 text-red-600 md:px-12 md:py-10">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-red-600/20 pb-5">
        <Link
          href="/"
          className="text-2xl font-[1000] uppercase leading-none tracking-tighter"
        >
          TONX GRIP
        </Link>
        <p className="text-right text-xs font-bold uppercase tracking-tighter text-red-600/60 sm:text-sm">
          By Tonbridgians, for Tonbridgians.
        </p>
      </header>

      <section className="mx-auto flex w-full max-w-7xl flex-1 items-center py-16">
        <div className="w-full border-l-4 border-red-600 pl-6 sm:pl-10">
          <p className="mb-6 text-sm font-black uppercase tracking-tighter text-red-600/50">
            TONX // {pageName}
          </p>
          <h1 className="max-w-4xl text-6xl font-[1000] uppercase leading-[0.82] tracking-tighter sm:text-7xl md:text-9xl">
            Under
            <br />
            construction.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-snug text-red-950/70 sm:text-xl">
            The {pageName.toLowerCase()} page is under construction. Check back
            soon.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-3 border-2 border-red-600 px-5 py-3 text-sm font-black uppercase tracking-tighter transition-colors hover:bg-red-600 hover:text-orange-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          >
            <span aria-hidden="true">&larr;</span>
            Back to home
          </Link>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl border-t border-red-600/20 pt-5 text-xs font-bold uppercase text-red-600/50">
        TONX GRIP
      </footer>
    </main>
  );
}
