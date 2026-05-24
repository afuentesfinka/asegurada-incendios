import { Body, Controller, Module, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

type OrigenLead = 'web' | 'finka';

class CreateDiagnosticoDto {
  @ApiProperty() direccion!: string;
  @ApiProperty({ required: false }) catastro?: string;
  @ApiProperty() codigoPostal!: string;
  @ApiProperty() poblacion!: string;
  @ApiProperty({ required: false }) anio?: number;
  @ApiProperty({ required: false }) numeroViviendas?: number;
  @ApiProperty({ required: false }) numeroPlantas?: number;
  @ApiProperty({ required: false }) metrosCuadrados?: number;
  @ApiProperty({ required: false }) ascensor?: boolean;
  @ApiProperty({ required: false }) garaje?: boolean;
  @ApiProperty({ required: false }) piscina?: boolean;
  @ApiProperty({ required: false }) locales?: number;
  @ApiProperty({ required: false }) siniestrosRecientes?: number;
  @ApiProperty({ required: false }) companiaActual?: string;
  @ApiProperty({ required: false }) vencimiento?: string;
  @ApiProperty({ required: false }) capitalContinente?: number;
  @ApiProperty() nombre!: string;
  @ApiProperty() rol!: string;
  @ApiProperty() email!: string;
  @ApiProperty() telefono!: string;
  @ApiProperty({ enum: ['web', 'finka'], default: 'web' }) origen!: OrigenLead;
  @ApiProperty() consentimientoRgpd!: boolean;
}

@ApiTags('diagnostico')
@Controller('diagnostico')
class DiagnosticoController {
  @Post()
  @ApiOperation({ summary: 'Genera un diagnóstico preliminar y crea lead para seguimiento.' })
  create(@Body() body: CreateDiagnosticoDto) {
    const redFlags: string[] = [];
    let score = 100;

    if (!body.capitalContinente || body.capitalContinente < 500000) {
      score -= 30;
      redFlags.push('Capital de continente potencialmente insuficiente.');
    }
    if (body.anio && body.anio < 1980) {
      score -= 15;
      redFlags.push('Edificio con antigüedad elevada: revisar coberturas de daños por agua y RC.');
    }
    if (body.piscina || body.garaje || body.ascensor) {
      score -= 10;
      redFlags.push('Exposición elevada por instalaciones de riesgo: revisar límites y franquicias.');
    }
    if ((body.siniestrosRecientes ?? 0) > 1) {
      score -= 15;
      redFlags.push('Recurrencia de siniestros reciente, activar plan de prevención y revisión de póliza.');
    }
    if (!body.consentimientoRgpd) {
      score = 0;
      redFlags.push('Sin consentimiento RGPD no se puede continuar con análisis personalizado.');
    }

    return {
      diagnosticoId: `diag_${Date.now()}`,
      leadId: `lead_${Date.now()}`,
      origen: body.origen,
      score: Math.max(score, 0),
      semaforo: score >= 75 ? 'verde' : score >= 45 ? 'ambar' : 'rojo',
      redFlags,
      disclaimer: 'Análisis informativo preliminar, no constituye asesoramiento vinculante ni contratación.'
    };
  }
}

@Module({ controllers: [DiagnosticoController] })
export class DiagnosticoModule {}
