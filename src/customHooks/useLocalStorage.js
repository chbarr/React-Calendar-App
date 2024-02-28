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
        }, 100);
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
            const { year, month, ...event } = eventData;

            const isThereEventOnThisYear = !!currentEvents[eventData.year];
            if (isThereEventOnThisYear) {
                const isThereEventOnThisMonth = !!currentEvents[eventData.year][eventData.month]
                if (!isThereEventOnThisMonth)
                    currentEvents[eventData.year][eventData.month] = [];
            } else {
                currentEvents[eventData.year] = {};
                currentEvents[eventData.year][eventData.month] = [];
            }

            currentEvents[eventData.year][eventData.month].push(event);
            window.localStorage.setItem('react-calendar-events', JSON.stringify(currentEvents));

            resolve();
        }, 1000);
    });
}
