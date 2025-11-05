"use client";

export default function Error({ error }: { error: Error; }) {
    return (
        <main>
            <p>{error.message}</p>
        </main>
    );
}
