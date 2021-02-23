import globalStyles from "./styles/global-styles";
import { Global } from "frontity";

const Theme = () => {
  return (
    <>
      <Global styles={globalStyles()} />
      <h1>Twenty Fifteen theme for Frontity</h1>
    </>
  );
};

export default Theme;
