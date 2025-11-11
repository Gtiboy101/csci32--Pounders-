'use client'
import { useState } from 'react'
import Auth from '@/components/Auth'

export default function Home() {
  const [showAuth, setShowAuth] = useState(false)

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-teal-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Blue header section with text on left and buttons on right */}
        <div
          style={{
            backgroundColor: '#bfdbfe',
            border: '3px solid black',
            padding: '20px',
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left side - Title and tagline */}
          <div style={{ textAlign: 'left' }}>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Welcome to Pounders Automotive</h1>
            <p className="text-gray-600 mb-0">Where we turn heads, not wallets!</p>
          </div>

          {/* Right side - Navigation buttons */}
          <div className="header-button flex gap-4">
            <button
              onClick={() => console.log('Vehicles clicked')}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid black',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              Vehicles
            </button>
            <button
              onClick={() => console.log('About Us clicked')}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid black',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              About Us
            </button>
            <button
              onClick={() => console.log('Contact Us clicked')}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid black',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              Contact Us
            </button>
            <button
              onClick={() => setShowAuth(!showAuth)}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid black',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              {showAuth ? '✕' : 'Account'}
            </button>
          </div>
        </div>

        <header className="mb-8 relative">
          {/* Modal Overlay */}
          {showAuth && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  padding: '12px',
                  width: '250px',
                  maxWidth: '90vw',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #ddd',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <h2 style={{ fontSize: '14px', fontWeight: 'bold', margin: 0 }}>Account</h2>
                  <button
                    onClick={() => setShowAuth(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '18px',
                      cursor: 'pointer',
                      color: '#666',
                    }}
                  >
                    ×
                  </button>
                </div>
                <Auth />
              </div>
            </div>
          )}
        </header>

        <main>{/* Main content area - no longer contains Auth since it's in the dropdown */}</main>
      </div>
    </div>
  )
}
