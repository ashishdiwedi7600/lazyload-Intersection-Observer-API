import React, { useState, useEffect, Suspense } from 'react';

// Import components lazily
const LazyComponent1 = React.lazy(() => import('./lazyloadComponent1'));
const LazyComponent2 = React.lazy(() => import('./lazyloadComponent2'));
// Import more lazy components as needed

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Suspense fallback={<div>Loading...123</div>}>
        
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <h2>helo</h2>
        <LazyComponent1 />
        <LazyComponent2 />
        {/* Render more lazy components here */}
      </Suspense>
    </div>
  );
}

export default HomePage;
