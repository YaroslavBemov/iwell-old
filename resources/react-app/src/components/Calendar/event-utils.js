let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Event 1',
    start: todayStr + 'T12:00:00',
    display: "background",
  },
  {
    id: createEventId(),
    title: 'Event 2',
    start: '2021-05-29T17:00:00Z',
    display: "background",
  },
  {
    id: createEventId(),
    title: 'Event 3',
    start: '2021-05-30T10:00:00Z',
    display: "background",
  },
]

export function createEventId() {
  return String(eventGuid++)
}
