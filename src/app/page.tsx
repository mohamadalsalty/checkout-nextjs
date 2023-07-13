import Checkout from "./components/Checkout"
import News from "./components/News"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-4 bg-[#F2F2F2]">
      <Checkout />
      <News />
    </main>
  )
}
