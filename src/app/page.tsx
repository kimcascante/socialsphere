// pages/index.js
import Header from "@/component/Header";
import Head from "next/head";
import LandingPage from "./pages/LandingPage/LandingPage";
import LogInPage from "./pages/Log-InPage/LogInPage";
import IntroductionModal from "@/components/introduction-modal";

export default function Home() {
  return (
    <>
      <div>
 
     <LogInPage/>
     </div>
    </>
  );
}
