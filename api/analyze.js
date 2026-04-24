import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Gemini API Key not configured" });
  }

  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: { responseMimeType: "application/json" },
    });

    const prompt = `Analise este conteúdo de rede social para segurança da comunidade: "${content}". 
    Verifique ódio, violência, conteúdo sexual, spam ou assédio.
    Retorne um JSON com os campos: 
    "safe" (boolean) e "reason" (string, breve se não for seguro).`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const jsonResponse = JSON.parse(text);

    return res.status(200).json(jsonResponse);
  } catch (error) {
    console.error("Gemini Error:", error);
    return res.status(500).json({ error: "Falha na comunicação com a IA" });
  }
}
