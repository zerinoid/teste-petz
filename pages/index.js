export async function getStaticProps() {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}

export default function HomePage() {
    return <div>Welcome to Next.js!</div>
}

