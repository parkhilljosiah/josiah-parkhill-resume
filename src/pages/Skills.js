import { Accordion, ListGroup, ListGroupItem } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import "../public/stylesheets/Skills.css";

function Skills() {
  let skills = {
    frontend: [
      "HTML",
      "CSS",
      "Bootstrap/ReactBootstrap",
      "JavaScript",
      "TypeScript",
      "React",
      "Python",
      "Django",
      "React Native",
      "Ionic",
    ],
    backend: [
      "SQL",
      "NoSQL",
      "MySQL",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    softSkills: [
      "Problem-Solver",
      "Organizational",
      "Strong Communication",
      "Decision Making",
      "Strong Leadership",
      "Integrity",
      "Adabtible",
      "Passionate",
    ],
  };

  let frontendList = skills.frontend.map((s) => {
    return <ListGroupItem>{s}</ListGroupItem>;
  });

  let backendList = skills.backend.map((s) => {
    return <ListGroupItem>{s}</ListGroupItem>;
  });

  let softSkillsList = skills.softSkills.map((s) => {
    return <ListGroupItem>{s}</ListGroupItem>;
  });

  return (
    <>
    <p className="heading">skills.</p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Frontend</Accordion.Header>
          <AccordionBody>
            <ListGroup>{frontendList}</ListGroup>
          </AccordionBody>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Backend</Accordion.Header>
          <AccordionBody>
            <ListGroup>{backendList}</ListGroup>
          </AccordionBody>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Soft Skills</Accordion.Header>
          <AccordionBody>
            <ListGroup>{softSkillsList}</ListGroup>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Skills;
