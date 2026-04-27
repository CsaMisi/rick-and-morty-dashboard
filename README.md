# Rick & Morty Dashboard

A modern, responsive web application built to explore the [Rick and Morty API](https://rickandmortyapi.com/). This project demonstrates modern Angular development practices using Angular v21+, Standalone Components, Signals, and Server-Side Rendering (SSR).

## Tech Stack

- **Framework**: Angular 21 
- **Styling**: Bootstrap 5 & SCSS 
- **State Management**: Angular Signals & RxJS

##  Getting Started

### Prerequisites

- Node.js (v18.13.0 or newer recommended)
- npm 
- Angular CLI version 21.2.8 or newer

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CsaMisi/rick-and-morty-dashboard.git
   cd rick-and-morty-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run `npm start` or `ng serve` for a dev server. 

##  Development Notes

### TODO
- **Testing:** Using either Vitest or Karma with Jasmine, unit and integration tests should be written, on at least the component leve, and for the services. UI tests with Selenium could be considered, but at this scale, there isnt really much UI to be tested with such a resource heavy tool.
- **Potential Bug**: when launching with ng serve on my laptop, before it was able to fetch a single character it needed a refresh. This only occured on first startup, and i was not able to reproduce the issue on any other device. The problem onyl occured on firefox, i was not able to reproduce on chromium

### Extra branch
Theres a feature/sidebar-localstorage named branch, that contains some extras I've toyed around with during development. On the topic of branches you might see direct commits to release and master. In a prod setting i would not do that, and even if the policies were bad enough to let me do that, they would be reverted immedialty.
  

---
