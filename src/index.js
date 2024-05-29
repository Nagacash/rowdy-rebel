import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'
import image1 from '../src/images/rowdy1.jpeg'
import image2 from '../src/images/rowdy2.jpg'
import image3 from '../src/images/rowdy3.jpeg'
import image4 from '../src/images/rowdy4.jpeg'

const images = [
  // // Front
  // { position: [0, 0, 1.5], rotation: [0, 0, 0], url: image1 },
  // // Back
  // { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
  // { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: image1, item: 1 },
  { position: [-1.5, 0, 0.25], rotation: [0, Math.PI / 6, 0], url: image2, item: 2 },
  // Right
  { position: [1.5, 0, 0.25], rotation: [0, -Math.PI / 6, 0], url: image3, item: 3 },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: image4, item: 4 }
]

createRoot(document.getElementById('root')).render(<App images={images} />)
