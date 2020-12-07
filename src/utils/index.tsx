export const isScreenBottomReached = (customOffset: number = 2): boolean => {
  return window.innerHeight + window.pageYOffset >= document.body.offsetHeight - customOffset;
};
