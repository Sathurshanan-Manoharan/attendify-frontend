import MenuAppBar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import TimeDate from "../components/TimeDate";

export default function Dashboard() {
  return (
    <div>
      <MenuAppBar />
      <Sidebar />
      <TimeDate />
    </div>
  )
}
