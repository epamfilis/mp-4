import Image from "next/image";
import getData from "@/lib/getData";
import {ArtworkTypes} from "@/types/ArtworkTypes";

export default async function Home() {
    const artwork: ArtworkTypes = await getData();

    return (
        <div className="mx-auto w-4/5">
            <h1 className="mx-auto w-fit text-3xl mb-2 mt-5 text-center">{artwork.title}</h1>
            <div className="mx-auto w-fit border mb-3">
                <Image src={artwork.image} alt={artwork.title} width={500} height={500} />
                {artwork.start_date && artwork.end_date && (
                    <div className="mx-auto w-fit text-xl">
                        <p>{artwork.start_date}–{artwork.end_date}</p>
                    </div>
                )}
            </div>
            <div className="mx-auto w-fit text-xl">
            {artwork.description && <p>{artwork.description}</p>}
            </div>
        </div>
    );
}
