import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-12 flex flex-col justify-center items-center gap-12 w-full">
        <h1 className="font-bold text-[24px]">Something is wrong!</h1>
        <img src="/assets/error404.png" alt="404" />
        <p className="text-[18px] font-semibold">The page you're looking for was not found</p>
        <Link href='/ '>Go to homepage</Link>
    </div>
  );
}