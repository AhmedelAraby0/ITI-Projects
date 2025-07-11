import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// process.env.GOOGLE_CLIENT_SECRET
console.log("process.env.GOOGLE_CLIENT_SECRET ==> ", process.env.GOOGLE_CLIENT_SECRET);
const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
	secret: process.env.NEXTAUTH_SECRET
	// You can add custom pages, callbacks, and other options here if needed
})

export { handler as GET, handler as POST }