import Navbar from "@/components/Navbar";
import HomeSection from "@/components/Home";
import Project from "./project/page";
import TeamMembers from "@/components/TeamMembers";
import Footer from "@/components/Footers";
import ProjectPage from "@/components/ProjectPage";

export default function Home() {
  return (
    <main >
      <Navbar />
      <HomeSection />
      <ProjectPage/>
      <TeamMembers />
      <Footer />
    </main>
  );
}
