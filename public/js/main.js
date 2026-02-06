/**
 * ==========================================
 * TripFinder - Main Application Logic
 * ==========================================
 */

/**
 * Initialize the home page
 */
function initHomePage() {
  const app = document.getElementById('app');
  if (!app) return;

  // Get recent searches from localStorage
  const recentSearches = API.getRecentSearches();

  // Render the page
  app.innerHTML = `
    <div class="page">
      <div class="container">
        <header class="header">
          ${Render.renderLogo()}
        </header>
        
        ${Render.renderCategories()}
        ${Render.renderFeatures()}
        ${Render.renderSearchForm()}
        ${Render.renderRecentSearches(recentSearches)}
      </div>
      
      ${Render.renderBottomNav('explore')}
    </div>
  `;

  // Setup event listeners
  setupSearchForm();
  setupSwapButton();
  setupRecentSearches();
  setupShowMoreButton();
}

/**
 * Setup search form validation and submission
 */
function setupSearchForm() {
  const form = document.getElementById('searchForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const origin = document.getElementById('origin').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;

    // Validate form
    let isValid = true;

    // Reset errors
    document.querySelectorAll('.search-input').forEach(input => {
      input.classList.remove('error');
    });
    document.querySelectorAll('.input-error').forEach(error => {
      error.classList.add('hidden');
      error.textContent = '';
    });

    // Validate origin
    if (!origin) {
      showError('origin', 'Por favor, informe a origem');
      isValid = false;
    }

    // Validate destination
    if (!destination) {
      showError('destination', 'Por favor, informe o destino');
      isValid = false;
    }

    // Validate departure date
    if (!departureDate) {
      showError('departureDate', 'Por favor, selecione a data de ida');
      isValid = false;
    }

    if (!isValid) return;

    // Save to recent searches
    API.saveRecentSearch({
      origin,
      destination,
      departureDate,
      returnDate,
      passengers: parseInt(passengers),
    });

    // Build query string and redirect
    const params = new URLSearchParams({
      origin,
      destination,
      departureDate,
      passengers,
    });

    if (returnDate) {
      params.append('returnDate', returnDate);
    }

    window.location.href = `results.html?${params.toString()}`;
  });
}

/**
 * Show validation error for an input
 * @param {string} inputId - ID of the input element
 * @param {string} message - Error message
 */
function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(`${inputId}Error`);
  
  if (input) {
    input.classList.add('error');
  }
  
  if (error) {
    error.textContent = message;
    error.classList.remove('hidden');
  }
}

/**
 * Setup swap button functionality
 */
function setupSwapButton() {
  const swapBtn = document.getElementById('swapBtn');
  if (!swapBtn) return;

  swapBtn.addEventListener('click', () => {
    const origin = document.getElementById('origin');
    const destination = document.getElementById('destination');
    
    if (origin && destination) {
      const temp = origin.value;
      origin.value = destination.value;
      destination.value = temp;
    }
  });
}

/**
 * Setup recent searches click handlers
 */
function setupRecentSearches() {
  const container = document.getElementById('recentSearchesList');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const item = e.target.closest('.recent-search-item');
    if (!item) return;

    // Get data from the item
    const origin = item.dataset.origin;
    const destination = item.dataset.destination;
    const departureDate = item.dataset.departure;
    const returnDate = item.dataset.return;
    const passengers = item.dataset.passengers;

    // Fill the form
    document.getElementById('origin').value = origin || '';
    document.getElementById('destination').value = destination || '';
    document.getElementById('departureDate').value = departureDate || '';
    document.getElementById('returnDate').value = returnDate || '';
    document.getElementById('passengers').value = passengers || '1';

    // Scroll to form
    document.getElementById('searchForm').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  });
}

/**
 * Setup show more button for recent searches
 */
function setupShowMoreButton() {
  const showMoreBtn = document.getElementById('showMoreBtn');
  if (!showMoreBtn) return;

  const recentSearches = API.getRecentSearches();
  let expanded = false;

  showMoreBtn.addEventListener('click', () => {
    const container = document.getElementById('recentSearchesList');
    if (!container) return;

    expanded = !expanded;
    
    if (expanded) {
      // Show all searches
      container.innerHTML = recentSearches
        .map(search => Render.renderRecentSearchItem(search))
        .join('');
      showMoreBtn.classList.add('expanded');
      showMoreBtn.innerHTML = `Mostrar menos ${Render.Icons.chevronDown}`;
    } else {
      // Show only first 2
      container.innerHTML = recentSearches
        .slice(0, 2)
        .map(search => Render.renderRecentSearchItem(search))
        .join('');
      showMoreBtn.classList.remove('expanded');
      showMoreBtn.innerHTML = `Mostrar mais ${Render.Icons.chevronDown}`;
    }

    // Re-setup click handlers
    setupRecentSearches();
  });
}

/**
 * Initialize the results page
 */
async function initResultsPage() {
  const app = document.getElementById('app');
  if (!app) return;

  // Get search parameters from URL
  const params = API.getSearchParams();

  // Render initial page with loading state
  app.innerHTML = `
    <div class="page">
      ${Render.renderResultsHeader(params)}
      
      <main class="results-list">
        <div class="container" id="resultsContainer">
          ${Render.renderFlightCardSkeletons(3)}
        </div>
      </main>
      
      ${Render.renderBottomNav('explore')}
    </div>
  `;

  // Setup back button
  setupBackButton();

  // Fetch flights
  try {
    const flights = await API.searchFlights(params);
    
    const container = document.getElementById('resultsContainer');
    if (container) {
      container.innerHTML = Render.renderFlightsList(flights);
      setupFlightCardButtons();
    }
  } catch (error) {
    const container = document.getElementById('resultsContainer');
    if (container) {
      container.innerHTML = Render.renderErrorState(
        'Não foi possível buscar os voos. Tente novamente.'
      );
      setupRetryButton();
    }
  }
}

/**
 * Setup back button
 */
function setupBackButton() {
  const backBtn = document.getElementById('backBtn');
  if (!backBtn) return;

  backBtn.addEventListener('click', () => {
    window.history.back();
  });
}

/**
 * Setup retry button
 */
function setupRetryButton() {
  const retryBtn = document.getElementById('retryBtn');
  if (!retryBtn) return;

  retryBtn.addEventListener('click', () => {
    window.location.reload();
  });
}

/**
 * Setup flight card detail buttons
 */
function setupFlightCardButtons() {
  const buttons = document.querySelectorAll('.flight-card__details-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const flightId = btn.dataset.flightId;
      // In a real app, navigate to flight details page
      console.log('View flight details:', flightId);
      alert(`Ver detalhes do voo ${flightId} (em desenvolvimento)`);
    });
  });
}

/**
 * Determine which page to initialize based on current URL
 */
function init() {
  const path = window.location.pathname;
  
  if (path.includes('results.html')) {
    initResultsPage();
  } else {
    initHomePage();
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
