import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { HealthModule } from './modules/health.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ComunidadesModule } from './modules/comunidades/comunidades.module';
import { DiagnosticoModule } from './modules/diagnostico/diagnostico.module';
import { CompaniasModule } from './modules/companias/companias.module';
import { CondicionesModule } from './modules/condiciones/condiciones.module';
import { LeadsModule } from './modules/leads/leads.module';
import { IaModule } from './modules/ia/ia.module';

@Module({ imports: [HealthModule, AuthModule, UsuariosModule, ComunidadesModule, DiagnosticoModule, CompaniasModule, CondicionesModule, LeadsModule, IaModule] })
export class AppModule {}
