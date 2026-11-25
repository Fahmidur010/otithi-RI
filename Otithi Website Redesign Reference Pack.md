# Otithi Website Redesign: Reference Pack

Feature inventory, user journey, priority matrix, and UX heuristic evaluation for the redesign of https://otithi.brac.net. Reviewed November 2026. Based on the homepage, About, Destinations, FAQ, a destination page (Rajshahi), and a booking page (Rajshahi Riverside Retreat). The booking form, account area, blog, gallery, festivals, and policy pages were not fully reviewed. Severity and priority ratings are estimates to validate with real users and analytics.

## How to use this document

Section 1 describes what the site is and what it offers. Section 2 lists features page by page. Section 3 maps the user journey from discovery to post-trip. Section 4 prioritizes issues and features. Section 5 records heuristic findings. Section 6 lists open questions and next steps. Use Sections 3 to 5 together: the journey shows where users struggle, the heuristics explain why, and the priority matrix decides what to fix first.

## 1. About Otithi

Otithi is BRAC's community-based tourism initiative in Bangladesh. "Otithi" is the Bengali word for guest, a term of deep hospitality in Bengali households. The initiative offers guided travel experiences that showcase cultural heritage and natural landscapes, including popular and lesser-known destinations. Each visit pays the host community directly, and the site frames travel as a way to preserve traditions, create jobs, and strengthen local economies.

**Core promise:** authentic cultural immersion, responsible travel that benefits communities, and fully guided logistics.

**Destinations:** Rajshahi, Madhupur, Sreemangal, North Bengal, Sylhet, and Sundarbans.

**Festival packages:** Rash Utshob, Kushtia Lalon Festival, Bonedi Bari Durga Puja, Nobanno Utshob, and Bonbibi Festival (named in reviews).

**Contact:** BRAC Tower, Mohakhali, Dhaka. Email otithi.support@brac.net. Phone and WhatsApp numbers appear in more than one format across pages (see Section 5).

**Payment:** bKash, Visa, Mastercard, bank transfer. An EMI policy page exists.

## 2. Feature Inventory

### 2.1 Site structure

- **Primary navigation:** Home, About, Destinations, Book a Tour (dropdown of destinations), Festivals, Gallery, Blog, FAQ, Login.
- **Footer:** Policies, Terms and Conditions, EMI Policy, Privacy Policy, FAQ, Blog, Feedback, contact details, office address, payment logos, social links (Facebook, Instagram, LinkedIn, YouTube, TikTok, TripAdvisor).
- **Persistent utilities:** call and WhatsApp buttons, a scroll-to-top button, and a cookie consent banner.

### 2.2 Homepage

- Hero carousel with six destination banners, each linked to its package page.
- Mission statement on community-based tourism.
- Six experience cards: Santal heritage and cultural performance, Cha-Baganee community performance, Sundarbans village journey, Patro community food experience, bamboo crafting workshop, and Mughal and Sultanate heritage trail. Each has a "See more" link.
- Testimonials carousel with star ratings, traveler country, trip name, and date.
- Feedback call to action.
- Newsletter signup with a residency choice (live in Bangladesh or outside).
- "Add your dream destination" modal for suggesting a city.
- Floating call and WhatsApp widget.

### 2.3 About page

- Explains the name, the concept, and the reasons for community-based tourism.
- Describes the design process: roughly two years of research with travelers, operators, and experts.
- Describes impact: livelihoods, jobs, and local economies.
- Long-form text with "Read More" expansion.

### 2.4 Destinations and packages

- Destination cards with imagery, each linking to a city package page.
- Package list, with a message form for enquiries (package name dropdown lists about 15 options).

### 2.5 Package page (example: Rajshahi)

- **Quick facts:** duration, focus theme, group size (2 to 8 people in the sample), difficulty level.
- **Overview and highlights:** narrative description and a bulleted list of key activities.
- **Day-by-day itinerary:** timed activities with photos and a day switcher.
- **Accommodation:** room types (couple, twin) with property name and photos, plus a link to the full gallery.
- **Inclusions:** accommodation, all meals, local transport, guided tours and community interactions, entry fees, insurance coverage.
- **Exclusions:** transport to and from the destination, with an offer to help arrange it.
- **Pricing by travel type (sample, Rajshahi):**
  - Twin sharing: from BDT 11,500 (couples or even-numbered adult groups)
  - Group: from BDT 9,500 (6 or more people)
  - Solo: from BDT 16,500 (solo or odd-numbered groups)
- **Booking actions:** "Continue" and "Book a Consultation" on each travel type.
- **Practical info:** activity level, best time to visit (mid-September to mid-March), current offers (directed to social media), and a link to booking terms.
- **Support:** phone, email, and a message option.
- **Login gate:** "Continue as Guest" or "Login / Register" before checkout.

### 2.6 FAQ (seven groups)

