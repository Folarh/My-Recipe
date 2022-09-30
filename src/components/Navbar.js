
import {Link} from 'react-router-dom'
import { UseTheme } from '../hooks/UseTheme'

//styles
import './Navbar.css'
import Searchbar from './Searchbar'


export default function Navbar() {
  const {color}= UseTheme()
 
  return (
    <div className='navbar' style={{background: color}}>
        <nav >
            <Link to="/" className='brand'>
            <h1>AfriKitch</h1>
            </Link>

            <Searchbar/>

            <Link to="/create">
            <h1>Create Recipe</h1>
            </Link>
        </nav>
      
    </div>
  )
}
