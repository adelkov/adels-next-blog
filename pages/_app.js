import '../styles/global.css'
import '../styles/colors.css'
import { useState } from 'react'


export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')
  
  return <div data-theme={theme}>
  <button onClick={(e) => {
    e.preventDefault()
    setTheme(theme === 'light' ? 'dark' : 'light')
  }}>Theme switch</button>
  <Component {...pageProps} />
  </div>
}