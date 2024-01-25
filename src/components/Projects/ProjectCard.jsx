import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      {/*<Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "200px",
          objectFit: "contain",
          alignSelf: "flex-start",
          borderRadius: "10%",
        }}
      />*/}
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <Card.Title style={{fontSize: "28px",  color: "#faebd7" }}>{props.title}</Card.Title>
        <Card.Subtitle style={{ paddingTop: "15px", paddingBottom: "10px", fontSize: "17px", fontStyle: "oblique"}}>{props.subtitle}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify", fontSize:"15px" }}>
          {props.description}
        </Card.Text>
        {/*<Card.Footer style={{fontSize: "20px", color: "#efc75e"}}>{props.footer}</Card.Footer>*/}
        {/*<Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "flex-end",
            textAlign: "center",
            position: "relative",
            bottom: "0px",
          }}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignContent: "flex-end",
              alignItems: "center",
              textAlign: "center",
              position: "static",
              bottom: "0px",
            }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
          )}*/}
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;
