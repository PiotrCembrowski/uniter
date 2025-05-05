import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import Header from "./header/Header";
import UnitDash from "./units/UnitDash";
import StoreProvider from "../StoreProvider";

const Dashboard = () => {
  return (
    <StoreProvider>
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <UnitDash />
        </div>
      </div>
    </StoreProvider>
  );
};

export default Dashboard;
