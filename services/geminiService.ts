import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateResponse = async (prompt: string, language: string): Promise<string> => {
  try {
    const systemPrompt = `You are a helpful banking assistant for a Hong Kong bank. 
    The user is currently using the app in language: ${language}.
    Keep responses concise and professional.
    If asked about the '7-Day Smart Saver', mention it has a 2.53% annual yield.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "Sorry, I couldn't understand that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Network error. Please try again later.";
  }
};