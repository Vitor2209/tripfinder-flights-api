/**
 * ==========================================
 * TripFinder - UI Rendering Functions
 * ==========================================
 */

/**
 * SVG Icons used throughout the app
 */
const Icons = {
  plane: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
  hotel: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"/><path d="M8 7h.01"/><path d="M16 7h.01"/><path d="M12 7h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 11h.01"/><path d="M10 22v-6.5m4 0V22"/></svg>`,
  car: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
  palmtree: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"/><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  swap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  bookmark: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  filter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  sort: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  alertCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`,
};

/**
 * Render the logo component
 * @returns {string} - HTML string
 */
function renderLogo() {
  return `
    <div class="logo">
      <div class="logo__icon">${Icons.plane}</div>
      <span class="logo__text">Trip<span>Finder</span></span>
    </div>
  `;
}

/**
 * Render category buttons
 * @returns {string} - HTML string
 */
function renderCategories() {
  const categories = [
    { icon: 'plane', label: 'Flights', active: true },
    { icon: 'hotel', label: 'Hotels', disabled: true },
    { icon: 'car', label: 'Cars', disabled: true },
    { icon: 'palmtree', label: 'Packages', disabled: true },
  ];

  return `
    <div class="categories">
      ${categories.map(cat => `
        <button class="category-btn ${cat.active ? 'active' : ''} ${cat.disabled ? 'disabled' : ''}"
                ${cat.disabled ? 'disabled' : ''}>
          <div class="category-btn__icon">${Icons[cat.icon]}</div>
          <span class="category-btn__label">${cat.label}</span>
        </button>
      `).join('')}
    </div>
  `;
}

/**
 * Render feature cards
 * @returns {string} - HTML string
 */
function renderFeatures() {
  return `
    <div class="features">
      <button class="feature-card">
        <div class="feature-card__icon">${Icons.globe}</div>
        <h3 class="feature-card__title">Explorar destinos</h3>
        <p class="feature-card__desc">Descubra lugares incríveis</p>
      </button>
      <button class="feature-card">
        <div class="feature-card__icon">${Icons.help}</div>
        <h3 class="feature-card__title">12 maneiras de ajudar</h3>
        <p class="feature-card__desc">Dicas de viagem</p>
      </button>
    </div>
  `;
}

/**
 * Render search form
 * @returns {string} - HTML string
 */
function renderSearchForm() {
  const today = new Date().toISOString().split('T')[0];
  
  return `
    <form class="search-form" id="searchForm">
      <div class="input-group--locations">
        <div class="input-group">
          <span class="input-group__icon">${Icons.mapPin}</span>
          <input type="text" 
                 class="search-input" 
                 id="origin"
                 name="origin"
                 placeholder="De onde você vai sair?"
                 autocomplete="off">
          <span class="input-error hidden" id="originError"></span>
        </div>
        
        <button type="button" class="swap-btn" id="swapBtn">
          ${Icons.swap}
        </button>
        
        <div class="input-group">
          <span class="input-group__icon">${Icons.mapPin}</span>
          <input type="text" 
                 class="search-input" 
                 id="destination"
                 name="destination"
                 placeholder="Para onde você vai?"
                 autocomplete="off">
          <span class="input-error hidden" id="destinationError"></span>
        </div>
      </div>
      
      <div class="dates-row">
        <div class="input-group">
          <span class="input-group__icon">${Icons.calendar}</span>
          <input type="date" 
                 class="search-input" 
                 id="departureDate"
                 name="departureDate"
                 min="${today}">
          <span class="input-error hidden" id="departureDateError"></span>
        </div>
        <div class="input-group">
          <span class="input-group__icon">${Icons.calendar}</span>
          <input type="date" 
                 class="search-input" 
                 id="returnDate"
                 name="returnDate"
                 min="${today}">
        </div>
      </div>
      
      <div class="input-group">
        <span class="input-group__icon">${Icons.users}</span>
        <select class="search-input" id="passengers" name="passengers">
          <option value="1">1 Passageiro</option>
          <option value="2">2 Passageiros</option>
          <option value="3">3 Passageiros</option>
          <option value="4">4 Passageiros</option>
          <option value="5">5 Passageiros</option>
          <option value="6">6 Passageiros</option>
          <option value="7">7 Passageiros</option>
          <option value="8">8 Passageiros</option>
          <option value="9">9 Passageiros</option>
        </select>
      </div>
      
      <button type="submit" class="search-btn">Buscar voos</button>
    </form>
  `;
}

/**
 * Render recent searches section
 * @param {Array} searches - Array of recent search objects
 * @returns {string} - HTML string
 */
