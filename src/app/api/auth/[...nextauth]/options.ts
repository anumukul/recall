import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
    callbacks: {
        redirect({ url, baseUrl }) {
            
            if (url.startsWith("/")) return `${baseUrl}${url}`;
           
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
    },
};