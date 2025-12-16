'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #f9fafb, #dbeafe)',
      }}
    >
      {/* Enhanced Premium Header */}
      <div
        style={{
          position: 'relative',
          backgroundColor: 'white',
          overflow: 'hidden',
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
            padding: '64px 24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                maxWidth: '768px',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#dbeafe',
                  color: '#1d4ed8',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '16px',
                }}
              >
                <span style={{ marginRight: '8px' }}>🏔️</span>
                Rock Crawling Community Since 2024
              </div>
              <h1
                style={{
                  fontSize: '60px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #2563eb, #7c3aed, #4338ca)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.1',
                  marginBottom: '24px',
                }}
              >
                About Us
              </h1>
              <p
                style={{
                  fontSize: '24px',
                  color: '#4b5563',
                  fontWeight: '500',
                  maxWidth: '672px',
                  lineHeight: '1.6',
                  margin: '0 auto',
                }}
              >
                Built for everyone — whether you're brand new to rock crawling or you've been building rigs and breaking
                parts for years
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '24px',
                  paddingTop: '16px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#6b7280',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%',
                      marginRight: '8px',
                      animation: 'pulse 2s infinite',
                    }}
                  ></span>
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>Live Community</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#6b7280',
                  }}
                >
                  <span style={{ color: '#3b82f6', marginRight: '8px' }}>⭐</span>
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>205 followers and growing</span>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '16px',
              }}
            >
              <Link href="/welcome">
                <button
                  style={{
                    background: 'linear-gradient(to right, #3b82f6, #2563eb)',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    border: 'none',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started
                </button>
              </Link>
              <Link href="/">
                <button
                  style={{
                    backgroundColor: 'white',
                    color: '#374151',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    fontSize: '16px',
                    border: '2px solid #e5e7eb',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Community Intro */}
        <div
          style={{
            backgroundColor: 'white',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '48px',
            border: '2px solid #e5e7eb',
            borderRadius: '60px',
            transition: 'all 0.3s ease',
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px',
              }}
            >
              <span style={{ fontSize: '24px' }}>🏔️</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', margin: '0' }}>
              Our Community
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              fontSize: '18px',
              lineHeight: '1.75',
              color: '#4b5563',
              textAlign: 'center',
              maxWidth: '896px',
              margin: '0 auto',
            }}
          >
            <p style={{ margin: '0' }}>
              This community was built for everyone — whether you're brand new to rock crawling or you've been building
              rigs and breaking parts for years.
            </p>
            <p style={{ margin: '0' }}>
              What started with a shared love for crawling has turned into a laid-back space where new builders can
              learn without feeling out of place, and experienced wheelers can connect, share knowledge, and keep the
              culture strong.
            </p>
          </div>
        </div>

        {/* For New Guys & Veterans */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px' }}>
          <div
            style={{
              backgroundColor: 'white',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '40px',
              border: '2px solid #e5e7eb',
              borderRadius: '50px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(to right, #10b981, #3b82f6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                }}
              >
                <span style={{ fontSize: '24px' }}>🔰</span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', margin: '0' }}>
                For the New Guys
              </h2>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                fontSize: '18px',
                lineHeight: '1.75',
                color: '#4b5563',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: '0' }}>
                If you're just getting started, you're in the right place. Ask questions. Learn the basics. Figure out
                what parts you actually need and what can wait.
              </p>
              <p style={{ margin: '0' }}>
                We believe everyone starts somewhere, and no one should feel talked down to for trying to learn.
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '40px',
              border: '2px solid #e5e7eb',
              borderRadius: '50px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                }}
              >
                <span style={{ fontSize: '24px' }}>🏆</span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', margin: '0' }}>
                For the Veterans
              </h2>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                fontSize: '18px',
                lineHeight: '1.75',
                color: '#4b5563',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: '0' }}>
                If you've been around the sport, this is a place to pass it on. Share your builds, lessons learned, and
                hard-earned advice.
              </p>
              <p style={{ margin: '0' }}>
                Help shape the next generation of crawlers and keep the community moving in the right direction.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div
          style={{
            backgroundColor: 'white',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '48px',
            border: '2px solid #e5e7eb',
            borderRadius: '60px',
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(to right, #10b981, #3b82f6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px',
              }}
            >
              <span style={{ fontSize: '24px' }}>⭐</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', margin: '0' }}>
              What We Offer
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'white',
                }}
              >
                <span style={{ fontSize: '20px' }}>🔧</span>
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                }}
              >
                Build Guidance
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                From axle swaps to suspension setups, get help planning and executing your rock crawler build.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'white',
                }}
              >
                <span style={{ fontSize: '20px' }}>🗺️</span>
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                }}
              >
                Trail Intel
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Share and discover trail conditions, difficulty ratings, and local knowledge from experienced crawlers.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#8b5cf6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'white',
                }}
              >
                <span style={{ fontSize: '20px' }}>👥</span>
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                }}
              >
                Community Support
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Connect with crawlers at every level - from first-time builders to seasoned competitors.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#f59e0b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'white',
                }}
              >
                <span style={{ fontSize: '20px' }}>📸</span>
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                }}
              >
                Build Showcases
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Show off your rigs, from budget builds to full custom fabrication work.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#ef4444',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'white',
                }}
              >
                <span style={{ fontSize: '20px' }}>🔧</span>
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                }}
              >
                Technical Help
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Get help with everything from gear ratios to steering geometry from experienced builders.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#eab308',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'white',
                }}
              >
                <span style={{ fontSize: '20px' }}>📚</span>
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                }}
              >
                Learning Resources
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Learn the fundamentals of rock crawling, from basic techniques to advanced competition strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div
          style={{
            backgroundColor: 'white',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '40px',
            border: '2px solid #e5e7eb',
            borderRadius: '50px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px',
              }}
            >
              <span style={{ fontSize: '24px' }}>📖</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', margin: '0' }}>
              Our Story
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              fontSize: '18px',
              lineHeight: '1.75',
              color: '#4b5563',
              textAlign: 'center',
              maxWidth: '896px',
              margin: '0 auto',
            }}
          >
            <p>
              What started with a shared love for rock crawling has turned into something bigger. We've all been in
              those spots — standing around a broken rig trying to figure out what went wrong, or staring at a parts
              catalog wondering what you actually need versus what just looks cool.
            </p>
            <p>
              This community came together because we realized rock crawling works best when knowledge gets passed down.
              Whether you're trying to build your first budget rig or you're chasing podium finishes, everyone benefits
              when the community stays strong and welcoming.
            </p>
            <p>
              We keep it simple: help the new guys learn without feeling stupid, give the veterans a place to share what
              they've learned, and make sure the culture of the sport stays healthy. That's what this is about.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div
          style={{
            backgroundColor: 'white',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '40px',
            border: '2px solid #e5e7eb',
            borderRadius: '50px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px',
              }}
            >
              <span style={{ fontSize: '24px' }}>💎</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', margin: '0' }}>
              Our Values
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #bfdbfe',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>🤝</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1d4ed8', margin: '0' }}>
                  Inclusive Community
                </h3>
              </div>
              <p style={{ color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Everyone starts somewhere. We believe in creating a space where new crawlers can ask questions without
                getting talked down to, and veterans can share knowledge freely.
              </p>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #bbf7d0',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#10b981',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>🎯</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#059669', margin: '0' }}>
                  Real-World Knowledge
                </h3>
              </div>
              <p style={{ color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                We focus on what actually works on the rocks, not just what looks good in magazines. Practical advice
                from people who break parts and fix them.
              </p>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #e9d5ff',
                transition: 'all 0.3s ease',
              }}
              className=""
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#8b5cf6',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>⬆</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#7c3aed', margin: '0' }}>
                  Paying It Forward
                </h3>
              </div>
              <p style={{ color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                The sport grows when knowledge gets passed down. Whether you're sharing a build tip or helping with a
                trail fix, we all benefit when the community stays strong.
              </p>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #fed7aa, #fdba74)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #fdba74',
                transition: 'all 0.3s ease',
              }}
              className=""
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#f59e0b',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>⚡</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#d97706', margin: '0' }}>Keep It Simple</h3>
              </div>
              <p style={{ color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                No unnecessary drama or gatekeeping. We're here to crawl rocks, help each other out, and have a good
                time doing it. That's what matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Premium Footer */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(to right, #0f172a, #1e293b, #0f172a)',
          color: 'white',
          overflow: 'hidden',
          marginTop: '64px',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Main Contact Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/30">
              <span className="mr-2">✨</span>
              Ready to Connect?
            </div>
            <h2
              style={{
                fontSize: '3xl',
                lineHeight: '1',
                fontWeight: 'bold',
                marginBottom: '24px',
                background: 'linear-gradient(to right, #ffffff, #dbeafe, #e9d5ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              className="lg:text-5xl"
            >
              Get In Touch
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Have questions, suggestions, or want to collaborate? We're here to help you on your automotive journey!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '48px',
              marginBottom: '64px',
              maxWidth: '900px',
              margin: '0 auto 64px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}>📧</span>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', margin: '0 0 8px 0' }}>Email Us</h3>
              <p style={{ color: '#93c5fd', fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0' }}>
                hello@bullnbrains.com
              </p>
              <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 8px 0' }}>We respond within 24 hours</p>
              <span style={{ color: '#4ade80', fontSize: '12px', fontWeight: '500' }}>✓ Professional Support</span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}>💬</span>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', margin: '0 0 8px 0' }}>Community</h3>
              <Link
                href="/forum"
                style={{
                  color: '#c4b5fd',
                  fontSize: '16px',
                  fontWeight: '500',
                  textDecoration: 'underline',
                  display: 'block',
                  margin: '0 0 4px 0',
                }}
                className="hover:text-purple-200 transition-colors"
              >
                Join Our Forum
              </Link>
              <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 8px 0' }}>10,000+ active members</p>
              <span style={{ color: '#a78bfa', fontSize: '12px', fontWeight: '500' }}>✓ Expert Discussions</span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}>📱</span>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', margin: '0 0 8px 0' }}>Follow Us</h3>
              <p style={{ color: '#6ee7b7', fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0' }}>@BullnBrains</p>
              <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 8px 0' }}>Daily automotive insights</p>
              <span style={{ color: '#4ade80', fontSize: '12px', fontWeight: '500' }}>✓ Latest Updates</span>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">BullnBrains</h3>
                <p className="text-slate-400 max-w-md">
                  Empowering car enthusiasts with knowledge, community, and expert guidance since 2024.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-slate-400">
                <a href="#" className="hover:text-white transition-colors text-sm font-medium">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors text-sm font-medium">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors text-sm font-medium">
                  Support
                </a>
                <a href="#" className="hover:text-white transition-colors text-sm font-medium">
                  Blog
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-slate-500 text-sm">
                © 2024 BullnBrains. All rights reserved. | Made with ❤️ for car enthusiasts worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
