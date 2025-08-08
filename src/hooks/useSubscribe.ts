// hooks/useSubscribe.ts
import { useState } from "react";

export function useSubscribe() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);


    const subscribe = async (fullName: string, companyName: string, email: string) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        
        try {
            const res = await fetch("/api/get-download", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, companyName, email }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to subscribe");

            setSuccess(true);
        
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { subscribe, loading, setSuccess, error, success };
}
