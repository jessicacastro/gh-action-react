import { string } from "prop-types";

import "./HelpBox.css";

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
