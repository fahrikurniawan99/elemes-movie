import useGuestSession from "@/hook/useGuestSession";
import { zIndexs } from "@/utils/constant";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export interface MainLayoutProps {}

export default function MainLayout({}: MainLayoutProps) {
  const { refetch, isLoading } = useGuestSession({});

  useEffect(() => {
    const guestSessionId = localStorage.getItem("guest_session_id");
    if (!guestSessionId) {
      refetch();
    }
  }, [refetch]);
  return (
    <div>
      {isLoading && (
        <div
          style={{ zIndex: zIndexs.guestSessionLoading }}
          className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 bg-black/80  z-50"
        >
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
