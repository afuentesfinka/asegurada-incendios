import { Body, Controller, Get, Module, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class CreateLeadDto {
  @ApiProperty() nombre!: string;
  @ApiProperty() email!: string;
  @ApiProperty() telefono!: string;
  @ApiProperty({ enum: ['web', 'finka'], default: 'web' }) origen!: 'web' | 'finka';
  @ApiProperty({ required: false }) contexto?: string;
}

@ApiTags('leads')
@Controller('leads')
class LeadsController {
  private readonly leads: CreateLeadDto[] = [];

  @Get()
  @ApiOperation({ summary: 'Lista de leads captados por la web pública o Finka.' })
  list() { return this.leads; }

  @Post()
  @ApiOperation({ summary: 'Crea un lead para asesor humano de Medialia.' })
  create(@Body() body: CreateLeadDto) {
    this.leads.push(body);
    return { ok: true, ...body, status: 'pendiente_contacto' };
  }
}

@Module({ controllers: [LeadsController] })
export class LeadsModule {}
