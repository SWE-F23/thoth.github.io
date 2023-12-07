import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CodeIcon from "@mui/icons-material/Code";
import ResponsiveAppBar from "./AppBar";
import '../../src/app/globals.css';

interface LessonProps {
  lessonNumber: number;
  openSent: boolean;
  showDescription: boolean;
  handleClick: () => void;
  handleDescriptionClick: () => void;
}

const LessonItem: React.FC<LessonProps> = ({
  lessonNumber,
  openSent,
  showDescription,
  handleClick,
  handleDescriptionClick,
}) => {
  const lessonLinks: Record<string, any> = {
    lesson1: {
      problems: [
        "https://www.hackerrank.com/challenges/cpp-hello-world/problem?isFullScreen=true",
        "...",
        "...",
      ],
      videoSolutions: ["https://www.youtube.com/", "...", "..."],
      codeSolutions: ["https://ideone.com/qAVjdh", "...", "..."],
    },
    lesson2: {
      problems: ["...", "...", "..."],
      videoSolutions: ["...", "...", "..."],
      codeSolutions: ["...", "...", "..."],
    },
  };

  const generateLessonData = () => {
    const lessonData = lessonLinks[`lesson${lessonNumber}`];

    return lessonData.problems.map((problem: string, index: number) => {
      const videoSolution: string = lessonData.videoSolutions[index];
      const codeSolution: string = lessonData.codeSolutions[index];

      let difficultyText: string = "";
      switch (index) {
        case 0:
          difficultyText = "Easy";
          break;
        case 1:
          difficultyText = "Medium";
          break;
        case 2:
          difficultyText = "Hard";
          break;
        default:
          difficultyText = "";
      }

      return (
        <ListItemButton
          key={index}
          component="a"
          href={problem}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            pl: 6,
            width: "100%",
            fontSize: "1.4rem",
            borderRadius: "0px",
            borderBottom: openSent ? "1px solid #ccc" : "none",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // Grid layout
            alignItems: "center",
            gap: "75px",
          }}
        >
          <ListItemText
            sx={{
              color: "black",
              letterSpacing: "0.5px",
            }}
          >
            Problem {index + 1}
          </ListItemText>
          <ListItemText
            sx={{
              color:
                difficultyText === "Easy"
                  ? "green"
                  : difficultyText === "Medium"
                  ? "orange"
                  : "red",
            }}
          >
            {difficultyText}
          </ListItemText>
          <a
            href={videoSolution}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            <PlayCircleIcon />
          </a>
          <a
            href={codeSolution}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <CodeIcon />
          </a>
        </ListItemButton>
      );
    });
  };

  return (
    <>
      <ListItemButton
        sx={{
          fontSize: "2.2rem",
          width: "100%",
          borderRadius: "8px",
          marginBottom: "10px",
          borderBottom: "1px solid #ccc",
        }}
        onClick={handleClick}
      >
        <ListItemText
          primary={
            openSent ? (
              <>
                <strong>Lesson {lessonNumber}</strong>
                {showDescription && (
                  <span>Problem Video Solution Code Solution</span>
                )}
              </>
            ) : (
              <strong>Lesson {lessonNumber}</strong>
            )
          }
          sx={{ color: "#333", fontWeight: "bold", width: "100%" }}
          onClick={handleDescriptionClick}
        />
        {openSent ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSent} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {generateLessonData()}
        </List>
      </Collapse>
    </>
  );
};

const NestedList: React.FC = () => {
  const [openSent1, setOpenSent1] = React.useState<boolean>(false);
  const [showDescription1, setShowDescription1] =
    React.useState<boolean>(false);

  const handleClickSent1 = () => {
    setOpenSent1(!openSent1);
    setShowDescription1(false);
  };

  const handleDescriptionClick1 = () => {
    setShowDescription1(!showDescription1);
  };

  const [openSent2, setOpenSent2] = React.useState<boolean>(false);
  const [showDescription2, setShowDescription2] =
    React.useState<boolean>(false);

  const handleClickSent2 = () => {
    setOpenSent2(!openSent2);
    setShowDescription2(false);
  };

  const handleDescriptionClick2 = () => {
    setShowDescription2(!showDescription2);
  };

  return (
      <div className="homepage">
      <ResponsiveAppBar />
      <List
        sx={{
          width: "100%",
          maxWidth: 600,
          bgcolor: "background.paper",
          margin: "100px auto",
          textAlign: "center",
          paddingBottom: "20px",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListSubheader
          sx={{
            fontSize: "2rem",
            color: "#0077cc",
            width: "100%",
            textAlign: "center",
            marginBottom: "30px",
            fontWeight: "bold",
          }}
          component="div"
          id="nested-list-subheader"
        >
          <strong>Practice Problems</strong>
        </ListSubheader>

        {/* Lesson 1 */}
        <LessonItem
          lessonNumber={1}
          openSent={openSent1}
          showDescription={showDescription1}
          handleClick={handleClickSent1}
          handleDescriptionClick={handleDescriptionClick1}
        />

        {/* Lesson 2 */}
        <LessonItem
          lessonNumber={2}
          openSent={openSent2}
          showDescription={showDescription2}
          handleClick={handleClickSent2}
          handleDescriptionClick={handleDescriptionClick2}
        />
      </List>
    </div>
  );
};

export default NestedList;
