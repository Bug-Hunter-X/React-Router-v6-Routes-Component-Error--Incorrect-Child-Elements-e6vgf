```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nested/:id" element={<NestedRoutes />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function NestedRoutes() {
  return (
    <Routes>
      <Route path=":id" element={<NestedHome/>}/>
      <Route path="*" element={<div>Not found</div>}/>
    </Routes>
  );
}

function NestedHome(){
  return <div>Nested Home</div>;
}
```
This corrected code uses nested `Routes` components to handle nested route structures properly.  This ensures correct route matching and rendering.  Always nest `Route` components within a `Routes` component, if you have nested routes.