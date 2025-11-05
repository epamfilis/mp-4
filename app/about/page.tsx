export default function About() {
    return (
        <main>
            <div className="mx-auto w-4/5">
                <h1 className="text-center text-4xl mt-5 mb-3">About</h1>
                <p className="text-2xl">
                    This website provides random artwork from the ArtSearch API everything you visit. It also provides
                    descriptive information about the artwork and the timeframe in which the artist created it. You can
                    reload the page in order to display a new piece.
                </p>
            </div>
        </main>
    );
}