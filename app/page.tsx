import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <div className="bg-gradient-to-r text-center from-blue-500 to-red-500 text-transparent bg-clip-text font-bold text-4xl">
        Welcome to QuillAudit
      </div>
      <div className="mt-4">
        <Link className="text-center underline" href={"/ai-audit"}>
          <p> Lets start writing some code!</p>
        </Link>
      </div>
    </main>
  );
}
