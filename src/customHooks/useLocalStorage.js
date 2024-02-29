/**
  * Gets all events stored in the LocalStorage
  *
  * @returns {Promise<Object>} A promise that resolves to an object that contains the events.
  */
export function getEvents() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let currentEvents = window.localStorage.getItem('react-calendar-events');
            currentEvents = currentEvents ? JSON.parse(currentEvents) : {};
            resolve(currentEvents);
        }, 500);
    });
}

/**
  * Saves an event in local storage after a simulated delay.
  * 
  * @param {Object} eventData - The event data to save.
  * @param {number} eventData.year - The year of the event.
  * @param {number} eventData.month - The month of the event (0-11).
  * @param {...any} eventData - Other event properties (may vary).
  * @returns {Promise<void>} A promise that resolves after the event is saved.
  */
export function saveEvent(eventData) {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const currentEvents = await getEvents();
            const { year, month, day, ...event } = eventData;

            const areThereEventsOnThisYear = !!currentEvents[year];
            if (areThereEventsOnThisYear) {
                const areThereEventsOnThisMonth = !!currentEvents[year][month]
                if (!areThereEventsOnThisMonth) {
                    currentEvents[year][month] = {};
                    currentEvents[year][month][day] = [];
                } else {
                    const areThereEventsOnThisDay = !!currentEvents[year][month][day];
                    if (!areThereEventsOnThisDay)
                        currentEvents[year][month][day] = [];
                }
            } else {
                currentEvents[year] = {};
                currentEvents[year][month] = {};
                currentEvents[year][month][day] = [];
            }

            currentEvents[year][month][day].push(event);
            window.localStorage.setItem('react-calendar-events', JSON.stringify(currentEvents));

            resolve();
        }, 400);
    });
}
