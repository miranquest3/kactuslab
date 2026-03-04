import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  // Default user for development (no login required)
  const [user, setUser] = useState({
    name: 'Developer',
    email: 'dev@kactus.local',
    id: 1
  })

  useEffect(() => {
    // Check for token if available
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        setUser({
          name: payload.name,
          email: payload.email,
          id: payload.id
        })
      } catch (e) {
        console.log('Token parsing error, using default user')
      }
    }
  }, [])

  // Login/Logout functions disabled for development
  // const login = async (email, password) => { ... }
  // const logout = () => { ... }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)