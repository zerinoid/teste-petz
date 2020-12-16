import Layout from "../../components/layout"
import Head from "next/head"

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1>{postData.title}</h1>
                {/* <div> */}
                {/*     <Date dateString={postData.date} /> */}
                {/* </div> */}
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
    )
}
