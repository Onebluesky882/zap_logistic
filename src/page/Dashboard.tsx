import DashboardMonitors from "@/components/DashBoard";
import { GlobalContext } from "@/hooks/GlobalContext";
import { useContext, useEffect } from "react";

const Dashboard = () => {
  const { user, Guard } = useContext(GlobalContext).guardProvider;
  useEffect(() => {
    Guard();
  }, []);

  return (
    <>
      {!user ? (
        <div>Need login</div> // user is logged in
      ) : (
        <div className="">
          <DashboardMonitors />
        </div>
      )}
    </>
  );
};
export default Dashboard;
