import { NextRequest, NextResponse } from "next/server";

// Proxy a remote PDF to ensure mobile-friendly, same-origin downloads
export async function GET(_req: NextRequest) {
    try {
        // Direct download link from Google Drive
        const fileUrl =
            "https://drive.google.com/uc?export=download&id=1m2TFLj2smaGvs8RpA-jcAVfucaD-oGFh";

        const upstream = await fetch(fileUrl, {
            // No caching to avoid stale or partial content
            cache: "no-store",
            // Forward minimal headers; GDrive doesn't require auth for public files
            headers: {
                Accept: "application/pdf,application/octet-stream",
            },
        });

        if (!upstream.ok || !upstream.body) {
            return NextResponse.json(
                { error: "Failed to fetch file." },
                { status: upstream.status || 502 }
            );
        }

        // Pass through content length if available
        const contentLength = upstream.headers.get("content-length") ?? undefined;

        return new NextResponse(upstream.body, {
            status: 200,
            headers: {
                // Force download in browsers
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=F2-Insight-Report.pdf",
                ...(contentLength ? { "Content-Length": contentLength } : {}),
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                Pragma: "no-cache",
                Expires: "0",
            },
        });
    } catch (err) {
        console.error("/api/download-pdf error", err);
        return NextResponse.json({ error: "Internal error." }, { status: 500 });
    }
}
