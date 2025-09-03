// src/components/ErrorBoundary.tsx
import React from 'react'

type Props = { children: React.ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    // 👇 This will show the real cause in the browser console
    console.error('ErrorBoundary caught an error:', error)
    console.error('Component stack:', info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h1>Something went wrong</h1>
          <p>Open DevTools → Console and share the error shown there.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
