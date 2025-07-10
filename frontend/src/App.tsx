<<<<<<< HEAD
import { useState, useEffect } from 'react'
import './App.css'
import AuthForm from './components/AuthForm'
import Navbar from './components/Navbar'
import Analytics from './components/Analytics'
import UrlShortener from './components/UrlShortener'
import UrlList from './components/UrlList'

interface Url {
  _id: string;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  createdAt: string;
  isPasswordProtected: boolean;
  isActive: boolean;
  passwordAttempts: number;
}

interface User {
  id: string;
  email: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

function App() {
  const [urls, setUrls] = useState<Url[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')
    
    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    if (user && token) {
      fetchUrls()
    }
  }, [user, token])

  const fetchUrls = async () => {
    if (!token) return
    
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/urls`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      setUrls(data)
    } catch (error) {
      console.error('Error fetching URLs:', error)
    }
  }

  const handleAuth = async (email: string, password: string, mode: 'login' | 'register') => {
    setIsLoading(true)
    setAuthError('')

    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/auth/${mode}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        const authData = data as AuthResponse
        setUser(authData.user)
        setToken(authData.token)
        localStorage.setItem('token', authData.token)
        localStorage.setItem('user', JSON.stringify(authData.user))
      } else {
        setAuthError(data.error || 'Authentication failed')
      }
    } catch (error) {
      console.error('Authentication error:', error)
      setAuthError('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    setUser(null)
    setToken(null)
    setUrls([])
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  if (!user) {
    return <AuthForm onAuth={handleAuth} isLoading={isLoading} error={authError} />
  }

  return (
    <div className="app">
      <Navbar user={user} onLogout={handleLogout} />
      
      <div className="main-content">
        <div className="container">
          <UrlShortener 
            onUrlShortened={fetchUrls}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            token={token!}
          />
          
          <Analytics urls={urls} />
          
          <UrlList urls={urls} onUrlsChange={fetchUrls} />
        </div>
      </div>
    </div>
  )
}

export default App
=======
// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UrlShortenerApp from './UrlShortenerApp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        {/* If user is logged in, redirect "/" to /home */}
        <Route
          path="/"
          element={token ? <Navigate to="/home" replace /> : <SignIn />}
        />

        {/* Signup Route - accessible only if not logged in */}
        <Route
          path="/signup"
          element={token ? <Navigate to="/home" replace /> : <SignUp />}
        />

        {/* Protected Home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <UrlShortenerApp />
            </ProtectedRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> 5340ab254efa15c49dbc6ca285cac03b083a478d
