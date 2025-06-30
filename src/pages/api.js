const API_BASE_URL = "https://cyber-edu-production.up.railway.app";

// Helper function untuk handle response error
const handleErrorResponse = async (response) => {
  const errorData = await response.json();
  console.error("Error response:", errorData);

  let message = "Terjadi kesalahan pada server";
  if (errorData.detail) {
    if (Array.isArray(errorData.detail)) {
      message = errorData.detail.map(d => {
        if (typeof d === "string") return d;
        if (d.msg) return d.msg;
        return JSON.stringify(d);
      }).join(", ");
    } else if (typeof errorData.detail === "string") {
      message = errorData.detail;
    }
  }

  const error = new Error(message);
  error.status = response.status;
  error.data = errorData;
  throw error;
};

// Wrapper untuk fetch dengan timeout
const fetchWithTimeout = async (url, options = {}, timeout = 8000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);

    if (!response.ok) {
      return handleErrorResponse(response);
    }

    return response;
  } catch (error) {
    clearTimeout(id);
    if (error.name === 'AbortError') {
      throw new Error("Request timeout, coba lagi nanti");
    }
    throw error;
  }
};

export const submitQuizResult = async (quizData, token) => {
  console.log("Mengirim data quiz dengan token:", token);
  
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/quiz-results`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(quizData),
    });

    console.log("Response status:", response.status);
    return await response.json();
  } catch (error) {
    console.error("Error dalam submitQuizResult:", {
      message: error.message,
      stack: error.stack,
      ...(error.data && { errorData: error.data })
    });
    
    // Tambahkan pesan error yang lebih user-friendly
    if (error.message.includes("timeout")) {
      throw new Error("Koneksi timeout, periksa koneksi internet Anda");
    } else if (error.message.includes("Failed to fetch")) {
      throw new Error("Tidak dapat terhubung ke server");
    }
    
    throw error;
  }
};

export const getMyQuizResults = async (token) => {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/quiz-results/me`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await response.json();
    
    // Normalisasi data untuk memastikan konsistensi
    return data.map(result => ({
      ...result,
      level: result.level.toLowerCase(), // pastikan konsisten lowercase
      percentage: parseFloat(result.percentage) || 0,
      created_at: new Date(result.created_at)
    }));
  } catch (error) {
    console.error("Error dalam getMyQuizResults:", error);
    throw new Error("Gagal memuat hasil quiz: " + error.message);
  }
};

// Fungsi baru untuk mengecek status level
export const checkLevelCompletion = async (level, token) => {
  try {
    const results = await getMyQuizResults(token);
    const levelResult = results.find(r => r.level === level.toLowerCase());
    
    return {
      completed: levelResult?.percentage >= 70,
      highestScore: levelResult?.percentage || 0
    };
  } catch (error) {
    console.error("Error dalam checkLevelCompletion:", error);
    return { completed: false, highestScore: 0 };
  }
};

// Fungsi untuk request sertifikat
export const requestCertificate = async (email, token) => {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/generate-certificate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ email }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error dalam requestCertificate:", error);
    throw new Error("Gagal meminta sertifikat: " + error.message);
  }
};