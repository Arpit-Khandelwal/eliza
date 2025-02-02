# getHistoricalTokenPrice

The `getHistoricalTokenPrice` function allows querying and retrieving historical token price data on the TON blockchain.

## Usage

### Example

```typescript
import { getHistoricalTokenPrice } from "@elizaos/plugin-ton";

async function fetchHistoricalPrice() {
  try {
    const data = await getHistoricalTokenPrice("1d", "TON/USD");
    console.log(data);
  } catch (error) {
    console.error("Error fetching historical price:", error);
  }
}

fetchHistoricalPrice();
```

## Parameters

- `timeFrame` (string): The time frame for the historical data (e.g., "1d", "1w", "1m").
- `tokenPair` (string): The token pair to query (e.g., "TON/USD").

## Returns

- An object containing the historical price data.

## Caching and Efficiency

The function implements caching to improve efficiency and reduce redundant data retrieval. Cached data is used for subsequent requests within a specified time frame.

## Error Handling and Validation

The function includes error handling and validation to ensure that invalid token pairs or time frames are properly handled and reported.

## Security and Reliability

Security and reliability measures are in place to ensure the integrity and accuracy of the retrieved data.
