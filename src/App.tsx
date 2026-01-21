import { useState } from 'react';
import { Blog } from '@/types/blog';
import { BlogList } from '@/components/BlogList';
import { BlogDetail } from '@/components/BlogDetail';
import { CreateBlogForm } from '@/components/CreateBlogForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type View = 'blog' | 'create';

function App() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [currentView, setCurrentView] = useState<View>('blog');
  const [showDetail, setShowDetail] = useState(false);

  const handleSelectBlog = (blog: Blog) => {
    setSelectedBlog(blog);
    setCurrentView('blog');
    setShowDetail(true);
  };

  const handleCreateNew = () => {
    setCurrentView('create');
    setSelectedBlog(null);
    setShowDetail(true);
  };

  const handleCreateSuccess = () => {
    setCurrentView('blog');
    setShowDetail(false);
  };

  const handleCreateCancel = () => {
    setCurrentView('blog');
    setShowDetail(false);
  };

  const handleBackToList = () => {
    setShowDetail(false);
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">CA Monk Blog</h1>
          <p className="text-gray-600">Welcome to our finance and accounting blog</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Blog List (hidden on mobile when detail is shown) */}
          <div className={`lg:h-[calc(100vh-12rem)] lg:overflow-y-auto ${
            showDetail ? 'hidden lg:block' : 'block'
          }`}>
            <BlogList
              selectedBlog={selectedBlog}
              onSelectBlog={handleSelectBlog}
              onCreateNew={handleCreateNew}
            />
          </div>

          {/* Right Panel - Blog Detail or Create Form (hidden on mobile when not needed) */}
          <div className={`lg:h-[calc(100vh-12rem)] lg:overflow-y-auto ${
            showDetail ? 'block' : 'hidden lg:block'
          }`}>
            {/* Back button for mobile */}
            {showDetail && (
              <div className="lg:hidden mb-4">
                <Button
                  onClick={handleBackToList}
                  variant="outline"
                  size="sm"
                  className="mb-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to List
                </Button>
              </div>
            )}

            {currentView === 'create' ? (
              <CreateBlogForm
                onCancel={handleCreateCancel}
                onSuccess={handleCreateSuccess}
              />
            ) : (
              <BlogDetail blog={selectedBlog} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
