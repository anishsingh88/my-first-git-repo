// async-fetch.js
// Works in modern Node.js (v18+) or in the browser console

async function fetchTodo() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log('Fetched TODO:', data);
  } catch (err) {
    console.error('Fetch failed:', err.message);
  }
}

fetchTodo();
