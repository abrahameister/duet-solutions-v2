export const MAKE_WEBHOOK_URL =
    "https://hook.us2.make.com/dlog1wex5s3u1h5tp4ipfntf9x25vbtu";

export async function submitLeadToMake(
    payload: Record<string, unknown>
): Promise<{ ok: boolean; error?: string }> {
    try {
        const response = await fetch(MAKE_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            return {
                ok: false,
                error: "Hubo un problema al enviar tus datos. Por favor intenta nuevamente o escríbenos por WhatsApp.",
            };
        }

        return { ok: true };
    } catch {
        return {
            ok: false,
            error: "Error de conexión. Verifica tu internet o contáctanos directamente por WhatsApp.",
        };
    }
}
