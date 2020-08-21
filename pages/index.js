import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

export default function Index() {
    return (
        <MainLayout title={'Home page'}>
            <Head>

                {/* Передаем в виде пропса в MainLayout */}
                
                {/* <title>Title NextJS</title> */}

                {/* ---- > Перенесли в MainLayout чтобы добавлять ко всему приложению а не для каждой страницы в отдельности */}
                
                {/* <meta name="keywords" content="Next, JavaScript, NextJS, React" /> */}
                {/* <meta name="description" content="This is my tutorial for Next" /> */}
                {/* <meta charset="utf-8" /> */}
            </Head>


            <h1>Hello Next JS</h1>

            {/* <p><a href="/about">About</a></p> */}
            {/* <p><a href="/posts">Posts</a></p> */}
            <div><Link href="/about"><a>About</a></Link></div>
            <div><Link href="/posts"><a>Posts</a></Link></div>

            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
        </MainLayout>
    )
}