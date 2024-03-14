import React, { useState, useEffect, useRef } from 'react';

function LazyComponent1() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchData();
          observer.unobserve(componentRef.current);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of component is visible
    );
    console.log("dddddddddd55555555dddd",observer,componentRef.current)
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
      console.log("jsonData",jsonData)
      setData(jsonData.products);
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
      <h2>Component 1</h2>
      { data && data.length && data.map((item)=>{
        return (
            <h4>{item.title}</h4>
        )
      })}
      {/* Render data here */}
    </div>
  );
}

export default LazyComponent1;
