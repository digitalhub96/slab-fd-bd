import AboutUs from "./AboutUs";
import Amenities from "./Amenities";
// import DesignPhilosophy from "./DesignPhilosophy";
import Hero from "./Hero";
import InquiryForm from "./InquiryForm";
import ProjectOverview from "./ProjectOverview";
import WorkingPlaces from "./WorkingPlaces";

export default function Home(){
    return(

        <>
        
        <Hero/>
        <AboutUs/>
        <WorkingPlaces/>
        <Amenities/>
        <InquiryForm/>
        {/* <DesignPhilosophy/> */}
        <ProjectOverview/>

        </>

    )
}