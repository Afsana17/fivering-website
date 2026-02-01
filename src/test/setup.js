import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable,
  value: (query) => ({
    matches,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
