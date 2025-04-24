import { ClipboardList, Home, Package, Settings, Utensils } from "lucide-react";
import { useState } from "react";

const DashboardMonitors = () => {
  return (
    <div className="min-h-screen  py-8 bg-gradient-to-br  bg-gray-50  ">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Monitoring Dashboard
      </h1>

      <Board />
      {/* Middle Content (8 columns) */}
    </div>
  );
};

const Board = () => {
  const [text, setText] = useState<React.ReactNode[]>([]);
  const handleMenu = () => {
    setText((prev) => [...prev, <div>{prev.length}</div>]);
  };

  return (
    <div className="grid grid-cols-10 gap-2 px-2 py-4 ">
      {/* Left Panel (1 column) */}

      <div className="col-span-1 bg-amber-100 rounded p-2">
        <div className="flex flex-col gap-2">
          <div className="font-semibold self-center">Menu</div>
          <Menu dashboard={handleMenu} />
        </div>
      </div>
      <div className="col-span-9    shadow bg-white rounded p-4">
        <div className="grid grid-cols-4 gap-2 ">
          <div className="border-1 shadow py-10 rounded-md bg-amber-200">
            <h2 className="flex justify-center">column 1</h2>
          </div>
          <div className="border-1 shadow py-10 rounded-md bg-blue-200">
            <h2 className="flex justify-center">column 2</h2>
          </div>
          <div className="border-1 shadow py-10 rounded-md bg-green-200">
            <h2 className="flex justify-center">column 3</h2>
          </div>
          <div className="border-1 shadow py-10 rounded-md bg-pink-200">
            <h2 className="flex justify-center">column 4</h2>
          </div>
        </div>
        <div className="grid grid-cols-9 grid-rows-3  gap-2 p-2 items-center">
          {/* Main Zone */}
          <div className="col-span-6 row-span-3 rounded bg-white    ">
            <div className="  shadow py-44 m-2 mx-0 rounded-md bg-pink-200">
              <h2 className="flex justify-center">
                main zone
                {text}
              </h2>
            </div>
          </div>

          {/* Right Column - Row 1 */}
          <div className="col-span-3 rounded bg-white ">
            <div className=" shadow py-10 m-2 rounded-md bg-pink-200">
              <h2 className="flex justify-center">column 4</h2>
            </div>
          </div>

          {/* Right Column - Row 2 */}
          <div className="col-span-3 rounded bg-white ">
            <div className="  shadow py-10 m-2 rounded-md bg-pink-200">
              <h2 className="flex justify-center">column 4</h2>
            </div>
          </div>

          {/* Right Column - Row 3 */}
          <div className="col-span-3 rounded bg-white ">
            <div className="border-1 shadow py-10 m-2 rounded-md bg-pink-200">
              <h2 className="flex justify-center">column 4</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Menu = ({ dashboard }: any) => {
  return (
    <div className="flex flex-col gap-3">
      <div
        onClick={dashboard}
        className="flex flex-col border-1 p-2 shadow rounded-2xl my-2 px-2` items-center gap-2"
      >
        <Home size={18} /> <span className="max-sm:hidden">Dashboard</span>
      </div>
      <div className="flex flex-col border-1 p-2 shadow rounded-2xl my-2 px-2` items-center gap-2">
        <Utensils size={18} /> <span className="max-sm:hidden">Food Menu</span>
      </div>
      <div className="flex flex-col border-1 p-2 shadow rounded-2xl my-2 px-2` items-center gap-2">
        <ClipboardList size={18} />{" "}
        <span className="max-sm:hidden">Orders</span>
      </div>
      <div className="flex flex-col border-1 p-2 shadow rounded-2xl my-2 px-2` items-center gap-2">
        <Package size={18} /> <span className="max-sm:hidden">Inventory</span>
      </div>
      <div className="flex flex-col border-1 p-2 shadow rounded-2xl my-2 px-2` items-center gap-2">
        <Settings size={18} /> <span className="max-sm:hidden">Settings</span>
      </div>
    </div>
  );
};

export default DashboardMonitors;
