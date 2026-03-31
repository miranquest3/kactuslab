import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // or "smooth"
    })
  }, [location.key]) // 🔥 changed from pathname → key

  return null
}

export default ScrollToTop