1. **Community and experience:** what community tourism is, how it differs from commercial tourism, how communities benefit, suitability for international travelers, customization.
2. **Tour and accommodation:** all tours are guided, room types are double or twin, accessibility is handled case by case.
3. **Booking and payment:** payment by mobile banking, card, or bank transfer. A 50% deposit is due for bookings at least two weeks ahead; the balance is due at least seven days before departure. Extra costs include extra nights, personal shopping, and transport to and from the destination.
4. **General travel:** fitness levels, luggage (no limit, but travel light on excursions), and skipping activities with advance notice.
5. **Special considerations:** expectant mothers and child-friendly trips.
6. **Contact and support:** phone, WhatsApp, email, social channels. Cancellations and changes are handled by email, with credit issued to an Otithi Wallet.
7. **Health and safety:** travel insurance not included, hygiene practices, and medical disclosure.

## 3. User Journey Map

**Persona (assumed):** a Dhaka-based or diaspora professional planning a two-day weekend trip. They want something culturally meaningful and do not want to plan logistics.

| Stage | What the user does | Thinking and feeling | Pain points on the site | Opportunities |
| --- | --- | --- | --- | --- |
| 1. Discovery | Arrives from social media, search, or word of mouth | "What is this? Is it legit?" | Mission copy is long and abstract; hero does not state a clear offer or price | Lead with a one-line promise and a starting price |
| 2. Inspiration | Scrolls experience cards and testimonials | Emotional pull from photos and stories | Experience cards lead to "See more" rather than a bookable trip; the "Ready to join us" heading has no content | Link each experience to a trip; show next available dates |
| 3. Destination choice | Opens a destination from the menu or carousel | "Which one fits my time and budget?" | Six destinations, no comparison; "Destinations" and "All Packages" overlap | Comparison by duration, price, activity level, and travel type |
| 4. Evaluation | Reads overview, itinerary, accommodation, inclusions, pricing | "Is it worth it? What do I get?" | Price sits far down on mobile; itinerary is text-heavy; inclusions are separated from price | Sticky price and CTA bar; collapsed itinerary with day summaries; price breakdown near the top |
| 5. Trust check | Looks for FAQs, cancellation terms, safety, reviews | "What if something goes wrong?" | Cancellation policy buried in terms; insurance excluded but not explained; reviews not filterable | Deposit and refund summary beside price; reviews filterable by destination |
| 6. Booking decision | Picks travel type and clicks Continue or Book a Consultation | "Can I book myself, or must I call?" | Two booking paths with unclear differences; no visible date selection | One primary self-serve path; consultation as secondary |
| 7. Account and checkout | Sees login or guest choice | "Do I need an account?" | Login gate appears before commitment; flow after it not fully reviewed | Guest checkout first; offer account creation after booking |
| 8. Payment | Pays 50% deposit, then balance seven days before departure | "Will I be charged correctly, and when?" | Schedule only in FAQ; payment methods not shown upfront | Payment timeline in the booking summary; reminders before the balance date |
| 9. Pre-trip | Waits for confirmation; arranges transport | "How do I get there? What do I pack?" | Transport excluded with no built-in help; packing and fitness info only in FAQ | Pre-trip checklist and transport help in the confirmation |
| 10. During trip | Takes part in activities with guides | Immersed and enjoying | Outside the scope of the public site | Consider a day-of-trip info page |
| 11. Post-trip | Leaves feedback, shares photos, may rebook | "I want to return and tell others." | Feedback is a separate page; no visible rebooking path | Follow-up email with feedback link and next-trip suggestions |

**Highest drop-off risks (inferred):** Stage 4 (price visibility on mobile), Stage 6 (booking path confusion), and Stage 7 (login gate before commitment).

## 4. Feature Priority Matrix

Impact is the effect on the user's ability to book and trust Otithi. Effort is an estimate of design and engineering work.

| Feature or issue | User impact | Effort | Type | Priority |
| --- | --- | --- | --- | --- |
| Sticky price and booking CTA on package pages | High | Low | Quick win | P1 |
| One clear booking path (self-serve, with consultation as secondary) | High | Medium | Strategic | P1 |
| Guest checkout before any account prompt | High | Medium | Strategic | P1 |
| Consolidate phone numbers and contact channels | High | Low | Quick win | P1 |
| Simplify navigation (merge Destinations, All Packages, Book a Tour) | High | Low | Quick win | P1 |
| Cancellation, refund, and deposit summary near price | High | Low | Quick win | P1 |
| Remove or fill empty and placeholder sections | Medium | Low | Quick win | P1 |
| Cookie consent with equal reject and accept options | Medium (compliance) | Low | Quick win | P1 |
| Date selection and live availability | High | High | Strategic | P2 (depends on backend) |
| Destination comparison view | Medium | Medium | Fill-in | P2 |
| Reviews filterable by destination; richer review content | Medium | Low | Quick win | P2 |
| Experience cards linked to bookable trips | Medium | Low | Quick win | P2 |
| Community-impact storytelling tied to each booking | High (trust) | Low | Quick win | P2 |
| Accessibility information and filters | Medium | Medium | Fill-in | P2 |
| Festivals section with dates and packages | Medium | Medium | Fill-in | P2 |
| Otithi Wallet visibility (balance, credits, history) | Medium | Medium | Fill-in | P2 |
| Pre-trip checklist and transport help | Medium | Low | Quick win | P2 |
| Post-trip feedback and rebooking prompts | Medium | Low | Quick win | P3 |
| Bengali language support | High for local audience | High | Strategic | P3 (validate demand first) |
| Newsletter with residency choice | Low | Low | Deprioritize | P3 |
| Blog and gallery | Low to medium | Low | Fill-in | P3 |
| "Dream destination" bucket list modal | Low | Low | Deprioritize | P4 (review for removal) |

