const getReverseText = async (query) => {
  const result = await window.fetch(`http://localhost:5000${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await result.json();
  return response;
};

export default getReverseText;
