import { Button } from '@repo/ui/button'
export default function Home() {
  return (
    <>
      <header>
        <h1>Pounders Automotive Dealership</h1>
        <div className="header-button">
          <Button>Vehicles</Button>
          <Button>About Us</Button>
          <Button>Contact Us</Button>
        </div>
      </header>
      <main>
        <p>Welcome to Pounders Automotive. Where we turn heads, not wallets!</p>
      </main>
    </>
  )
}
