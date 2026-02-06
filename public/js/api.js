/**
 * ==========================================
 * TripFinder - API Layer
 * Ready for Node.js Backend Integration
 * ==========================================
 */

// Base URL for API - Change this to your backend URL
const BASE_URL = '/api';

/**
 * Mock flight data for development
 * Remove this when connecting to real backend
 */
const mockFlights = [
  {
    id: '1',
    airline: 'LATAM Airlines',
    airlineLogo: '✈️',
    departureTime: '06:30',
    arrivalTime: '14:45',
    origin: 'GRU',
    destination: 'LIS',
    duration: '9h 15m',
    stops: 0,
    price: 2850,
    currency: 'BRL',
  },
  {
    id: '2',
    airline: 'TAP Portugal',
    airlineLogo: '✈️',
    departureTime: '22:15',
    arrivalTime: '11:30',
    origin: 'GRU',
    destination: 'LIS',
    duration: '9h 15m',
    stops: 0,
    price: 3120,
    currency: 'BRL',
  },
  {
    id: '3',
    airline: 'Air France',
    airlineLogo: '✈️',
    departureTime: '19:45',
    arrivalTime: '15:20',
    origin: 'GRU',
    destination: 'LIS',
    duration: '11h 35m',
    stops: 1,
    price: 2650,
    currency: 'BRL',
  },
  {
    id: '4',
    airline: 'Iberia',
    airlineLogo: '✈️',
    departureTime: '23:55',
    arrivalTime: '18:40',
    origin: 'GRU',
    destination: 'LIS',
    duration: '12h 45m',
    stops: 1,
    price: 2480,
    currency: 'BRL',
  },
  {
    id: '5',
    airline: 'GOL',
    airlineLogo: '✈️',
    departureTime: '08:00',
    arrivalTime: '20:15',
    origin: 'GRU',
    destination: 'LIS',
    duration: '13h 15m',
    stops: 1,
    price: 2290,
    currency: 'BRL',
  },
];

/**
 * Simulate network delay
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise}
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Search for flights
 * GET /api/flights/search?origin=XXX&destination=YYY&date=YYYY-MM-DD
 * 
 * @param {Object} params - Search parameters
 * @param {string} params.origin - Origin airport code
 * @param {string} params.destination - Destination airport code
 * @param {string} params.departureDate - Departure date (YYYY-MM-DD)
 * @param {string} [params.returnDate] - Return date (optional)
 * @param {number} params.passengers - Number of passengers
 * @returns {Promise<Array>} - Array of flight objects
 */
async function searchFlights(params) {
  // Simulate network delay
  await delay(1500);

  /* ==========================================
   * Production Code - Uncomment when ready
   * ==========================================
   * 
   * const queryParams = new URLSearchParams({
   *   origin: params.origin,
   *   destination: params.destination,
   *   date: params.departureDate,
   *   passengers: params.passengers.toString(),
   * });
   * 
   * if (params.returnDate) {
   *   queryParams.append('returnDate', params.returnDate);
   * }
   * 
   * const response = await fetch(`${BASE_URL}/flights/search?${queryParams}`);
   * 
   * if (!response.ok) {
   *   throw new Error('Failed to fetch flights');
   * }
   * 
   * return response.json();
   */

  // Mock: Return all flights (for demo purposes)
  return mockFlights;
}

/**
 * Get flight details by ID
 * GET /api/flights/:id
 * 
 * @param {string} id - Flight ID
 * @returns {Promise<Object|null>} - Flight object or null
 */
async function getFlightById(id) {
  await delay(500);

  /* ==========================================
   * Production Code - Uncomment when ready
   * ==========================================
   * 
   * const response = await fetch(`${BASE_URL}/flights/${id}`);
   * 
   * if (!response.ok) {
   *   throw new Error('Flight not found');
   * }
   * 
   * return response.json();
   */

  // Mock: Find flight by ID
  return mockFlights.find(flight => flight.id === id) || null;
}

/**
 * Format price with currency
 * @param {number} price - Price value
 * @param {string} currency - Currency code (BRL, USD, EUR, etc.)
 * @returns {string} - Formatted price string
 */
function formatPrice(price, currency) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency,
  }).format(price);
}

/**
 * Format date for display
 * @param {string} dateString - Date string (YYYY-MM-DD)
 * @returns {string} - Formatted date (e.g., "5 Fev")
 */
function formatDate(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { 
    day: 'numeric', 
    month: 'short' 
  });
}

/**
 * Get URL search parameters
 * @returns {Object} - Object with search parameters
 */
function getSearchParams() {
  const params = new URLSearchParams(window.location.search);
  
  return {
    origin: params.get('origin') || '',
    destination: params.get('destination') || '',
    departureDate: params.get('departureDate') || '',
    returnDate: params.get('returnDate') || '',
    passengers: parseInt(params.get('passengers') || '1'),
  };
}

/**
 * Save search to localStorage
 * @param {Object} search - Search parameters
 */
function saveRecentSearch(search) {
  const searches = getRecentSearches();
  
  // Remove duplicate if exists
  const filtered = searches.filter(s => 
    s.origin !== search.origin || s.destination !== search.destination
  );
  
  // Add new search at the beginning
  filtered.unshift({
    ...search,
    timestamp: Date.now(),
  });
  
  // Keep only last 5 searches
  const limited = filtered.slice(0, 5);
  
  localStorage.setItem('recentSearches', JSON.stringify(limited));
}

/**
 * Get recent searches from localStorage
 * @returns {Array} - Array of recent searches
 */
function getRecentSearches() {
  try {
    const data = localStorage.getItem('recentSearches');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

// Export functions for use in other modules
window.API = {
  searchFlights,
  getFlightById,
  formatPrice,
  formatDate,
  getSearchParams,
  saveRecentSearch,
  getRecentSearches,
};
