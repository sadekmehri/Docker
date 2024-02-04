import Button from '@/components/Button'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage: FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/some-random-url', { replace: true })
  }

  return (
    <>
      <h1>Welcome to the home page</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </>
  )
}

export default HomePage
