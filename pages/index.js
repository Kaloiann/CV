import Navigation from "./Navigation/Navigation";
import CoverLetter from "./Content/CoverLetter"
import classes from "./index.module.css"
import MotivationLetter from "./Content/MotLetter";
import Contact from "./Content/Contact";

export default function Home() {
  return (
      <div className={classes.app}>
        <Navigation />
        {/* <CoverLetter /> */}
        {/* < MotivationLetter /> */}
        <Contact />
      </div>
  )
}
