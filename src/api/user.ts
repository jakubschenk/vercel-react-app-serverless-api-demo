import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (!request.url) return response.status(400);

  const url = new URL(request.url, `http://${request.headers.host}`);
  const { searchParams } = url;
  const hasParam = searchParams.has("param");
  const param = hasParam ? searchParams.get("param") : "noParam";

  try {
    const res = await fetch("https://randomuser.me/api/");
    const user = await res.json();

    return response.status(200).json({ user, param });
  } catch (e) {
    return response.status(403).json({ error: e });
  }
}
