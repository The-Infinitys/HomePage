const run: Function = () => {
  const space: HTMLElement = document.querySelector(".bg");
  const asteroid_count: number = 20;
  const asteroid_dispersion: number = asteroid_count / 10;
  const generate: Function = () => {
    const asteroid: HTMLElement = document.createElement("div");
    asteroid.className = "light three-d";
    space!.append(asteroid);
  };
  const define_animation: Function = () => {
    const elems: HTMLElement[] = space!.children;
    for (let i = 0; i < elems.length; i++) {
      const elem: HTMLElement = elems[i];
      elem.addEventListener("animationiteration", () => {
        elem.setAttribute(
          "style",
          `
          --x-pos: ${(
            asteroid_dispersion *
            (2 * Math.random() - 1)
          ).toString()};
          --y-pos: ${(
            asteroid_dispersion *
            (2 * Math.random() - 1)
          ).toString()};
          background-color: hsl(${Math.random().toString()}turn, 100%, 50%);
          `
        );
      });
      console.log(elems.length);
    }
  };
  for (let i = 0; i < asteroid_count; i++) {
    setTimeout(generate, (i * 2000) / asteroid_count);
  }
  setTimeout(define_animation, 2000);
};
run();
