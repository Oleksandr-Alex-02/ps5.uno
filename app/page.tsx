import Link from "next/link";

export default function Home() {
  return (
    <section>
      <ul>
        <li> <Link href='/generator'>generator</Link></li>
        <li><Link href='/ninebot'>ninebot</Link></li>
        <li><Link href='/interesting-articles'>interesting-articles</Link></li>
      </ul>
    </section>
  );
}
