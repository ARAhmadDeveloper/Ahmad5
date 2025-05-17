import Layout from './components/Layout'
import RevenueChart from './components/RevenueChart'
import AnimatedCard from './components/AnimatedCard'

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedCard />
        <RevenueChart />
      </div>
    </Layout>
  )
}
