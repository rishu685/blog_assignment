import { Blog, CreateBlogData } from '@/types/blog';

const API_BASE_URL = 'http://localhost:3001';

export const blogApi = {
  // Get all blogs
  getAllBlogs: async (): Promise<Blog[]> => {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    return response.json();
  },

  // Get blog by ID
  getBlogById: async (id: string): Promise<Blog> => {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog with id ${id}`);
    }
    return response.json();
  },

  // Create new blog
  createBlog: async (blogData: CreateBlogData): Promise<Blog> => {
    const newBlog = {
      ...blogData,
      id: Date.now().toString(), // Simple ID generation
      date: new Date().toISOString(),
    };

    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    });

    if (!response.ok) {
      throw new Error('Failed to create blog');
    }
    return response.json();
  },
};