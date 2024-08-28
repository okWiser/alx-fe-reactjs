import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import RecommendationsList from './components/RecommendationsList'
import FavoritesList from './components/FavoritesList'
import Home from './components/Home'
import About from './components/About'
import useRecipeStore from './recipeStore'
import Contact from './components/Contact'
import RecipeDetail from './components/RecipeDetails'
import useRecipeStore from './recipeStore'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <div>
      <h1>My Recipe App</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <FavoritesList />
        </div>
        <div>
          <RecommendationsList />
        </div>
      </div>
    </div>
        <div>
      <h1>My Recipe App</h1>
      <RecommendationsList />
    </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Router>
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetail />
      <About />
    </>
  )
}

export default App;