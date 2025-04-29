// Utility functions for API calls

/**
 * Fetches weather data for a location
 * @param location The location to fetch weather for
 * @param days Number of forecast days (max 7)
 */
export async function fetchWeatherData(location: string, days = 3) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${encodeURIComponent(
        location,
      )}&days=${days}&aqi=no`,
    )

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching weather data:", error)
    return null
  }
}

/**
 * Fetches places of interest for a location
 * @param location The location to fetch places for
 * @param radius Search radius in meters
 * @param type Type of place (tourist_attraction, restaurant, etc.)
 */
export async function fetchPlacesData(location: string, radius = 5000, type = "tourist_attraction") {
  try {
    const response = await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?apikey=${
        process.env.OPENTRIP_API_KEY
      }&radius=${radius}&lon=${location.split(",")[1]}&lat=${
        location.split(",")[0]
      }&kinds=${type}&format=json&limit=20`,
    )

    if (!response.ok) {
      throw new Error(`Places API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching places data:", error)
    return null
  }
}

/**
 * Fetches exchange rate data
 * @param baseCurrency The base currency code
 * @param targetCurrency The target currency code
 */
export async function fetchExchangeRate(baseCurrency = "USD", targetCurrency = "INR") {
  try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)

    if (!response.ok) {
      throw new Error(`Exchange rate API error: ${response.status}`)
    }

    const data = await response.json()
    return data.rates[targetCurrency]
  } catch (error) {
    console.error("Error fetching exchange rate:", error)
    return null
  }
}

/**
 * Fetches travel advisory information for a country
 * @param countryCode The ISO country code
 */
export async function fetchTravelAdvisory(countryCode = "IN") {
  try {
    const response = await fetch(`https://www.travel-advisory.info/api?countrycode=${countryCode}`)

    if (!response.ok) {
      throw new Error(`Travel advisory API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching travel advisory:", error)
    return null
  }
}

/**
 * Fetches holiday information for a country
 * @param countryCode The ISO country code
 * @param year The year to fetch holidays for
 */
export async function fetchHolidays(countryCode = "IN", year: number = new Date().getFullYear()) {
  try {
    const response = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`)

    if (!response.ok) {
      throw new Error(`Holidays API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching holidays:", error)
    return null
  }
}

/**
 * Fetches air quality data for a location
 * @param lat Latitude
 * @param lon Longitude
 */
export async function fetchAirQuality(lat: number, lon: number) {
  try {
    const response = await fetch(
      `https://api.waqi.info/feed/geo:${lat};${lon}/?token=${process.env.AIR_QUALITY_API_KEY}`,
    )

    if (!response.ok) {
      throw new Error(`Air quality API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching air quality data:", error)
    return null
  }
}

/**
 * Geocodes a location name to coordinates
 * @param locationName The name of the location to geocode
 */
export async function geocodeLocation(locationName: string) {
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(locationName)}&key=${process.env.OPENCAGE_API_KEY}&limit=1`,
    )

    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status}`)
    }

    const data = await response.json()
    if (data.results && data.results.length > 0) {
      return {
        lat: data.results[0].geometry.lat,
        lng: data.results[0].geometry.lng,
        formatted: data.results[0].formatted,
        components: data.results[0].components,
      }
    }
    return null
  } catch (error) {
    console.error("Error geocoding location:", error)
    return null
  }
}
