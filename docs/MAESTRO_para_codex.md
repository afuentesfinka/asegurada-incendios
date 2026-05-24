# Documento Maestro de Producto v3 — Asegurada de Comunidades

> Especificación para desarrollo. Web · App · Backend · Capa de IA · Módulo integrable en Finka.
> Marca: **Asegurada de Comunidades** · Dominio: comunidadasegurada.es
> Distribución de seguros: Medialia Group Correduría de Seguros SL · DGSFP J-3149.
> Principio rector: **TRANSPARENCIA RADICAL** (en línea con Finka 360). Hacemos visible y comprensible la "salud aseguradora" de cada comunidad. NUNCA competimos por precio.
> **v3: reenfoque estratégico definitivo. Cliente = presidente autogestionado. Canal principal = Finka. Segunda puerta = web independiente.**

---

## 0. Tesis estratégica (DEFINITIVA)

### A quién NO nos dirigimos
No peleamos de frente por el administrador de fincas. Ese campo lo dominan corredurías con 20 años de ventaja (Brokalia, CoverFincas, Aon), y muchos administradores están "capturados" (incentivados o actuando como agentes de una correduría). Competir ahí es competir en su terreno.

### A quién SÍ nos dirigimos
**El PRESIDENTE autogestionado**: el que gestiona su comunidad sin administrador, o el que teniéndolo quiere controlar él mismo el seguro y no fiarlo a un intermediario opaco. Le devolvemos el control y la transparencia. Y el PROPIETARIO/vecino que quiere entender qué cubre su comunidad.

### El vehículo: FINKA
**Finka 360 / Finka Free** es el portal de autogestión de comunidades (transparencia radical: cada euro auditable, cada incidencia visible). Modelo freemium con créditos → plan **Finka Digital** de pago. Asegurada de Comunidades entra como **módulo de seguros "partner" dentro de Finka** (manteniendo la marca Asegurada de Comunidades, sin crear más marcas). Es el modelo de SEGURO EMBEBIDO que triunfa fuera (ComunidadFeliz en Chile, Matera en Francia): el seguro como módulo nativo del software de autogestión.

### Doble puerta
1. **Dentro de Finka**: módulo "Seguros — by Asegurada de Comunidades" para los presidentes que ya usan Finka.
2. **Independiente**: web propia (comunidadasegurada.es) para captar presidentes/propietarios que NO usan Finka. El seguro es también puerta de entrada a Finka, y Finka puerta de entrada al seguro: se retroalimentan.

### Arquitectura que lo hace posible
Asegurada se construye como **producto independiente con su propia API** (los cimientos de la Fase 0, ya hechos). Finka (que se desarrolla aparte, en Lovable) **consume esa API** como módulo. Una sola base de código de Asegurada sirve para las dos puertas. No se mezcla el código de Asegurada dentro de Finka: se conectan por API.

### Modelo de negocio
Finka capta y da autogestión (freemium → Finka Digital). Asegurada gana con la **mediación del seguro vía Medialia**. El módulo de seguros es gratuito para el presidente; se monetiza con la correduría. Transparencia como bandera compartida.

### Hilo conductor
**TRANSPARENCIA RADICAL.** El presidente controla y entiende el seguro de su comunidad, sin opacidad ni intermediarios interesados.

---

## 1. Objetivo del documento
Construir Asegurada de Comunidades como ecosistema API-first: web pública independiente, backend, capa de IA, y preparado para integrarse como módulo dentro de Finka vía API. Web, futura app móvil y Finka son todos CLIENTES de la misma API.

## 2. Marca e identidad
- **Nombre:** Asegurada de Comunidades. Dominio: comunidadasegurada.es. Dentro de Finka: "Seguros — by Asegurada de Comunidades" (partner).
- **Promesa:** "El seguro de tu comunidad, por fin claro. Tú al control."
- **Origen/storytelling:** evoluciona de "Asegurada de Incendios", placas de seguro de Madrid desde 1822 que hacían visible la protección. Hoy hacemos visible y transparente la salud aseguradora de la comunidad.
- **Logo:** marca mixta. Marco con chaflán + llama (incendio) izquierda + gota (agua) derecha + texto "ASEGURADA / DE COMUNIDADES". Símbolo reducido = la llama.

### Paleta (design tokens)
| Token | HEX | Uso |
|---|---|---|
| --color-primary | #1499F0 | Azul corporativo |
| --color-accent | #FF5436 | Coral, ÚNICO acento: la llama |
| --color-ink | #0A2540 | Texto sobre claro |
| --color-soft | #EAF6FE | Fondos suaves |
| --color-white | #FFFFFF | Fondos, texto sobre azul |
| --color-grey | #5F6B78 | Texto secundario |

