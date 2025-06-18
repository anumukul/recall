import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
            authorization: {
                params: {
                    scope: "read:user user:email"
                }
            }
        }),
    ],
    pages: {
        signIn: '/api/auth/signin',
        error: '/api/auth/error',
    },
    callbacks: {
        redirect({ url, baseUrl }) {
            console.log('Redirect callback - url:', url, 'baseUrl:', baseUrl);
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
        signIn({ account, profile }) {
            console.log('SignIn callback - account:', account, 'profile:', profile);
            return true;
        }
    },
    debug: true,
};