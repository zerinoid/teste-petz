export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}

export default function HomePage({ posts }) {
    return (
        <div>
            <h1>Welcome to Next.js!</h1>
            <ul>
                {posts.slice(0, 10).map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
