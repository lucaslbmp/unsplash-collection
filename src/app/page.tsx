import Header from "./_components/header";
import SearchForm from "./_components/search-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-4 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex bg-[url('/hero-image.png')] bg-center w-full h-auto min-h-screen justify-center flex-1 items-center">
        <section className="flex flex-col gap-5 items-center">
          <h2 className="font-bold text-4xl">Search</h2>
          <span className="font-semibold text-textSecondary">
            Search high-resolution images from Unsplash
          </span>
          <SearchForm />
        </section>
      </main>
    </div>
  );
}
