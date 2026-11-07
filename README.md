# Cheki Motors — Experience Upgrade (Independent Concept)

**Status:** Frontend demonstration / unofficial concept  
**Technology:** HTML, CSS and vanilla JavaScript  
**Affiliation:** This project is not affiliated with, endorsed by, or connected to Cheki Motors.


## Pages

- `index.html` — homepage, vehicle search, categories and inventory.
- `vehicle.html` — vehicle details, image gallery, specifications and seller panel.
- `dealer.html` — sample dealer inventory, About and Contact tabs.
- `saved.html` — saved vehicle shortlist.
- `dashboard.html` — sample seller dashboard and local-only demo listing workflow.
- `proposal.html` — screenshot-grounded audit summary and draft outreach message.
- `styles.css` — responsive visual system.
- `app.js` — sample inventory and frontend interactions.

## Functionality

- Filter by keyword, make, vehicle type, location, minimum/maximum price, year and transmission.
- Sort by price and model year.
- Category shortcuts.
- Vehicle detail pages with gallery thumbnail switching.
- Save/unsave vehicles using browser local storage.
- Dealer Inventory / About / Contact tabs.
- Demo seller listing creation stored in browser local storage.
- Responsive layout and mobile navigation.

## Important limitations

- All vehicle, seller, price, mileage, listing and dashboard data is fictional or illustrative. Some images load from Unsplash over the internet.
- No backend, authentication, payment, messaging, real inquiry, real map, seller account or live publication is implemented.
- Demo listing creation and saved vehicles are stored only in the current browser.
- The seller dashboard metrics are illustrative, not measured analytics.
- Seller profiles are explicitly marked as demo and not verified. No verification claim is made.
- No live Cheki Motors systems are accessed, modified or integrated.

## Audit notes based on user-provided screenshots

Observed in the supplied screenshots:
1. The homepage has a dark header with vehicle category navigation and a prominent hero image.
2. The `/cars/` page shows Advanced Search, Keyword Search and Filter Search entry points, followed by vehicle-type categories. The user reported that they could browse vehicles but could not find/use search; this should be validated in a usability test.
3. Vehicle cards show photos, price, title, location and seller/rating-style indicators.
4. The vehicle detail page includes a gallery area, tabs for Specification / Location / Details, price, dealer panel, specifications and description.
5. In the supplied detail screenshot, several gallery thumbnail positions displayed the text “slide”. This may be placeholder text, missing image content or a rendering issue; validate on other listings.
6. The supplied Subaru detail screenshots show vehicle information that may warrant seller clarification (including fuel/powertrain wording). Do not treat this as proof of an inaccurate listing.
7. The dealer profile has Inventory, About and Contact tabs.
8. The supplied About screenshot showed a large blank content region before the footer. This may be empty dealer content or a loading/rendering issue.
9. The supplied Contact screenshot showed a map area containing the text “false”; the location data/configuration should be investigated.
10. The screenshots do not establish a confirmed security vulnerability, performance defect, backend defect or absence of features elsewhere on the site.

## Suggested next phase with owner permission

1. Validate the findings with Cheki Motors.
2. Agree on user journeys and success measures.
3. Review current frontend/backend architecture and design system with authorized access.
4. Conduct accessibility, mobile, performance and security reviews within an agreed scope.
5. Agree on integration requirements, privacy handling and ownership before production development.

## Contact proposal

See `proposal.html` for a concise proposal outline and a draft outreach email.
