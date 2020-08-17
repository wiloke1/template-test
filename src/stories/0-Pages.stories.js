import getBody from "./utils";
import home from "!source-loader!../index.html";
import about from "!source-loader!../about.html";

export default {
  title: "Pages",
};

export const Home = () => {
  return getBody(home);
};

export const About = () => {
  return getBody(about);
};
