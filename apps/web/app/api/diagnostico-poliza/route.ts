import { writeFile, mkdir } from 'node:fs/promises';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const pdf = formData.get('pdf');
  const metadataRaw = formData.get('metadata');

  if (!(pdf instanceof File) || pdf.type !== 'application/pdf') {
    return NextResponse.json({ message: 'Archivo no válido. Solo PDF.' }, { status: 400 });
  }

  const maxBytes = 15 * 1024 * 1024;
  if (pdf.size > maxBytes) {
    return NextResponse.json({ message: 'El archivo supera el tamaño máximo (15MB).' }, { status: 400 });
  }

  const metadata = typeof metadataRaw === 'string' ? JSON.parse(metadataRaw) : {};
  const cleanName = pdf.name.replace(/[^a-zA-Z0-9_.-]/g, '_');
  const folder = '/tmp/asegurada-diagnosticos';
  await mkdir(folder, { recursive: true });
  const filePath = `${folder}/${Date.now()}_${cleanName}`;

  const bytes = await pdf.arrayBuffer();
  await writeFile(filePath, Buffer.from(bytes));

  await fetch('http://localhost:3001/diagnostico', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      origen: 'web_pdf',
      nombre: metadata.nombre,
      email: metadata.email,
      telefono: metadata.telefono,
      comunidad: metadata.comunidad,
      consentimientoRgpd: metadata.consentimientoRgpd,
      notas: `Póliza subida para revisión manual. Archivo: ${filePath}`
    })
  });

  return NextResponse.json({
    message: 'Hemos recibido tu póliza. Analizaremos la documentación y te contactará un asesor habilitado de Medialia.',
    filePath
  });
}