**Quick wins** are high-value fixes with low effort. **Strategic bets** need larger investment. **Fill-ins** are useful but not urgent. **Deprioritize** items should be reviewed for removal.

## 5. UX Heuristic Evaluation

Evaluated against Nielsen's usability heuristics, with UX laws noted where they apply. Severity: 0 = not a problem, 1 = cosmetic, 2 = minor, 3 = major, 4 = catastrophic.

| # | Heuristic | Issue observed | Severity | Recommendation |
| --- | --- | --- | --- | --- |
| 1 | Visibility of system status | No visible progress through booking; no confirmation state for consultation requests seen | 3 | Multi-step progress indicator; confirmation screen with reference number |
| 2 | Match between system and real world | Mixed terms: Destinations, All Packages, Tour Packages, Festivals, Events, Book a Tour | 2 | One term per concept, used everywhere |
| 3 | User control and freedom | Login gate before commitment; unclear how to change traveler type after selecting | 2 | Free browsing and selection; defer account prompts to checkout |
| 4 | Consistency and standards | Two contact numbers in different formats; duplicated navigation in header and footer | 2 | One canonical number per purpose; consistent formatting |
| 5 | Error prevention | Long package dropdown (15+ options); some options marked unavailable | 3 | Pre-fill package from the page; hide or disable unavailable options |
| 6 | Recognition rather than recall | Selected package and travel type not carried into the enquiry form | 2 | Carry selections into the form |
| 7 | Flexibility and efficiency | No fast path for returning guests; no saved travelers or rebooking | 2 | Saved travelers and one-click rebooking |
| 8 | Aesthetic and minimalist design | Repeated copy on About page; duplicated paragraphs in markup; empty heading on homepage | 2 | Trim copy; remove duplicated and empty sections |
| 9 | Error recognition and recovery | Form errors and failure states not tested | Unknown | Test error states; plain-language messages |
| 10 | Help and documentation | FAQ strong but not linked from the booking step | 2 | Contextual help beside price, deposit, and transport |

**Additional UX law observations:**

- **Hick's Law:** overlapping navigation labels and a long package dropdown add choice load. Use progressive disclosure.
- **Fitts's Law:** floating call and WhatsApp buttons are well placed for thumbs. Some primary booking CTAs appear as small text links and should be larger.
- **Jakob's Law:** travel sites usually show a date picker beside a price summary. Otithi's split between a message form and the package page departs from that pattern.
- **Aesthetic-Usability Effect:** the photography and visual tone build trust. Keep them, but do not let them mask the booking friction.
- **Peak-End Rule:** testimonials and the post-trip experience shape memory. The post-trip loop is an untapped chance to convert guests into repeat visitors.

**Top five issues to fix first:**

1. The booking path is unclear and split across two flows (heuristics 1, 3, 6).
2. Price and cancellation terms are not visible at the decision point (heuristic 10, journey stage 5).
3. Login is required before commitment (heuristic 3).
4. Contact information is inconsistent (heuristic 4).
5. Empty and duplicated content weakens credibility (heuristic 8).

## 6. Open Questions and Next Steps

### 6.1 Gaps in this review

- Full booking flow after "Continue" (date selection, traveler details, payment screens, confirmation).
- Account features (booking history, wallet, profile).
- Blog, gallery, festivals, feedback, and EMI policy pages.
- Terms and Conditions covering pricing models, child policy, payment, cancellation, and wallet rules.
- Mobile experience, which uses separate navigation.
- Analytics: funnel drop-off rates, device split, and traffic sources.

### 6.2 Questions for stakeholders

- Is booking self-serve, consultation-led, or both? What determines which path a guest takes?
- Is date-based availability live in the back office, or managed manually?
- Which phone number and channel should be the primary contact?
- Is Bengali language support in scope for this redesign?
- Which festivals and destinations are strategic priorities for the next season?
- What are the content and brand guidelines for community-impact messaging?

### 6.3 Recommended next steps

1. Validate the journey map and top five issues with 5 to 8 usability sessions on the live booking flow.
2. Complete the review of the booking form, account area, and policy pages.
3. Pull analytics to confirm the drop-off stages.
4. Agree P1 scope with stakeholders and build a prototype of the single booking path.
5. Run a usability test on the prototype against the current site using the same tasks.

## 7. Source notes

All observations come from the public pages named at the top of this document, as viewed in November 2026. Prices and offers change, so confirm current figures before using them in designs or copy.
