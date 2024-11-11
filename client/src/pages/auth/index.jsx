import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

export const Auth = () => {

    return (
        <div className=" h-screen max-w-md mx-auto flex items-center justify-center">
            <SignedOut>
                <div className=" flex space-x-2">
                    <SignUpButton mode="modal" className=" bg-blue-500 text-white py-2 px-4 rounded-md" />
                    <SignInButton mode="modal" className=" bg-green-500 text-white py-2 px-4 rounded-md" />
                </div>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}