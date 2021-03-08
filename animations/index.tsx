export const FadeIn = (duration: number = 1, delay: number = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: duration, delay: delay }
});

export const GoUp = (
  y: number = 0,
  duration: number = 1,
  delay: number = 0
) => ({
  initial: { y: 0 },
  animate: { y: -y },
  transition: { delay: delay, duration: duration }
});

export const FadeInAndGoUp = (
  y: number = 0,
  duration: number = 1,
  delay: number = 0
) => ({
  initial: { y: 0, opacity: 0 },
  animate: { y: -y, opacity: 1 },
  transition: { duration: duration, delay: delay }
});

export const ScaleBigger = () => ({
  scale: 1.1
});

export const DoNothing = () => ({
  scale: 0
});

export const GoDown = (duration: number = 1) => ({
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: duration }
});


export const FadeInAndGoDown = (duration: number = 1, delay: number = 0) => ({
  initial: {y: -100, opacity: 0},
  animate: {y: 0, opacity: 1},
  transition: { duration: duration, delay: delay}
})

export const FadeInAndRight = (
  x: number = 0,
  duration: number = 1,
  delay: number = 0
) => ({
  initial: { x: -100, opacity: 0 },
  animate: { x: x, opacity: 1 },
  transition: { duration: duration, delay: delay }
});


export const FadeInAndUp = (
  y: number = 0,
  duration: number = 1,
  delay: number = 0
) => ({
  initial: { y: 100, opacity: 0 },
  animate: { y: y, opacity: 1 },
  transition: { duration: duration, delay: delay }
});