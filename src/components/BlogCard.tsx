import { Blog } from '@/types/blog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  blog: Blog;
  onSelect: (blog: Blog) => void;
  isSelected?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, onSelect, isSelected = false }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'border-blue-500 shadow-md bg-blue-50' : ''
      }`}
      onClick={() => onSelect(blog)}
    >
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {blog.category.map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {cat}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-2">
          {blog.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {formatDate(blog.date)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 line-clamp-3">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
};