// browser-dom.js
// Drop into a simple HTML page (browser-dom.html).

const root = document.getElementById('root');

const btn = document.createElement('button');
btn.textContent = 'Click me';

const p = document.createElement('p');
p.textContent = 'Button not clicked yet.';

btn.addEventListener('click', () => {
  p.textContent = `Clicked at ${new Date().toLocaleTimeString()}`;
  btn.disabled = true;
});

root.appendChild(btn);
root.appendChild(p);