function renderRecentSearches(searches) {
  if (!searches || searches.length === 0) return '';
  
  return `
    <section class="recent-searches">
      <h2 class="section-title">Continue de onde parou</h2>
      <p class="section-subtitle">Aqui estão suas buscas recentes.</p>
      
      <div id="recentSearchesList">
        ${searches.slice(0, 2).map(search => renderRecentSearchItem(search)).join('')}
      </div>
      
      ${searches.length > 2 ? `
        <button class="show-more-btn" id="showMoreBtn">
          Mostrar mais
          ${Icons.chevronDown}
        </button>
      ` : ''}
    </section>
  `;
}

/**
 * Render a single recent search item
 * @param {Object} search - Search object
 * @returns {string} - HTML string
 */
function renderRecentSearchItem(search) {
  return `
    <button class="recent-search-item" 
            data-origin="${search.origin || ''}"
            data-destination="${search.destination || ''}"
            data-departure="${search.departureDate || ''}"
            data-return="${search.returnDate || ''}"
            data-passengers="${search.passengers || 1}">
      <div class="recent-search-item__thumb">
        ${Icons.plane}
      </div>
      <div class="recent-search-item__info">
        <div class="recent-search-item__route">
          ${Icons.plane}
          <span>${search.origin}</span>
          ${Icons.arrowRight}
          <span>${search.destination}</span>
        </div>
        <p class="recent-search-item__details">
          ${API.formatDate(search.departureDate)}
          ${search.returnDate ? ` – ${API.formatDate(search.returnDate)}` : ''}
          • ${search.returnDate ? 'Ida e volta' : 'Só ida'}
        </p>
      </div>
    </button>
  `;
}

/**
 * Render bottom navigation
 * @param {string} activePage - Current active page
 * @returns {string} - HTML string
 */
function renderBottomNav(activePage = 'explore') {
  const navItems = [
    { id: 'explore', icon: 'search', label: 'Explorar', href: 'index.html' },
    { id: 'deals', icon: 'heart', label: 'Ofertas', href: '#' },
    { id: 'saved', icon: 'bookmark', label: 'Salvos', href: '#' },
    { id: 'profile', icon: 'user', label: 'Perfil', href: '#' },
  ];

  return `
    <nav class="bottom-nav">
      <div class="bottom-nav__container">
        ${navItems.map(item => `
          <a href="${item.href}" class="nav-item ${activePage === item.id ? 'active' : ''}">
            ${Icons[item.icon]}
            <span class="nav-item__label">${item.label}</span>
          </a>
        `).join('')}
      </div>
    </nav>
  `;
}

/**
 * Render results page header
 * @param {Object} params - Search parameters
 * @returns {string} - HTML string
 */
function renderResultsHeader(params) {
  return `
    <header class="results-header">
      <div class="container">
        <div class="results-header__top">
          <button class="back-btn" id="backBtn">
            ${Icons.arrowLeft}
          </button>
          <div class="results-header__info">
            <h1 class="results-header__route">${params.origin} → ${params.destination}</h1>
            <p class="results-header__details">
              ${API.formatDate(params.departureDate)}
              ${params.returnDate ? ` – ${API.formatDate(params.returnDate)}` : ''}
              • ${params.passengers} ${params.passengers === 1 ? 'passageiro' : 'passageiros'}
            </p>
          </div>
        </div>
        
        <div class="filters">
          <button class="filter-btn">
            ${Icons.filter}
            Filtros
          </button>
          <button class="filter-btn">
            ${Icons.sort}
            Ordenar
          </button>
        </div>
      </div>
    </header>
  `;
}

/**
 * Render a flight card
 * @param {Object} flight - Flight object
 * @param {number} index - Index for animation delay
 * @returns {string} - HTML string
 */
