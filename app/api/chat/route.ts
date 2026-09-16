import { anthropic } from "@ai-sdk/anthropic";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";
import { credentials, profile, roles, toolCategories } from "@/lib/data";

export const maxDuration = 30;

const MAX_MESSAGES = 30;
const MAX_CHARS = 4000;

const dossier = [
  `Name: ${profile.name}`,
  `Role: ${profile.role}`,
  `Location: ${profile.location} (${profile.availability})`,
  `Contact: ${profile.email}`,
  "",
  "Credentials:",
  ...credentials.map((c) => `- ${c.label}: ${c.detail}`),
  "",
  "Experience:",
  ...roles.map(
    (r) =>
      `- ${r.title}, ${r.company} (${r.start} – ${r.end}). ${r.summary} ${r.highlights.join(" ")}`,
  ),
  "",
  "Systems and tools:",
  ...toolCategories.flatMap((cat) =>
    cat.tools.map((t) => `- ${t.name} (${cat.label}): ${t.use}`),
  ),
].join("\n");

const instructions = `You answer recruiter and hiring-manager questions about ${profile.name} on her portfolio site. You speak about her in the third person.

Use only the dossier below. If a question cannot be answered from it — salary expectations, visa status, references, anything not listed — say you do not have that detail and point them to ${profile.email}. Never invent employers, dates, metrics, certifications, or system experience.

Keep answers short: two or three sentences, plain text, no markdown formatting. Be concrete and factual rather than promotional.

--- DOSSIER ---
${dossier}`;

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "The assistant is not configured yet. Please email directly." },
      { status: 503 },
    );
  }

  const { messages }: { messages: UIMessage[] } = await req.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "No messages provided." }, { status: 400 });
  }

  const recent = messages.slice(-MAX_MESSAGES);
  const size = JSON.stringify(recent).length;
  if (size > MAX_CHARS * 4) {
    return Response.json({ error: "Conversation too long." }, { status: 413 });
  }

  const result = streamText({
    model: anthropic("claude-opus-5"),
    instructions,
    messages: await convertToModelMessages(recent),
    maxOutputTokens: 400,
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
