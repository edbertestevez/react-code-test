export const isScreenBottomReached = (): boolean => {
  return window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
};
