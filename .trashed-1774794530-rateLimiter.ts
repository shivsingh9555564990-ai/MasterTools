interface RateLimitRecord {
  minute: number[]
  day: number[]
}

const store = new Map<string, RateLimitRecord>()

const MINUTE_LIMIT = 5
const DAY_LIMIT = 50
const MINUTE_MS = 60 * 1000
const DAY_MS = 24 * 60 * 60 * 1000

function cleanup() {
  const now = Date.now()
  for (const [ip, record] of store.entries()) {
    record.minute = record.minute.filter(time => now - time < MINUTE_MS)
    record.day = record.day.filter(time => now - time < DAY_MS)
    
    if (record.minute.length === 0 && record.day.length === 0) {
      store.delete(ip)
    }
  }
}

export function rateLimiter(ip: string): { success: boolean; message?: string } {
  cleanup()
  
  const now = Date.now()
  let record = store.get(ip)
  
  if (!record) {
    record = { minute: [], day: [] }
    store.set(ip, record)
  }

  // Check minute limit
  record.minute = record.minute.filter(time => now - time < MINUTE_MS)
  if (record.minute.length >= MINUTE_LIMIT) {
    return {
      success: false,
      message: 'Rate limit exceeded. Maximum 5 requests per minute.'
    }
  }

  // Check day limit
  record.day = record.day.filter(time => now - time < DAY_MS)
  if (record.day.length >= DAY_LIMIT) {
    return {
      success: false,
      message: 'Rate limit exceeded. Maximum 50 requests per day.'
    }
  }

  // Add current request
  record.minute.push(now)
  record.day.push(now)
  
  return { success: true }
}