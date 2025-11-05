// AbortController source: https://developer.mozilla.org/en-US/docs/Web/API/AbortController

"use server";

const API_KEY = process.env.ARTWORK_API_KEY!;

export default async function getData() {
    // AbortController can send an abort signal. setTimeout tells it to send that signal after 10 seconds.
    // This is needed because if the API key is valid but the server is down it will load forever.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {

        const res = await fetch("https://api.artsearch.io/artworks/random", {
            headers: { "x-api-key": API_KEY },
            signal: controller.signal, // tells fetch that there is a timeout and it aborts
        });

        // needs this for fetch to detect errors, otherwise it just loads blank box
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return res.json();
    } catch (error) {

        if (error instanceof Error && error.name === "AbortError") { // AbortError is thrown by AbortController
            throw new Error("Request timed out. The API may be unavailable.");
        }
        else { // If there is no time out then there is probably no valid API key
            throw new Error("There was an error, please check that you have a valid API key.");
        }
    } finally {
        clearTimeout(timeout); // prevents memory leak
    }
}