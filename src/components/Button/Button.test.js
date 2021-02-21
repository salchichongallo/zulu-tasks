import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './index'

it('should be clickable', () => {
  const onClick = jest.fn()
  render(<Button onClick={onClick}>foo</Button>)
  const button = screen.queryByText('foo')
  expect(button).toBeInTheDocument()
  userEvent.click(button)
  expect(onClick).toHaveBeenCalledTimes(1)
})

describe('button variation', () => {
  it('should be primary by default', () => {
    render(<Button>bar</Button>)
    expect(screen.getByText('bar')).toHaveClass('Button--variation-primary')
  })

  it.each(['primary', 'cancel', 'danger'])(
    'variation %s should be translated to className',
    variation => {
      render(<Button variation={variation}>bar</Button>)
      expect(screen.getByText('bar')).toHaveClass(
        `Button--variation-${variation}`
      )
    }
  )
})

it('should spread props to native element', () => {
  render(
    <Button disabled data-foo="bar">
      baz
    </Button>
  )
  const button = screen.getByText('baz')
  expect(button).toBeDisabled()
  expect(button).toHaveAttribute('data-foo', 'bar')
})

it('`type` should be `button` by default', () => {
  render(<Button>foo</Button>)
  expect(screen.getByText('foo')).toHaveAttribute('type', 'button')
})

it('`className` prop should not me merged', () => {
  render(<Button className="foo">bar</Button>)
  expect(screen.getByText('bar')).not.toHaveClass('foo')
})
