// import Table from "../subscription/page"
import AnalyticsDashboard from "./charts/analytics-dashboard"
import PieCharts from "./charts/pie-chart"
import DashCards from "./dashcards"
import Navbar from "./navbar"

const Dashboard = () => {
  return (
    <>

    <div className="px-9 pb-9 flex flex-col gap-4">
    <Navbar/>
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl text-black">Dashboard</h1>
        <p className="text-[#000000]/70">Here`s whats happening Today</p>
      </header>
      <section>
        <DashCards />
      </section>
     <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <div className="">
      <AnalyticsDashboard/>
      </div>
      <PieCharts/>
     </main>
     {/* <footer>
      <Table/>
     </footer> */}
    </div>
    
    </>
  )
}

export default Dashboard