import { useBlogs } from '@/hooks/useBlogs';
import { BlogCard } from './BlogCard';
import { Blog } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Plus, RefreshCw } from 'lucide-react';

interface BlogListProps {
  selectedBlog: Blog | null;
  onSelectBlog: (blog: Blog) => void;
  onCreateNew: () => void;
}

export const BlogList: React.FC<BlogListProps> = ({ 
  selectedBlog, 
  onSelectBlog, 
  onCreateNew 
}) => {
  const { data: blogs, isLoading, error, refetch, isFetching } = useBlogs();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Blogs</h2>
          <Button onClick={onCreateNew}>
            <Plus className="w-4 h-4 mr-2" />
            New Blog
          </Button>
        </div>
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-32 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Blogs</h2>
          <Button onClick={onCreateNew}>
            <Plus className="w-4 h-4 mr-2" />
            New Blog
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <p className="text-red-600">Error loading blogs: {error.message}</p>
          <Button 
            variant="outline" 
            onClick={() => refetch()}
            disabled={isFetching}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isFetching ? 'animate-spin' : ''}`} />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blogs ({blogs?.length || 0})</h2>
        <Button onClick={onCreateNew}>
          <Plus className="w-4 h-4 mr-2" />
          New Blog
        </Button>
      </div>
      
      <div className="grid gap-4">
        {blogs?.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onSelect={onSelectBlog}
            isSelected={selectedBlog?.id === blog.id}
          />
        ))}
      </div>

      {blogs && blogs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <p className="text-gray-500">No blogs found</p>
          <Button onClick={onCreateNew}>
            <Plus className="w-4 h-4 mr-2" />
            Create your first blog
          </Button>
        </div>
      )}
    </div>
  );
};