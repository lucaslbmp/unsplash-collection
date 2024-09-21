import SearchForm from "./_components/search-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-4 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex bg-[url('/hero-image.png')] bg-center w-full h-auto min-h-screen justify-center flex-1 items-center">
        <SearchForm />
      </main>
    </div>
  );
}
