export function select(selector, container = document) {
  return container.querySelector(selector);
}

export function selectAll(selector, container = document) {
  return container.querySelectorAll(selector);
}

export function rect(el) {
  return el?.getBoundingClientRect?.();
}

export function addClass(el, className) {
  el?.classList.add(className);
}

export function removeClass(el, className) {
  el?.classList.remove(className);
}

export function toggleClass(el, className) {
  el?.classList.toggle(className);
}

export function create(el) {
  return document.createElement(el);
}

export function append(container, el) {
  container.appendChild(el);
}

export function size() {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  return { width, height };
}

export function randomNum(min, max, dec = false) {
  return dec
    ? Math.random() * (max - min) + min
    : Math.floor(Math.random() * (max - min) + min);
}

export function keys() {
  const escape = 27;
  const left = 37;
  const up = 38;
  const right = 39;
  const down = 40;

  return { escape, left, up, right, down };
}