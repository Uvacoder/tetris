// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#game {\r\n  outline: red solid 2px;\r\n  background-color: black;\r\n  height: calc(20 * var(--block-size));\r\n  width: calc(10 * var(--block-size));\r\n  display: grid;\r\n  grid-template-rows: repeat(20, 1fr);\r\n  grid-template-columns: repeat(10, 1fr);\r\n}\r\n.game-cell {\r\n  width: var(--block-size);\r\n  height: var(--block-size);\r\n  border: 0.1px rgba(255, 255, 255, 0.3) solid;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}