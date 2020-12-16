import Head from "next/head"
import Link from "next/link"

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Teste petz" />
            </Head>
            <header>
                {home ? (
                    <>
                        {/* <img */}
                        {/*     src="/images/profile.jpg" */}
                        {/*     className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} */}
                        {/*     alt={name} */}
                        {/* /> */}
                        <h1>Petz</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                {/* <img */}
                                {/*     src="/images/profile.jpg" */}
                                {/*     className={`${styles.headerImage} ${utilStyles.borderCircle}`} */}
                                {/*     alt={name} */}
                                {/* /> */}
                                derp
                            </a>
                        </Link>
                        <h2>
                            <Link href="/">
                                <a>Petz</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
