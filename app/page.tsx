import SearchBox from "./components/Search/SearchBox";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import GlowLink from "./components/Link/GlowLink";
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
          <GlowLink href="https://github.com/FireCubeStudios/Blog">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#fff" d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/>
  </svg>
            Source code
          </GlowLink>  
          <GlowLink href="https://discord.gg/3WYcKat">Discord server</GlowLink> 
          <GlowLink href="https://github.com/FireCubeStudios">Github</GlowLink>  
        </aside>
    </main>
  );
}