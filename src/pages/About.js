import { ReactComponent as WorkIcon } from "./../assets/work.svg";
import { ReactComponent as SchoolIcon } from "./../assets/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1 className="text-4xl  text-center text-secondary py-14 w-[98vw] justify-center">
        About Me
      </h1>
      <VerticalTimeline animate={true} lineColor={"goldenrod"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            fontFamily: "monospace",
            background: "#3d4451",
            color: "#grey",
            boxShadow: "initial",
            fontWeight: "700",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #3d4451" }}
          date="2014"
          iconStyle={{ background: "goldenrod", color: "#grey" }}
          icon={<SchoolIcon />}
        >
          <h3
            style={{ fontSize: "1.5vw" }}
            className="vertical-timeline-element-title"
          >
            <em>10th Standard</em>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cambridge Public School
          </h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            fontFamily: "monospace",
            background: "#3d4451",
            color: "#grey",
            boxShadow: "initial",
            fontWeight: "700",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #3d4451" }}
          date="2016"
          iconStyle={{ background: "goldenrod", color: "#grey" }}
          icon={<SchoolIcon />}
        >
          <h3
            style={{ fontSize: "1.5vw" }}
            className="vertical-timeline-element-title"
          >
            <em>12th Standard</em>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nagarjuna PU College
          </h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            fontFamily: "monospace",
            background: "#3d4451",
            color: "#grey",
            boxShadow: "initial",
            fontWeight: "700",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #3d4451" }}
          date="2016 - 2020"
          iconStyle={{ background: "goldenrod", color: "#grey" }}
          icon={<SchoolIcon />}
        >
          <h3
            style={{ fontSize: "1.5vw" }}
            className="vertical-timeline-element-title"
          >
            <em>Bachelors of Engineering</em>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SJC Institute of Technology | Information Science
          </h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            fontFamily: "monospace",
            background: "#3d4451",
            color: "#grey",
            boxShadow: "initial",
            fontWeight: "700",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #3d4451" }}
          date="Oct 2020 - Aug 2021"
          iconStyle={{ background: "goldenrod", color: "#grey" }}
          icon={<WorkIcon />}
        >
          <h3
            style={{ fontSize: "1.5vw" }}
            className="vertical-timeline-element-title"
          >
            <em>Systems Engineer</em>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Infosys | .Net Framework
          </h4>
          <p>
            Carried out the development activities according to Software
            Development Life Cycle(SDLC) and programming using agile
            methodology, involving task completion, user stories and iterations.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            fontFamily: "monospace",
            background: "#3d4451",
            color: "#grey",
            boxShadow: "initial",
            fontWeight: "700",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #3d4451" }}
          date="2021 - 2023"
          iconStyle={{ background: "goldenrod", color: "#grey" }}
          icon={<SchoolIcon />}
        >
          <h3
            style={{ fontSize: "1.5vw" }}
            className="vertical-timeline-element-title"
          >
            <em></em>
            <em>Masters in Computer Science</em>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            RV College of Engineering
          </h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            fontFamily: "monospace",
            background: "#3d4451",
            color: "#grey",
            boxShadow: "initial",
            fontWeight: "700",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #3d4451" }}
          date="Dec 2022 - present"
          iconStyle={{ background: "goldenrod", color: "#grey" }}
          icon={<WorkIcon />}
        >
          <h3
            style={{ fontSize: "1.5vw" }}
            className="vertical-timeline-element-title"
          >
            <em>Software Intern</em>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Microchip Technology | Typescript Developer
          </h4>
          <p></p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default About;
