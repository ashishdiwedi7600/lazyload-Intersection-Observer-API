import React, { useState, useEffect, useRef } from 'react';

function LazyComponent2() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const componentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchData();
          observer.unobserve(componentRef.current);
        }
      },
      { threshold: 0.9 } // Trigger when 50% of component is visible
    );

    if (observer && componentRef.current) {
        
        observer.observe(componentRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [componentRef]);

  async function fetchData() {
    setLoading(true)
    try {
      const response = await fetch('https://dummyjson.com/products');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div ref={componentRef}>
      <h2>Component 2</h2>
      {/* Render data here */}
    </div>
  );
}

export default LazyComponent2;
