// pages/blog/[slug].js

import { getSortedPostsData } from '../../utils/posts';

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

// Rest of your component code for rendering a single blog post
export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
}

// Rest of your
