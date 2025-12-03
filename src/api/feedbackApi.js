export async function submitFeedback({ feedback, rating }) {
  const endpoint = 'https://api.sheetbest.com/sheets/f7200956-693d-4301-be02-3494b6ef9317';

  // generate new user ID every time
  const name = `user${Math.floor(1000 + Math.random() * 9000)}`;

  const body = {
    name,
    feedback,
    rating,
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit feedback: ${response.statusText}`);
  }

  return response.json();
}
