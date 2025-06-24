const API_BASE_URL = "https://667f-36-84-38-30.ngrok-free.app";

export const submitQuizResult = async (quizData, token) => {
  console.log("Mengirim data quiz dengan token:", token); // Debug 1
  
  try {
    const response = await fetch(`${API_BASE_URL}/quiz-results`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(quizData),
    });

    console.log("Response status:", response.status); // Debug 2

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", errorData); // Debug 3
      throw new Error(errorData.detail || "Gagal menyimpan hasil quiz");
    }

    return await response.json();
  } catch (error) {
    console.error("Error dalam submitQuizResult:", {
      message: error.message,
      stack: error.stack
    }); // Debug 4
    throw error;
  }
};

export const getMyQuizResults = async (token) => {
  const response = await fetch(`${API_BASE_URL}/quiz-results/me`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch quiz results");
  }

  return await response.json();
};