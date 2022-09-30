
import {BrowserRouter, Switch, Route } from "react-router-dom"

//styles
import './App.css'

//PAGES COMPONENTS
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Navbar from './components/Navbar'
import ThemeSelector from "./components/ThemeSelector"
import { UseTheme } from "./hooks/UseTheme"


function App() {
  const {mode}= UseTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar/>
      <ThemeSelector/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route  path="/create">
          <Create/>
        </Route>

        <Route  path="/recipes:id">
          <Recipe/>
        </Route>

        <Route  path="/search">
          <Search/>
        </Route>

      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
