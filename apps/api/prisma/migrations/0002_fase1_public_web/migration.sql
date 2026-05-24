-- Fase 1: entidades de siniestros, portal del presidente y origenes de leads.
CREATE TYPE "TipoSiniestro" AS ENUM ('agua', 'incendio', 'RC', 'cristales', 'otros');
CREATE TYPE "OrigenLead" AS ENUM ('web', 'finka');

ALTER TABLE "Usuario" ADD COLUMN "origenFinka" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Lead" ADD COLUMN "origen" "OrigenLead" NOT NULL DEFAULT 'web';

ALTER TABLE "Comunidad" ADD COLUMN "poblacion" TEXT;
ALTER TABLE "Comunidad" ADD COLUMN "numeroPlantas" INTEGER;
ALTER TABLE "Diagnostico" ADD COLUMN "consentimientoRgpd" BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE "Siniestro" (
  "id" TEXT NOT NULL,
  "tipo" "TipoSiniestro" NOT NULL,
  "estado" TEXT NOT NULL,
  "fechaApertura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "descripcion" TEXT NOT NULL,
  "documentos" JSONB,
  "urgencia" TEXT NOT NULL,
  "ruta" TEXT NOT NULL,
  "comunidadId" TEXT NOT NULL,
  "polizaId" TEXT NOT NULL,
  CONSTRAINT "Siniestro_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "PortalPresidente" (
  "id" TEXT NOT NULL,
  "enlaceSeguro" TEXT NOT NULL,
  "coberturasLenguajeClaro" JSONB NOT NULL,
  "contactosUrgencia" JSONB NOT NULL,
  "comunidadId" TEXT NOT NULL,
  CONSTRAINT "PortalPresidente_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "PortalPresidente_comunidadId_key" ON "PortalPresidente"("comunidadId");

ALTER TABLE "Siniestro" ADD CONSTRAINT "Siniestro_comunidadId_fkey" FOREIGN KEY ("comunidadId") REFERENCES "Comunidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Siniestro" ADD CONSTRAINT "Siniestro_polizaId_fkey" FOREIGN KEY ("polizaId") REFERENCES "Poliza"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "PortalPresidente" ADD CONSTRAINT "PortalPresidente_comunidadId_fkey" FOREIGN KEY ("comunidadId") REFERENCES "Comunidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
