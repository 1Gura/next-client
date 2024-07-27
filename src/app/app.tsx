import "@/app/globals.css";
import type {AppProps} from "next/app";
import {AppProvider} from "@/app/app-provider";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export function App({Component, pageProps}: AppProps) {
    return (
        <AppProvider>
            <div>
                <Component {...pageProps} />;
            </div>
        </AppProvider>
    )
}
