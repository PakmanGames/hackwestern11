export async function fetchImages(query) {
    const apiKey = process.env.NEXT_PUBLIC_IMAGE_KEY;
    const searchEngine = process.env.NEXT_PUBLIC_SEARCH_ENGINE;
    console.log(apiKey);
    console.log(searchEngine);
    const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngine}&q=${query}&searchType=image`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch images");
    }

    const data = await res.json();
    return data.items || [];
}