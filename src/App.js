import { Outlet } from 'react-router-dom';
import Dashboardview from './components/Dashboardview';
import Sidebar from './components/Sidebar';
import logo from './logo.svg';


function App() {
  return (
    <div className="">
      <div className="flex overflow-scroll ">
        <div className="hidden lg:block w-1/5 xl:w-1/6 h-[100vh]">
          <Sidebar />
        </div>
        <div className="w-full lg:w-4/5 xl:w-5/6 h-[100vh] overflow-scroll">
          <Dashboardview />
          <div>
            <Outlet></Outlet>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
// basis-[12%] h-[100vh]
// basis-[88%] border overflow-scroll h-[100vh]