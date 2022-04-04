// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <nav>
      <h1>ホーム</h1>
      <Link href="/posts/FirstPost">
        <a>Go to Blog</a>
      </Link>
    </nav>
  );
}
