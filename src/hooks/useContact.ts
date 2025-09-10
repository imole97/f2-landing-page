import { useState } from "react";

export function useContact() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const send = async (params: { fullName: string; email: string; message?: string }) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(params),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to send contact message");
            setSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { send, loading, error, success, setSuccess };
}
