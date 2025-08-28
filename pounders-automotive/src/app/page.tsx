import Image from 'next/image'
import Button from '../button';
export default function Home() {
  return (
    <>
      <header>
        <h1>Pounders Automotive Dealership</h1>
        <div className="header-button">
        <Button title="Vehicles">Vehicles</Button>
        <Button title="About Us">About Us</Button>
        <Button title="Contact Us">Contact Us</Button>
        </div>
      </header>
      <main>
        <p>Welcome to Pounders Automotive. Where we turn heads, not wallets!</p>
      </main>

    </>
  )
}
