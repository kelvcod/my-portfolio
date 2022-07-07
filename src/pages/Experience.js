import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mass Communication, Unilag, Lagos
          </h3>
          <p> University of Lagos, Nigeria</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="10.2017 - 04.2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            VHS FRANKFURT AM MAIN
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            Germany Language Course{" "}
          </h4>

          <p> INTERGRATIONSKURZ INKL DEUTSCHKURS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="-08.2020 - 12.2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            WBS Coding School, Berlin, Germany
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Training</h4>

          <p> FULL STACK WEB DEVELOPER </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="04.2019 - 10.2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ground Staff - Fraport - Frankfurt Airport
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Frankfurt, Germany
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
