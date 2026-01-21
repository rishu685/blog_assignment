import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { blogApi } from '@/lib/api/blogs';
import { CreateBlogData } from '@/types/blog';

export const QUERY_KEYS = {
  blogs: ['blogs'] as const,
  blog: (id: string) => ['blog', id] as const,
};

// Hook to get all blogs
export const useBlogs = () => {
  return useQuery({
    queryKey: QUERY_KEYS.blogs,
    queryFn: blogApi.getAllBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook to get a single blog by ID
export const useBlog = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.blog(id),
    queryFn: () => blogApi.getBlogById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook to create a new blog
export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blogData: CreateBlogData) => blogApi.createBlog(blogData),
    onSuccess: () => {
      // Invalidate and refetch blogs list after successful creation
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.blogs });
    },
  });
};