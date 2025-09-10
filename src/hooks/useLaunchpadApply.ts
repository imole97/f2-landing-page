import { useState } from "react";

interface ApplicationPayload {
    fullName: string;
    email: string;
    phoneNumber?: string;
    about?: string;
    description?: string;
    readiness?: string; // 'Yes' | 'No'
}

export function useLaunchpadApply() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const apply = async (payload: ApplicationPayload) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const res = await fetch("/api/launchpad-apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to submit application");
            setSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { apply, loading, error, success, setSuccess };
}
