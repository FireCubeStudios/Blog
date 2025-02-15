import SearchBox from "./components/Search/SearchBox";
import ArticleCard from "./components/ArticleCard/ArticleCard";
export const dynamic = 'force-dynamic' /* force dynamic rendering for now */
export default async function Home() {
  const req = await fetch(`http://localhost:3000/Posts/Posts.json`);
  const data = await req.json(); // Get posts from JSON file

  return (
    <main>
        <header>
          <p className="text-2xl">All Articles</p>
          <p className="text">My blog about creating this blog, windows app development and other coding topics</p>
        </header>
        <section id="Articles">
          {
            data.posts.map((post: Post) => (
              <ArticleCard post={post} key={post.id}/> /* unique key is important when rendering lists */
            ))
          }
        </section>
        <aside id="Sidebar">
          <SearchBox/>
          <p className="text-sm">This blog is still in it&apos;s early stages with many more features to come. The current version is v1</p>
          <a href="https://github.com/FireCubeStudios/Blog" className="center" target="_blank">Source code</a>
          <a href="https://discord.gg/3WYcKat" className="center" target="_blank">Discord server</a>
          <a href="https://github.com/FireCubeStudios" className="center" target="_blank">GitHub</a>
        </aside>
    </main>
  );
}