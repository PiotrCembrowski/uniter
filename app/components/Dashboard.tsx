import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import FileCard from "./FileCard";
import { Bell, Grid, Plus, Search } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex-1">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <div className="w-96">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search files..."
              className="pl-9"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg"
              alt="Avatar"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="mb-6 flex items-center gap-4">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create
          </Button>
          <Button variant="outline" className="gap-2">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Upload
          </Button>
          <Button variant="outline" className="gap-2">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Create folder
          </Button>
          <Button variant="outline" className="gap-2">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM12 14a2 2 0 100-4 2 2 0 000 4z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Record
          </Button>
        </div>

        <div className="mb-6">
          <Tabs defaultValue="recent">
            <TabsList>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="starred">Starred</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FileCard title="Metric System" unitType="length" />
          <FileCard title="Imperial System" unitType="length" />
          <FileCard title="Sea Metric" unitType="length" />
          <FileCard title="Astronomic Metric" unitType="length" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
