// export const delay = (ms: number): Promise<void> => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

export const delay = (milliseconds: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < milliseconds) now = Date.now();
};
