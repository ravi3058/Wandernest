import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { destination, startDate, endDate, travelers, interests, budget, accommodation, additionalInfo } = body

    // Calculate number of days
    const start = new Date(startDate)
    const end = new Date(endDate)
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))

    console.log(`Generating itinerary for ${destination}, ${days} days`)

    // Generate a basic itinerary
    const itinerary = generateBasicItinerary(body, days)

    return NextResponse.json({
      success: true,
      itinerary,
    })
  } catch (error) {
    console.error("Itinerary generation error:", error)
    return NextResponse.json({ success: false, message: "Failed to generate itinerary" }, { status: 500 })
  }
}

function generateBasicItinerary(preferences: any, days: number) {
  const { destination, startDate, endDate, travelers, interests } = preferences

  // Generate a simple itinerary based on preferences
  const itinerary = {
    destination,
    dates: `${formatDate(new Date(startDate))} - ${formatDate(new Date(endDate))}`,
    travelers,
    days: [],
    weatherSummary: {
      current: {
        temp_c: 28,
        condition: "Sunny",
        humidity: 65,
        wind_kph: 12,
        precip_mm: 0,
      },
      forecast: [
        {
          date: formatDate(new Date(startDate)),
          maxtemp_c: 30,
          mintemp_c: 22,
          condition: "Sunny",
          daily_chance_of_rain: 10,
        },
        {
          date: formatDate(new Date(new Date(startDate).setDate(new Date(startDate).getDate() + 1))),
          maxtemp_c: 31,
          mintemp_c: 23,
          condition: "Partly cloudy",
          daily_chance_of_rain: 20,
        },
        {
          date: formatDate(new Date(new Date(startDate).setDate(new Date(startDate).getDate() + 2))),
          maxtemp_c: 29,
          mintemp_c: 21,
          condition: "Sunny",
          daily_chance_of_rain: 5,
        },
      ],
    },
    travelAdvisory: {
      score: 2,
      message: "Exercise normal precautions when traveling to this destination.",
      updated: "2025-03-15",
      source: "Travel Advisory Service",
    },
    localEvents: [
      {
        name: "Local Festival",
        localName: "Utsav",
        date: formatDate(new Date(new Date(startDate).setDate(new Date(startDate).getDate() + 1))),
        type: "Cultural",
      },
    ],
  }

  // Generate activities for each day
  for (let i = 0; i < days; i++) {
    const currentDate = new Date(startDate)
    currentDate.setDate(new Date(startDate).getDate() + i)

    const dayActivities = generateDayActivities(interests, i + 1)

    itinerary.days.push({
      day: i + 1,
      date: formatDate(currentDate),
      weather: {
        condition: i === 0 ? "Sunny" : i === 1 ? "Partly cloudy" : "Sunny",
        maxTemp: i === 0 ? 30 : i === 1 ? 31 : 29,
        minTemp: i === 0 ? 22 : i === 1 ? 23 : 21,
        chanceOfRain: i === 0 ? 10 : i === 1 ? 20 : 5,
      },
      localEvents: i === 1 ? [itinerary.localEvents[0]] : [],
      activities: dayActivities,
    })
  }

  return itinerary
}

function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
  return date.toLocaleDateString("en-US", options)
}

function generateDayActivities(interests: string[], day: number) {
  // Sample activities based on common interests
  const activityTypes = {
    "Nature & Outdoors": [
      {
        title: "Hiking Trail Exploration",
        description: "Explore scenic hiking trails with breathtaking views",
        type: "Outdoors",
      },
      {
        title: "National Park Visit",
        description: "Visit a nearby national park and discover local wildlife",
        type: "Outdoors",
      },
      { title: "Beach Day", description: "Relax on the beach and enjoy water activities", type: "Outdoors" },
    ],
    "History & Culture": [
      {
        title: "Museum Tour",
        description: "Visit local museums to learn about the region's history",
        type: "Cultural",
      },
      {
        title: "Historical Site Visit",
        description: "Explore ancient ruins and historical landmarks",
        type: "Cultural",
      },
      {
        title: "Cultural Workshop",
        description: "Participate in a workshop to learn traditional crafts",
        type: "Cultural",
      },
    ],
    "Food & Cuisine": [
      { title: "Food Tour", description: "Sample local delicacies on a guided food tour", type: "Food" },
      {
        title: "Cooking Class",
        description: "Learn to prepare traditional dishes with local ingredients",
        type: "Food",
      },
      { title: "Fine Dining Experience", description: "Enjoy a gourmet meal at a renowned restaurant", type: "Food" },
    ],
    "Adventure & Sports": [
      {
        title: "Zip-lining Adventure",
        description: "Experience an adrenaline-pumping zip-line course",
        type: "Adventure",
      },
      { title: "Water Sports", description: "Try kayaking, paddleboarding, or surfing", type: "Adventure" },
      { title: "Mountain Biking", description: "Explore rugged terrain on mountain bikes", type: "Adventure" },
    ],
  }

  // Generate 3-4 activities for the day
  const activities = []
  const times = ["9:00 AM", "12:00 PM", "3:00 PM", "7:00 PM"]
  const durations = ["2 hours", "1.5 hours", "3 hours", "2 hours"]

  // Select activities based on interests or default to a mix
  const selectedInterests = interests && interests.length > 0 ? interests : Object.keys(activityTypes)

  for (let i = 0; i < 4; i++) {
    // Rotate through interests for variety
    const interestIndex = (day + i) % selectedInterests.length
    const interestKey =
      selectedInterests[interestIndex] || Object.keys(activityTypes)[i % Object.keys(activityTypes).length]

    // Get activities for this interest
    const interestActivities =
      activityTypes[interestKey as keyof typeof activityTypes] || activityTypes["Nature & Outdoors"]

    // Select an activity
    const activityIndex = (day + i) % interestActivities.length
    const activity = interestActivities[activityIndex]

    activities.push({
      time: times[i],
      title: activity.title,
      description: activity.description,
      location: "Local Area",
      duration: durations[i],
      type: activity.type,
      weatherTip: i === 1 ? "Bring sunscreen as it will be sunny during midday." : "",
      budgetCategory: i === 2 ? "high" : "medium",
    })
  }

  return activities
}
