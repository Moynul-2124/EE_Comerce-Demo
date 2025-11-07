


"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LogIn() {
    const { data: session } = useSession();

    return (
        <div className="text-white p-6">
            {session ? (
                <>
                    <p>Welcome, {session.user?.name}</p>
                    <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded">
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <button onClick={() => signIn("google")} className="bg-blue-500 px-4 py-2 rounded mr-2">
                        Login with Google
                    </button>
                    <button onClick={() => signIn("github")} className="bg-gray-800 px-4 py-2 rounded">
                        Login with GitHub
                    </button>
                </>
            )}
        </div>
    );
}
