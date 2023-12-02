export const Scroll2Element = (e, selector) => {
  e.preventDefault();
  const targetElement = document.querySelector(selector);
  targetElement.scrollIntoView({ behavior: "smooth" });
};
