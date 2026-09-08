// Optional REST API integration example.
// In a larger version, this can be connected to a backend.
const API_BASE_URL = "https://example.com/api/tasks";

async function fetchTasks() {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) throw new Error("Unable to fetch tasks");
  return response.json();
}

module.exports = { fetchTasks };
