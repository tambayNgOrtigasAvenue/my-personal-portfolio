import { NextRequest, NextResponse } from "next/server";

interface RateLimitData {
  count: number;
  firstRequest: number;
}

const rateLimit = (limit: number, interval: number) => {
  const requests = new Map<string, RateLimitData>();

  return async (
    req: NextRequest,
  ): Promise<{ success: boolean; message?: string }> => {
    // Get client IP - check multiple headers for different hosting environments
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();

    if (!requests.has(ip)) {
      requests.set(ip, { count: 1, firstRequest: now });
      return { success: true };
    }

    const data = requests.get(ip)!;

    // Reset the count if interval has passed
    if (now - data.firstRequest > interval) {
      data.count = 1;
      data.firstRequest = now;
      requests.set(ip, data);
      return { success: true };
    }

    // Increment count
    data.count += 1;

    // Check if limit exceeded
    if (data.count > limit) {
      requests.set(ip, data);
      return {
        success: false,
        message: "Too many requests, please try again later.",
      };
    }

    requests.set(ip, data);
    return { success: true };
  };
};

export default rateLimit;
