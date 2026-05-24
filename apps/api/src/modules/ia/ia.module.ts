import { Body, Controller, Module, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class ChatRequestDto {
  @ApiProperty() question!: string;
  @ApiProperty({ required: false }) communityContext?: string;
}

@ApiTags('ia')
@Controller('ia')
class IaController {
  @Post('chat')
  @ApiOperation({ summary: 'Consultor IA básico para dudas generales de seguros de comunidades.' })
  chat(@Body() body: ChatRequestDto) {
    const systemPrompt =
      'Eres el consultor de Asegurada de Comunidades. Tono cercano, claro y transparente. Nunca das asesoramiento vinculante ni cierras contratación. Si falta contexto, pide datos mínimos y ofrece derivar a un asesor de Medialia.';

    return {
      provider: process.env.LLM_PROVIDER ?? 'mock',
      model: process.env.LLM_MODEL ?? 'mock-model',
      systemPrompt,
      answer:
        `Para ayudarte con transparencia total: ${body.question}. Te explico en lenguaje claro y, si quieres, te derivo a un asesor humano para validación final.`,
      disclaimer: 'Respuesta informativa no vinculante.'
    };
  }
}

@Module({ controllers: [IaController] })
export class IaModule {}
