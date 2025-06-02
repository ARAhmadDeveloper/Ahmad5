export const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/users'); // Adjust the URL to match your FastAPI server
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    return res.json();
  };
  