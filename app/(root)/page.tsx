import SearchForm from "@/app/components/SearchForm";

export default async function Home({ searchParams }:{
  searchParams?: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  return(
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your start up, <br/>
          Connect with entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote for Pitches, and get noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>
    </>
  );
}