function renderFlightCard(flight, index = 0) {
  const stopsText = flight.stops === 0 ? 'Direto' : 
                    `${flight.stops} ${flight.stops === 1 ? 'parada' : 'paradas'}`;
  
  return `
    <div class="flight-card" style="animation-delay: ${index * 100}ms">
      <div class="flight-card__header">
        <div class="flight-card__airline-logo">${flight.airlineLogo}</div>
        <div class="flight-card__airline-info">
          <h3>${flight.airline}</h3>
          <p>${stopsText}</p>
        </div>
      </div>
      
      <div class="flight-card__times">
        <div class="flight-card__time">
          <p class="flight-card__time-value">${flight.departureTime}</p>
          <p class="flight-card__time-code">${flight.origin}</p>
        </div>
        
        <div class="flight-card__path">
          <div class="flight-card__path-dot"></div>
          <div class="flight-card__path-line">
            <span class="flight-card__path-plane">${Icons.plane}</span>
          </div>
          <div class="flight-card__path-dot"></div>
        </div>
        
        <div class="flight-card__time">
          <p class="flight-card__time-value">${flight.arrivalTime}</p>
          <p class="flight-card__time-code">${flight.destination}</p>
        </div>
      </div>
      
      <div class="flight-card__duration">
        ${Icons.clock}
        <span>${flight.duration}</span>
      </div>
      
      <div class="flight-card__footer">
        <div>
          <p class="flight-card__price">${API.formatPrice(flight.price, flight.currency)}</p>
          <p class="flight-card__price-label">por pessoa</p>
        </div>
        <button class="flight-card__details-btn" data-flight-id="${flight.id}">
          Ver detalhes
          ${Icons.arrowRight}
        </button>
      </div>
    </div>
  `;
}

/**
 * Render loading skeleton for flight cards
 * @param {number} count - Number of skeletons to render
 * @returns {string} - HTML string
 */
function renderFlightCardSkeletons(count = 3) {
  return Array(count).fill(null).map(() => `
    <div class="flight-card-skeleton">
      <div class="skeleton-header">
        <div class="skeleton skeleton-circle"></div>
        <div style="flex: 1;">
          <div class="skeleton skeleton-text" style="width: 120px; margin-bottom: 8px;"></div>
          <div class="skeleton skeleton-text sm" style="width: 60px;"></div>
        </div>
      </div>
      
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="text-align: center;">
          <div class="skeleton skeleton-text lg" style="width: 60px; margin: 0 auto 8px;"></div>
          <div class="skeleton skeleton-text" style="width: 40px; margin: 0 auto;"></div>
        </div>
        <div class="skeleton" style="flex: 1; height: 2px; margin: 0 16px;"></div>
        <div style="text-align: center;">
          <div class="skeleton skeleton-text lg" style="width: 60px; margin: 0 auto 8px;"></div>
          <div class="skeleton skeleton-text" style="width: 40px; margin: 0 auto;"></div>
        </div>
      </div>
      
      <div style="display: flex; justify-content: center; margin-bottom: 16px;">
        <div class="skeleton skeleton-text" style="width: 80px;"></div>
      </div>
      
      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid var(--color-border);">
        <div>
          <div class="skeleton skeleton-text lg" style="width: 100px; margin-bottom: 8px;"></div>
          <div class="skeleton skeleton-text sm" style="width: 60px;"></div>
        </div>
        <div class="skeleton" style="width: 110px; height: 40px; border-radius: 12px;"></div>
      </div>
    </div>
  `).join('');
}

/**
 * Render error state
 * @param {string} message - Error message
 * @returns {string} - HTML string
 */
function renderErrorState(message) {
  return `
    <div class="error-state">
      <div class="error-state__icon">
        ${Icons.alertCircle}
      </div>
      <h2 class="error-state__title">Ops! Algo deu errado</h2>
      <p class="error-state__message">${message}</p>
      <button class="retry-btn" id="retryBtn">Tentar novamente</button>
    </div>
  `;
}

/**
 * Render empty state (no results)
 * @returns {string} - HTML string
 */
function renderEmptyState() {
  return `
    <div class="empty-state">
      <div class="empty-state__icon">
        ${Icons.plane}
      </div>
      <h2 class="empty-state__title">Nenhum voo encontrado</h2>
      <p class="empty-state__message">Tente alterar as datas ou destinos da sua busca.</p>
      <a href="index.html" class="new-search-btn">Nova busca</a>
    </div>
  `;
}

/**
 * Render flight results list
 * @param {Array} flights - Array of flight objects
 * @returns {string} - HTML string
 */
function renderFlightsList(flights) {
  if (!flights || flights.length === 0) {
    return renderEmptyState();
  }
  
  return `
    <p class="results-count">
      ${flights.length} ${flights.length === 1 ? 'voo encontrado' : 'voos encontrados'}
    </p>
    <div class="flights-list">
      ${flights.map((flight, index) => renderFlightCard(flight, index)).join('')}
    </div>
  `;
}

// Export render functions
window.Render = {
  Icons,
  renderLogo,
  renderCategories,
  renderFeatures,
  renderSearchForm,
  renderRecentSearches,
  renderRecentSearchItem,
  renderBottomNav,
  renderResultsHeader,
  renderFlightCard,
  renderFlightCardSkeletons,
  renderErrorState,
  renderEmptyState,
  renderFlightsList,
};
