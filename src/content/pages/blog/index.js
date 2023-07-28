// pages/blog/index.js

import { getSortedPostsData } from '../../utils/posts';

function Blog({ allPostsData }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.frontMatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default Blog;
