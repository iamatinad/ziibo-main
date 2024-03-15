import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";

function Faqs() {
  return (
    <div className="accordian">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What is Ziibo?
        </AccordionSummary>
        <AccordionDetails>
          Ziibo is a movie streaming website where you can watch a variety of
          movies and TV shows. We offer a wide range of content, including
          popular movies,cartoons, animes , documentaries, and more!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          How much does Ziibo cost?
        </AccordionSummary>
        <AccordionDetails>
          Ziibo costs $10.99 per month to subscribe.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How can I get Ziibo for Free?
        </AccordionSummary>
        <AccordionDetails>
          New users can enjoy Ziibo for free for the first 15 days as a trial
          period. Also, you can get up to 3 months of Tv time if you buy the
          ZiiboTV.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Where can I watch Ziibo?
        </AccordionSummary>
        <AccordionDetails>
          Ziibo can be watched on all smart TVs, ZiiboTv, web browsers,
          AppleTV+, Roku, and other supported devices.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Can share Ziibo with my family?
        </AccordionSummary>
        <AccordionDetails>
          Yes, you can share Ziibo with your family. One Ziibo account can be
          shared with up to 5 people, allowing everyone to enjoy the content
          together.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Faqs;
