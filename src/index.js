import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/twentyfifteen-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "twentyfifteen-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
