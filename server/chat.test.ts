import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the LLM module
vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn().mockResolvedValue({
    choices: [
      {
        message: {
          content: "Olá! A Raíssa atende de segunda a sexta, das 8h às 21h. Posso ajudar com mais alguma coisa?",
        },
      },
    ],
  }),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as unknown as TrpcContext["res"],
  };
}

describe("chat.sendMessage", () => {
  it("returns an AI response for a user message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.sendMessage({
      messages: [{ role: "user", content: "Qual o horário de atendimento?" }],
    });

    expect(result).toHaveProperty("message");
    expect(typeof result.message).toBe("string");
    expect(result.message.length).toBeGreaterThan(0);
  });

  it("accepts multiple messages in conversation history", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.sendMessage({
      messages: [
        { role: "user", content: "Olá!" },
        { role: "assistant", content: "Olá! Como posso ajudar?" },
        { role: "user", content: "Quais serviços vocês oferecem?" },
      ],
    });

    expect(result).toHaveProperty("message");
    expect(typeof result.message).toBe("string");
  });

  it("handles LLM errors gracefully", async () => {
    const { invokeLLM } = await import("./_core/llm");
    (invokeLLM as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error("LLM unavailable"));

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.sendMessage({
      messages: [{ role: "user", content: "Teste" }],
    });

    expect(result).toHaveProperty("message");
    expect(result.message).toContain("WhatsApp");
  });
});
