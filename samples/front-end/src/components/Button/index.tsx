import type { ComponentProps, FC } from 'react'

type ButtonProps = ComponentProps<'button'>

const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props

  return <button {...rest}>{children}</button>
}

export default Button
