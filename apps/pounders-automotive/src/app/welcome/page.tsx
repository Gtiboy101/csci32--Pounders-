'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Auth from '@/components/Auth'

export default function WelcomePage() {
  const router = useRouter()
  const [showAuth, setShowAuth] = useState(false)

  return (
    <div>
      {/* Enhanced Premium Header */}
      <div
        style={{
          position: 'relative',
          backgroundColor: 'white',
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: '0',
            background: 'linear-gradient(to right, rgba(37, 99, 235, 0.05), rgba(168, 85, 247, 0.1))',
          }}
        ></div>

        {/* Header Content */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '32px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* BullnBrains Title with Gradient */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #2563eb, #7c3aed, #4338ca)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.1',
                margin: '0',
              }}
            >
              BullnBrains
            </h1>
          </div>

          {/* Account button */}
          <div>
            <button
              onClick={() => setShowAuth(!showAuth)}
              style={{
                background: 'linear-gradient(to right, #3b82f6, #2563eb)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '12px',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }}
            >
              {showAuth ? '✕ Close' : '👤 Account'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto" style={{ padding: '48px 24px' }}>
        <header className="mb-8 relative">
          {/* Enhanced Auth Modal */}
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
                  borderRadius: '20px',
                  padding: '32px',
                  maxWidth: '450px',
                  width: '100%',
                  margin: '20px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#1f2937' }}>Account</h2>
                  <button
                    onClick={() => setShowAuth(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '20px',
                      cursor: 'pointer',
                      color: '#6b7280',
                      padding: '8px',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    ✕
                  </button>
                </div>
                <Auth />
              </div>
            </div>
          )}
        </header>

        {/* Premium Video Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '48px',
            marginBottom: '80px',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            <h2
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #1f2937, #374151)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '24px',
                margin: '0 0 24px 0',
              }}
            >
              Welcome to the Community!
            </h2>
            <p
              style={{
                fontSize: '20px',
                color: '#6b7280',
                lineHeight: '1.6',
                fontWeight: '400',
                margin: '0',
              }}
            >
              Experience the thrill of rock crawling with fellow enthusiasts who share your passion for adventure.
            </p>
          </div>

          {/* Enhanced Video Container */}
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
            }}
          >
            <video
              controls
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source src="/videos/rock-crawling.mp4.mp4" type="video/mp4" />
              <source src="/videos/rock-crawling.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Frame */}
            <div
              style={{
                position: 'absolute',
                inset: '0',
                border: '4px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '24px',
                pointerEvents: 'none',
              }}
            ></div>
          </div>
        </div>

        <main style={{ display: 'block', width: '100%' }}>
          {/* Enhanced Navigation Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {/* Vehicles Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #fef7ff, #f3e8ff)',
                borderRadius: '32px',
                padding: '40px',
                textAlign: 'center',
                border: '2px solid rgba(168, 85, 247, 0.1)',
                boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(168, 85, 247, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(168, 85, 247, 0.1)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '48px', display: 'block' }}>🚗</span>
              </div>
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#6b21a8',
                  margin: '0 0 16px 0',
                }}
              >
                Vehicles
              </h3>
              <p
                style={{
                  color: '#6b7280',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  marginBottom: '24px',
                  margin: '0 0 24px 0',
                }}
              >
                Browse our collection of rock crawlers, off-road builds, and project vehicles. From budget builds to
                custom fabrications.
              </p>
              <button
                onClick={() => {
                  router.push('/builds')
                }}
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%',
                  boxShadow: '0 4px 14px 0 rgba(168, 85, 247, 0.3)',
                  transition: 'all 0.2s ease',
                }}
              >
                Explore Builds
              </button>
            </div>

            {/* Forum Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                borderRadius: '32px',
                padding: '40px',
                textAlign: 'center',
                border: '2px solid rgba(14, 165, 233, 0.1)',
                boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(14, 165, 233, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(14, 165, 233, 0.1)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '48px', display: 'block' }}>💬</span>
              </div>
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#0284c7',
                  margin: '0 0 16px 0',
                }}
              >
                Forum
              </h3>
              <p
                style={{
                  color: '#6b7280',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  marginBottom: '24px',
                  margin: '0 0 24px 0',
                }}
              >
                Join discussions with fellow crawlers. Share builds, ask questions, get advice, and connect with the
                community.
              </p>
              <button
                onClick={() => (window.location.href = '/forum')}
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%',
                  boxShadow: '0 4px 14px 0 rgba(14, 165, 233, 0.3)',
                  transition: 'all 0.2s ease',
                }}
              >
                Join Forum
              </button>
            </div>

            {/* About Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #fefce8, #fef3c7)',
                borderRadius: '32px',
                padding: '40px',
                textAlign: 'center',
                border: '2px solid rgba(245, 158, 11, 0.1)',
                boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(245, 158, 11, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(245, 158, 11, 0.1)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '48px', display: 'block' }}>🏔️</span>
              </div>
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#d97706',
                  margin: '0 0 16px 0',
                }}
              >
                About Us
              </h3>
              <p
                style={{
                  color: '#6b7280',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  marginBottom: '24px',
                  margin: '0 0 24px 0',
                }}
              >
                Learn about our rock crawling community. From beginners to veterans, we're here to help and share
                knowledge.
              </p>
              <button
                onClick={() => (window.location.href = '/about')}
                style={{
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%',
                  boxShadow: '0 4px 14px 0 rgba(245, 158, 11, 0.3)',
                  transition: 'all 0.2s ease',
                }}
              >
                Learn More
              </button>
            </div>

            {/* Contact Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                borderRadius: '32px',
                padding: '40px',
                textAlign: 'center',
                border: '2px solid rgba(34, 197, 94, 0.1)',
                boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(34, 197, 94, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(34, 197, 94, 0.1)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '48px', display: 'block' }}>📧</span>
              </div>
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#16a34a',
                  margin: '0 0 16px 0',
                }}
              >
                Contact
              </h3>
              <p
                style={{
                  color: '#6b7280',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  marginBottom: '24px',
                  margin: '0 0 24px 0',
                }}
              >
                Have questions or suggestions? Get in touch with us. We're here to help with your rock crawling journey.
              </p>
              <button
                onClick={() => {
                  router.push('/contact')
                }}
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%',
                  boxShadow: '0 4px 14px 0 rgba(34, 197, 94, 0.3)',
                  transition: 'all 0.2s ease',
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
