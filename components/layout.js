import Head from "next/head"
import Link from "next/link"

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/icon.png" />
                <meta name="description" content="Teste petz" />
            </Head>
            <header>
                {home ? (
                    <>
                        <img
                            src="/logo.png"
                            /* className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} */
                            alt="Petz"
                        />
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/logo.png"
                                    /* className={`${styles.headerImage} ${utilStyles.borderCircle}`} */
                                    alt="Petz"
                                />
                            </a>
                        </Link>
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
