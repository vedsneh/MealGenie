// src/components/ServiceLayout.tsx
import Sidebar from "./Sidebar";

const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex pt-20">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default ServiceLayout;
