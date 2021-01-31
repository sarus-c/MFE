export const randomDateAfterDate = (start: Date, days: number): String => {
  const date = new Date(
    start.getTime() + Math.random() * days * 24 * 60 * 60 * 1000
  );

  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
