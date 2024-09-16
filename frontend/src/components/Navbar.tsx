import Link from "next/link";

export default function Navbar() {
    return (
        <div className="container mx-auto px-4">      
            <header className="flex justify-between items-center py-4">
                <Link href="/">
                    <h1 className="text-3xl font-bold text-blue-800 cursor-pointer">Nawy</h1>
                </Link>
            </header>
        </div>
    )
}