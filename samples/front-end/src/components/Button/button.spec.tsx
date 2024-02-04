import ButtonComponent from '@/components/Button'
import { fireEvent, render } from '@testing-library/react'

describe('custom-button-component', () => {
  let mockOnClick: jest.Mock<void>

  beforeEach(() => {
    mockOnClick = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should fire the onClick event', () => {
    // Arrange
    const buttonText = 'Click me'

    // Act
    const { getByText } = render(
      <ButtonComponent onClick={mockOnClick}>{buttonText}</ButtonComponent>,
    )
    const selectedButton = getByText(buttonText)
    fireEvent.click(selectedButton)

    // Assert
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