> Nota de coherencia con Finka: Finka usa un azul (#0033FF aprox.) y el lema "transparencia radical". Asegurada mantiene su azul #1499F0 propio (es un partner, no Finka), pero comparte el espíritu de transparencia. Al integrarse como módulo, se respetará el marco visual de Finka pero con la identidad de Asegurada como partner reconocible.

### Tipografía
Poppins (alt. Montserrat; fallback Helvetica/Arial). H1 40-48 / H2 28-32 / H3 20-22 / body 16-18.

## 3. Identidad web (referencia: Housfy + espíritu Finka)
Estilo limpio, luminoso, plano, azul protagonista, tarjetas redondeadas (12-16px), hero con tarjetas de autoclasificación. Mobile-first. Diseño atómico, UI kit compartido. El mensaje respira transparencia radical y control del presidente.

### Mapa de la web pública (independiente)
- **Home**: hero "El seguro de tu comunidad, por fin claro. Tú al control." Tarjetas: Soy presidente / Soy propietario / (Soy administrador, secundario). Mensaje: transparencia y control, jamás precio.
- **Para presidentes** (LANDING ESTRELLA): controla el seguro de tu comunidad sin intermediarios opacos; entiende qué cubre y qué no; ten un portal claro. Dolor: infraseguro, derrama sorpresa, siniestro mal gestionado, dependencia de un administrador opaco.
- **Para propietarios**: entiende qué cubre el seguro de tu comunidad.
- **Qué cubre tu seguro** (educativo/SEO): daños por agua, continente vs contenido, RC, infraseguro, regla proporcional.
- **Diagnóstico**: puerta de entrada (cuestionario + subir póliza → Score de salud aseguradora).
- **Con Finka**: explica que si autogestionas tu comunidad, puedes tener esto integrado en Finka (puerta cruzada).
- **Consultor IA**, **Observatorio** (placas 1822 + datos), **Sobre nosotros** (transparencia, Medialia, DGSFP).

## 4. Arquitectura técnica
API-first (NO cambia respecto a Fase 0). Capas: Presentación (web + futura app + módulo en Finka) → API única (REST/OpenAPI, auth por roles) → Negocio → Datos (PostgreSQL + documentos + pgvector) → IA (LLM + RAG).
Stack: Next.js, NestJS, PostgreSQL + Prisma, pgvector, JWT + roles, Tailwind + Poppins. React Native (móvil, fase posterior).
**Integración Finka:** la API expone endpoints para que Finka (cliente externo) muestre el módulo de seguros. Autenticación preparada para SSO/identidad compartida en el futuro. Diseñar la API pensando que Finka es un consumidor más.

## 5. Perfiles de usuario y su UX

### 5.1. PRESIDENTE autogestionado — protagonista
Portal de transparencia por comunidad (dentro de Finka o independiente). Le da el control:
- Póliza vigente con **coberturas en lenguaje sencillo** (qué cubre, qué NO).
- **Exclusiones frecuentes explicadas** claro.
- Estado de **siniestros** en tiempo real.
- Documentos (póliza, recibos, partes).
- **Teléfonos de urgencia** y "qué hacer si ocurre X".
- Alertas: infraseguro, vencimiento, coberturas insuficientes.
- Consultor IA.
- (Si viene de Finka) integrado con la autogestión de su comunidad.

### 5.2. PROPIETARIO/VECINO
- Consulta sencilla de qué cubre el seguro de su comunidad.
- Estado de siniestros que le afecten.
- Consultor IA.

### 5.3. ADMINISTRADOR (secundario, NO prioritario)
No es el foco. Se le da cabida básica por si un administrador transparente quiere usarlo, pero el producto NO se diseña para él. Sin dashboards complejos de captura de cartera (eso es el terreno de Brokalia, no el nuestro).

### 5.4. OPERADOR INTERNO (Medialia)
Backend: leads, diagnósticos, siniestros, contacto y contratación habilitada.

## 6. El diagnóstico (puerta de entrada)
Dos vías: cuestionario guiado por pasos (mobile-first, "no lo sé" permitido) o subir póliza PDF (IA extrae y compara).
Campos: identificación (dirección/catastro, CP, población), edificio (año, nº viviendas, plantas, m², ascensor, garaje, piscina, locales, siniestros recientes), póliza actual (compañía, vencimiento, capital continente), contacto (nombre, rol, email, teléfono).
**Score de Salud Aseguradora (0-100):** infraseguro, coberturas clave, exclusiones, antigüedad, exposición. Semáforo, sin jerga.
**Informe:** score visual + banderas rojas + comparación + checklist documental + CTA a asesor habilitado (Medialia) y/o "gestiónalo desde Finka".
> Cumplimiento: el diagnóstico ORIENTA; el asesoramiento y contratación los hace persona habilitada (Medialia). La IA no contrata ni asesora vinculantemente.

## 7. SINIESTROS (corazón del producto)
Dolor recurrente (1,2M/año). Apertura rápida, seguimiento en tiempo real, comunicación al presidente/vecino. Para el presidente autogestionado es clave: sin administrador, necesita una herramienta que le guíe en el siniestro.
- Apertura de parte con pocos pasos (presidente o vecino).
- Seguimiento de estado en tiempo real.
- Comunicación de cambios de estado (base email; WhatsApp/SMS después).
- Checklist documental por tipo.
- Histórico por comunidad.
- Triaje IA (fase posterior): clasifica, sugiere documentación y ruta; humano valida.

## 8. Backend de control (panel interno Medialia)
CRM de leads · Gestión de comunidades · Gestión de siniestros · Espacio de compañías · Condiciones particulares · Motor de comparación · Gestión del consultor IA · Usuarios y roles · Métricas.

## 9. Espacio de compañías y condiciones
CRUD de aseguradoras (las que se trabajan vía Medialia). Subir condicionados PDF, normalizar coberturas a esquema común, indexar en pgvector (RAG).

## 10. Capa de IA transversal
1. Lectura/comparación de pólizas (extrae, normaliza, detecta infraseguro/lagunas, alimenta Score).
2. Consultor IA (web/app/Finka) con RAG sobre condicionados. Tono claro y transparente; no asesora vinculante.
3. Traducción de pólizas a lenguaje sencillo (alimenta el portal del presidente).
4. Triaje de siniestros (fase posterior).
Salvaguardas: RAG (evitar alucinaciones), límite legal (deriva a Medialia), RGPD, supervisión.

## 11. Datos, privacidad y cumplimiento
RGPD; pólizas y partes con almacenamiento seguro y borrado a petición; anonimización; distinción informar/comparar/asesorar/mediar; Medialia DGSFP J-3149 visible. Diagnóstico = análisis informativo preliminar.

## 12. Modelo de datos (entidades núcleo)
- **Usuario** (id, nombre, email, teléfono, rol, consentimientos, origenFinka[bool])
- **Comunidad** (id, dirección, catastro, año, nº viviendas, m², ascensor, garaje, piscina, locales)
- **Poliza** (id, compañía, capitales, coberturas, vencimiento, PDF) — N:1 Comunidad; N:1 Compañía
- **Diagnostico** (id, fecha, score, alertas, informe) — N:1 Comunidad; genera Lead
- **Siniestro** (id, tipo, estado, fechaApertura, descripcion, documentos, urgencia, ruta) — N:1 Comunidad; N:1 Poliza
- **Compania** (id, nombre, logo, estado, acuerdo) — 1:N Condiciones
- **Condiciones** (id, producto, coberturas normalizadas, PDF, vector) — N:1 Compañía
- **Lead** (id, estado, asesor asignado, seguimiento, origen[web/finka]) — N:1 Diagnóstico/Usuario
- **PortalPresidente** (id, comunidad, enlaceSeguro, coberturasLenguajeClaro, contactosUrgencia) — N:1 Comunidad

## 13. Fases de desarrollo
0. **Cimientos** ✅ HECHO: monorepo, modelo de datos, API base, auth por roles, UI kit.
1. **Web pública + diagnóstico + consultor IA básico** (MVP que capta). Mensaje: presidente autogestionado, transparencia, control. Amplía modelo de datos (Siniestro, PortalPresidente, campos origen/Finka). Deja la API preparada para que Finka la consuma.
2. **Portal del PRESIDENTE** (estrella diferencial): coberturas en lenguaje claro, estado de siniestros, contactos urgencia, "qué hacer si...". + traducción de pólizas con IA.
3. **Gestión de SINIESTROS**: apertura rápida, seguimiento, comunicación. (Triaje IA preparado.)
4. **Integración con Finka (API de módulo)**: endpoints y autenticación para que Finka muestre el módulo "Seguros by Asegurada de Comunidades"; documentación de integración para el equipo de Finka (Lovable).
5. **Compañías, condiciones e IA de pólizas** (RAG, comparación, Score completo).
6. **Backend/CRM completo** + métricas.
7. **Apps móviles** (React Native) sobre la misma API.
8. **Escalado**: triaje IA de siniestros, Observatorio/SEO, cross-selling (vía Medialia).

> **MVP para lanzar pronto = Fases 1 + 2 + 3** (web + portal del presidente + siniestros). Producto diferencial y único: transparencia para el presidente autogestionado. La Fase 4 lo conecta con Finka.

## 14. Resumen para el equipo de desarrollo
- API-first: web, app y Finka = clientes de la misma API. Construir Asegurada independiente; Finka la consume.
- Cliente foco: PRESIDENTE autogestionado (sin administrador opaco). NO diseñar para el administrador.
- Identidad: Poppins, azul #1499F0 único, coral #FF5436 solo llama; estilo limpio tipo Housfy; espíritu de transparencia radical (Finka).
- Diagnóstico (Score de Salud Aseguradora) = puerta de entrada.
- Portal del presidente = diferencial. Siniestros = corazón.
- IA: lee/compara/traduce pólizas, consultor, triaje (RAG + salvaguardas).
- Preparar API para integración con Finka como módulo.
- Cumplimiento Medialia/DGSFP y RGPD en todo.
