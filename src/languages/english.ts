import { LanguageTexts } from "./portuguese";

export default {
  title: "Pick an algorithm and visualize it!",
  startNodeText: "Start Node",
  targetNodeText: "Target Node",
  wallNodeText: "Wall Node",
  clearButtonText: "Clear Grid",
  algorithmsButtonText: "Algorithms",
  mazeGeneratorButtonText: "Generate Maze",
  visualizeButton: "Visualize",
  speedButon: "Speed",
  tutorialTitle: "Welcome to PathDiscover Visualizer!",
  tutorialPage0:
    'This application ilustrates how some path-find algorithms works; how they search for a path between two points. All of the algorithms here are adapted for a 2D grid, where 90 degree turns have a "cost" of 1 and movements from a node to another have a "cost" of 1.',
  tutorialPage1:
    'You can start by selecting the "Wall Node". Then, you can click and drag to create walls all over the board. You can also click on "Generate Maze" to create a random maze. If you need to break some walls, just select "Start Node" or "Target Node" and click on it. After that, just replace your node.',
  tutorialPage2:
    'You can also select "Start Node" to set a starting point and "Target Node" to set the goal.',
  tutorialPage3:
    'Once you have a "Start Node" and a "Target Node", you can click on the algorithms button and choose one of them to see how it works.',
  tutorialPage4:
    "Now, all you need to do is click on the visualize button. Have fun!",
  tutorialPage5:
    "Now, all you need to do is click on the visualize button. Have fun!",
  tutorialPage1Title: "Placing Walls",
  tutorialPage2Title: "Selecting Start and Target Nodes",
  tutorialPage3Title: "Selecting an Algorithm",
  tutorialPage4Title: "Visualizing it!",
} as LanguageTexts;
