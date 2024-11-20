"use server"
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contact-us`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );


    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || `Error: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    // console.log('data', data);
    return {error: false, data};

  } catch (error) {
    console.error("Error in submitContactForm:", error.message);
    return {
      error: true,
      message: error.message || "An unknown error occurred",
      data: {data: [], count: 0},
    };
  }
};