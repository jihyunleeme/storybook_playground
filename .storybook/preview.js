import "../src/index.css";

export const parameters = {
  // parameters 스토리북 기능과 애드온 동작 제어
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
