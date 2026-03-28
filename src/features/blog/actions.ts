// src/lib/blog.ts
import { getCollection } from 'astro:content';

export async function getAllPosts() {
    const posts = await getCollection('blog');

    return posts
        // .filter(p => !p.data.draft) (add draft later)
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getPostsByCategory(category: string) {
    const posts = await getAllPosts();
    return posts.filter(p => p.data.category === category);
}

export async function getPostsByTag(tag: string) {
    const posts = await getAllPosts();
    return posts.filter(p => p.data.tags.includes(tag));
}

export async function getFeaturedPosts() {
    const posts = await getAllPosts();
    return posts.filter(p => p.data.isFeatured);
}