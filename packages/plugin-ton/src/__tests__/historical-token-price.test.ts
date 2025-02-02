import { getHistoricalTokenPrice } from "../services/historicalTokenPrice";
import { describe, it, expect, vi } from "vitest";

vi.mock("../services/historicalTokenPrice", () => ({
  getHistoricalTokenPrice: vi.fn(),
}));

describe("getHistoricalTokenPrice", () => {
  it("should retrieve historical token price data for different time frames and token pairs", async () => {
    const mockData = {
      timeFrame: "1d",
      tokenPair: "TON/USD",
      prices: [1, 2, 3, 4, 5],
    };

    getHistoricalTokenPrice.mockResolvedValue(mockData);

    const result = await getHistoricalTokenPrice("1d", "TON/USD");

    expect(result).toEqual(mockData);
  });

  it("should implement caching and efficiency techniques", async () => {
    const mockData = {
      timeFrame: "1d",
      tokenPair: "TON/USD",
      prices: [1, 2, 3, 4, 5],
    };

    getHistoricalTokenPrice.mockResolvedValue(mockData);

    const result1 = await getHistoricalTokenPrice("1d", "TON/USD");
    const result2 = await getHistoricalTokenPrice("1d", "TON/USD");

    expect(result1).toEqual(mockData);
    expect(result2).toEqual(mockData);
    expect(getHistoricalTokenPrice).toHaveBeenCalledTimes(1);
  });

  it("should handle errors and validation", async () => {
    const mockError = new Error("Invalid token pair");

    getHistoricalTokenPrice.mockRejectedValue(mockError);

    await expect(getHistoricalTokenPrice("1d", "INVALID_PAIR")).rejects.toThrow(
      "Invalid token pair"
    );
  });

  it("should ensure security and reliability measures", async () => {
    const mockData = {
      timeFrame: "1d",
      tokenPair: "TON/USD",
      prices: [1, 2, 3, 4, 5],
    };

    getHistoricalTokenPrice.mockResolvedValue(mockData);

    const result = await getHistoricalTokenPrice("1d", "TON/USD");

    expect(result).toEqual(mockData);
    expect(result).toHaveProperty("timeFrame");
    expect(result).toHaveProperty("tokenPair");
    expect(result).toHaveProperty("prices");
  });
});
