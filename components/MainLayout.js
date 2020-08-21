import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({children, title = 'Next App'}) {
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="keywords" content="Next, JavaScript, NextJS, React" />
                <meta name="description" content="This is my tutorial for Next" />
                <meta charset="utf-8" />
            </Head>
            <nav>
                <div style={{display: 'inline-block'}}><Link href="/"><a>Home</a></Link></div>
                <div style={{display: 'inline-block', padding: '0px 5px'}}><Link href="/about"><a>About</a></Link></div>
                <div style={{display: 'inline-block'}}><Link href="/posts"><a>Posts</a></Link></div>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav a {
                    color: red;
                }
            `}
            </style>
        </>
    )
}