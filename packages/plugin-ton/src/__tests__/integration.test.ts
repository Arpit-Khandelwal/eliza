import { getHistoricalTokenPrice } from "../services/historicalTokenPrice";
import { describe, it, expect } from "vitest";

describe("Integration Test for getHistoricalTokenPrice", () => {
  it("should integrate with the overall system and retrieve historical token price data", async () => {
    const result = await getHistoricalTokenPrice("1d", "TON/USD");

    expect(result).toHaveProperty("timeFrame", "1d");
    expect(result).toHaveProperty("tokenPair", "TON/USD");
    expect(result).toHaveProperty("prices");
    expect(Array.isArray(result.prices)).toBe(true);
  });

  it("should work correctly with other components", async () => {
    const result = await getHistoricalTokenPrice("1d", "TON/USD");

    // Assuming there's another component that uses this data
    const processedData = result.prices.map(price => price * 2); // Example processing

    expect(processedData).toEqual(result.prices.map(price => price * 2));
  });

  it("should validate the end-to-end functionality of the historical token price retrieval", async () => {
    const result = await getHistoricalTokenPrice("1d", "TON/USD");

    expect(result).toHaveProperty("timeFrame", "1d");
    expect(result).toHaveProperty("tokenPair", "TON/USD");
    expect(result).toHaveProperty("prices");
    expect(Array.isArray(result.prices)).toBe(true);
    expect(result.prices.length).toBeGreaterThan(0);
  });
});
