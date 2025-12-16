'use client'

import { useRouter } from 'next/navigation'

export default function BuildsPage() {
  const router = useRouter()

  const builds = [
    {
      id: 1,
      title: 'Jeep Wrangler Rock Crawler',
      description: 'Great for extreme rock crawling and technical trails',
      image: 'https://www.motortrend.com/f/164828392.jpg?w=768&width=768&q=75&format=webp',

      specs: ['King Shocks 6" Lift', 'Custom Front Bumper', 'Warn Winch with Synthetic Cable'],
    },
    {
      id: 2,
      title: 'Toyota Tacoma Trail Runner',
      description: 'Mid-travel suspension setup perfect for high-speed desert running',
      image:
        'https://cdn.shopify.com/s/files/1/2493/4414/files/Dirt_King_Long_Travel_Kit_Spring_Under_Kit_Wheel_Travel_Toyota_Tacoma_Header.jpg?v=1664817880',

      specs: ['King 2.5 Coilovers', '33" All-Terrain Tires', 'Fiberglass Bedsides', 'Long Travel Arms'],
    },
    {
      id: 3,
      title: 'Ford Bronco ',
      description: '2021 Bronco',
      image: 'https://cdn.bronco6g.com/attachments/736/736963-a0970cf6d95bdc65f2fbb3f77a79459e.jpg',

      specs: [
        '2.7L EcoBoost V6 engine',
        '10-speed Auto',
        'Fox Racing Shocks',
        'Wilwood Brakes, Custom Front Bumper with pod light mounts',
      ],
    },
    {
      id: 4,
      title: 'Chevy K5 Blazer Build',
      description: 'Square body Blazer built for adventure with modern reliability',
      image: 'https://www.streettrucksmag.com/wp-content/uploads/2023/02/C10-2372-LTFD-Lead.webp',

      specs: ['6.2L LS3 Engine', '4L80E Transmission', '35" Mud Tires', 'Full Roll Cage'],
    },
    {
      id: 5,
      title: 'Toyota 4Runner TRD Pro',
      description: 'Ultimate off-road capability with factory reliability',
      image: 'https://www.motortrend.com/uploads/2024/04/054-2025-Toyota-4Runner-TRD-Pro-front-view.jpg',
      specs: ['4.0L V6 Engine', 'TRD Pro Suspension', '17" TRD Wheels', 'Skid Plates'],
    },
    {
      id: 6,
      title: 'Jeep Gladiator Overlander',
      description: 'Built for long-distance adventure and exploration',
      image:
        'https://www.motortrend.com/uploads/2022/07/01-overland-jeep-gladiator-adventure-utah-2020-falken-warn-lights.jpg',
      specs: ['3.6L Pentastar V6', 'Bed Rack System', '35" All-Terrain Tires', 'Roof Top Tent'],
    },
  ]

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px 20px',
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '60px',
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            padding: '12px 24px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '40px',
            backdropFilter: 'blur(10px)',
          }}
        >
          ← Back to Welcome
        </button>

        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            margin: '0 0 20px 0',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Explore Our Builds
        </h1>
        <p
          style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}
        >
          Discover our collection of custom off-road builds, rock crawlers, and project vehicles. Each build is crafted
          with passion and built to conquer any terrain.
        </p>
      </div>

      {/* Builds Vertical Layout */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {builds.map((build) => (
          <div
            key={build.id}
            style={{
              marginBottom: '80px',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Large Image */}
            <div
              style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {build.image.startsWith('http') ? (
                <img
                  src={build.image}
                  alt={build.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                  onError={(e) => {
                    console.log('Image failed to load:', build.image)
                    e.currentTarget.style.display = 'none'
                    const nextSibling = e.currentTarget.nextElementSibling as HTMLElement
                    if (nextSibling) {
                      nextSibling.style.display = 'flex'
                    }
                  }}
                />
              ) : null}
              <div
                style={{
                  background: 'linear-gradient(135deg, #667eea20, #764ba220)',
                  width: '100%',
                  height: '100%',
                  display: build.image.startsWith('http') ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '18px',
                  fontWeight: '500',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              >
                {build.image.startsWith('http') ? 'Image failed to load' : `${build.title} - Image Coming Soon`}
              </div>
            </div>

            {/* Description Section */}
            <div style={{ padding: '40px' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#2d3748',
                  margin: '0 0 16px 0',
                  textAlign: 'center',
                }}
              >
                {build.title}
              </h2>

              <p
                style={{
                  color: '#4a5568',
                  fontSize: '18px',
                  lineHeight: '1.7',
                  margin: '0 0 30px 0',
                  textAlign: 'center',
                  maxWidth: '600px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {build.description}
              </p>

              {/* Specs in a clean layout */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px',
                  marginBottom: '30px',
                }}
              >
                {build.specs.map((spec, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'rgba(102, 126, 234, 0.1)',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      textAlign: 'center',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#4a5568',
                    }}
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div
        style={{
          maxWidth: '800px',
          margin: '80px auto 0 auto',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '40px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
            margin: '0 0 16px 0',
          }}
        >
          Ready to Build Your Dream Rig?
        </h2>
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '18px',
            margin: '0 0 30px 0',
            lineHeight: '1.6',
          }}
        >
          Have a vision for your perfect off-road build? Let's make it happen. From mild trail rigs to extreme rock
          bouncers, we build it all.
        </p>
        <button
          style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '16px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: '600',
            boxShadow: '0 8px 20px rgba(245, 87, 108, 0.3)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(245, 87, 108, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(245, 87, 108, 0.3)'
          }}
        >
          Start Your Custom Build
        </button>
      </div>
    </div>
  )
}
