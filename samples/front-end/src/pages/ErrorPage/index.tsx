import type { FC } from 'react'
import { Link } from 'react-router-dom'

const ErrorPage: FC = () => {
  return (
    <>
      <h1>What are you doing here!</h1>
      <Link to='/'>Go back home</Link>
    </>
  )
}

export default ErrorPage
