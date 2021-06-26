export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: { //Storybook -> Writing Stories -> Naming components and hierarchy -> Sorting stories
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}