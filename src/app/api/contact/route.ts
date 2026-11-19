import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validasi data gagal", issues: result.error.issues },
        { status: 400 }
      );
    }

    const { name, email, service, message } = result.data;

    // Di lingkungan produksi, Anda dapat menghubungkan Resend atau SMTP email:
    // await resend.emails.send({ from: '...', to: '...', subject: `New Lead: ${name}`, text: message })
    console.log("Kontak Masuk:", { name, email, service, message, timestamp: new Date().toISOString() });

    return NextResponse.json(
      { success: true, message: "Pesan berhasil diterima" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan internal pada server" },
      { status: 500 }
    );
  }
}
