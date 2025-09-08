import React from 'react';

type Loader<T extends React.ComponentType<any> = React.ComponentType<any>> = () => Promise<{ default: T }>;

interface LazyLoadProps {
  loader: Loader;
  rootMargin?: string;
  className?: string;
  minHeight?: string | number;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ loader, rootMargin = '200px 0px', className, minHeight = '40vh' }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current || visible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { root: null, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  const LazyComp = React.useMemo(() => React.lazy(loader), [loader]);

  if (!visible) {
    return <div ref={ref} className={className as string | undefined} style={{ minHeight }} />;
  }

  return (
    <React.Suspense fallback={null}>
      <LazyComp />
    </React.Suspense>
  );
};

export default LazyLoad;

