import Image from 'next/image'
import {Inter} from 'next/font/google'
import dynamic from "next/dynamic";

const inter = Inter({subsets: ['latin']})

const NextjsRemoteComponent = dynamic(() => import('RemoteNextApp/nextjs-remote-component'), { ssr: false });
const RemoteTitle = dynamic(() => import('Weather/WeatherBlock'), { ssr: false });
export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <NextjsRemoteComponent/>
            <RemoteTitle/>
        </main>
    )
}
