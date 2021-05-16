let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: '2021-05-20T12:00:00Z',
    display: "background",
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: '2021-05-18T15:00:00Z',
    display: "background",
  }
]

export function createEventId() {
  return String(eventGuid++)
}
