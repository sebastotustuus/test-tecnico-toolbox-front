/* eslint-disable no-console */
const getReverseText = async (query) => {
  try {
    const result = await window.fetch(`http://localhost:5000${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await result.json();
    return response;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export default getReverseText;
