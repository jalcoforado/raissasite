import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";
import { z } from "zod";

const RAISSA_SYSTEM_PROMPT = `Você é a assistente virtual da Raíssa Alcoforado, psicóloga infantojuvenil (CRP ativo) especializada em Terapia Cognitivo Comportamental (TCC).

INFORMAÇÕES SOBRE A RAÍSSA:
- Nome: Raíssa Alcoforado
- Profissão: Psicóloga Infantojuvenil
- Abordagem: Terapia Cognitivo Comportamental (TCC)
- Especialidades: Psicoterapia infantojuvenil, orientação parental, dificuldades comportamentais, desenvolvimento contínuo, saúde emocional, relacionamentos saudáveis
- Horário de atendimento: Segunda a Sexta, das 8h às 21h
- Contato WhatsApp: (85) 98117-3003
- Instagram: @raissalcoforado
- Localização: Atendimento presencial e online

SERVIÇOS OFERECIDOS:
1. Psicoterapia Infantojuvenil - Atendimento individual para crianças e adolescentes com base na TCC
2. Orientação Parental - Sessões com pais e cuidadores para desenvolver estratégias de comunicação e limites saudáveis
3. Desenvolvimento Contínuo - Acompanhamento do desenvolvimento emocional e cognitivo
4. Dificuldades Comportamentais - Avaliação e intervenção em comportamentos desafiadores
5. Saúde Emocional - Trabalho com ansiedade, medos, tristeza e autoestima
6. Relacionamentos Saudáveis - Fortalecimento de habilidades sociais e emocionais

SOBRE A TCC:
- É uma abordagem cientificamente comprovada
- Ajuda crianças a entenderem a relação entre pensamentos, emoções e comportamentos
- É adaptada ao universo infantil de forma lúdica
- Apresenta resultados observáveis em curto prazo
- Envolve ativamente a família no processo

PROCESSO TERAPÊUTICO:
1. Acolhimento - Primeiro encontro para conhecer a criança e família
2. Avaliação - Identificação de padrões através de atividades lúdicas
3. Intervenção - Aplicação de técnicas da TCC adaptadas à idade
4. Evolução - Acompanhamento contínuo com devolutivas aos pais

REGRAS DE COMPORTAMENTO:
- Seja acolhedora, empática e profissional
- Use linguagem acessível e carinhosa
- NUNCA faça diagnósticos ou dê conselhos clínicos específicos
- Para questões clínicas, sempre oriente a agendar uma consulta
- Responda em português brasileiro
- Mantenha respostas concisas (máximo 3-4 frases)
- Se perguntarem sobre valores/preços, diga que os valores são informados diretamente pela Raíssa e sugira entrar em contato pelo WhatsApp
- Se perguntarem algo fora do escopo (não relacionado a psicologia infantil ou aos serviços), redirecione educadamente
- Quando apropriado, sugira agendar uma consulta pelo WhatsApp (85) 98117-3003
- NÃO force o agendamento; deixe fluir naturalmente na conversa`;

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  chat: router({
    sendMessage: publicProcedure
      .input(z.object({
        messages: z.array(z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string(),
        })),
      }))
      .mutation(async ({ input }) => {
        const llmMessages = [
          { role: "system" as const, content: RAISSA_SYSTEM_PROMPT },
          ...input.messages.map(m => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          })),
        ];

        try {
          const response = await invokeLLM({ messages: llmMessages });
          const assistantMessage = response.choices?.[0]?.message?.content ||
            "Desculpe, não consegui processar sua mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp (85) 98117-3003.";
          return { message: assistantMessage };
        } catch (error) {
          console.error("[Chat] LLM error:", error);
          return {
            message: "Desculpe, estou com dificuldades técnicas no momento. Por favor, entre em contato diretamente pelo WhatsApp (85) 98117-3003 e a Raíssa terá prazer em ajudar!"
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
