import Table from "../subscription/page"
import AnalyticsDashboard from "./charts/analytics-dashboard"
import PieCharts from "./charts/pie-chart"
import DashCards from "./dashcards"

const Dashboard = () => {
  return (
    <>
    <div className="px-9 pb-9 flex flex-col gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl text-black">Dashboard</h1>
        <p className="text-[#000000]/70">Here`s whats happening Today</p>
      </header>
      <section>
        <DashCards />
      </section>
     <main className="lg:flex-row flex flex-col gap-4 justify-between ">
      <div className="">
      <AnalyticsDashboard/>
      </div>
      <PieCharts/>
     </main>
     <footer>
      <Table/>
     </footer>
    </div>
    
    </>
  )
}

export default Dashboard