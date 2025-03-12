import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to My First Next.js App!</h1>
        <p className="text-xl">This is just the beginning of something amazing.</p>
        <Image src="/example.png" alt="example image" width={1100} height={600}  ></Image>
        <Link href="/about">about us</Link>
      </main>
  );
}
