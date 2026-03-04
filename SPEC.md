# Power AI Website — SPEC.md

## Project Overview
- **Name**: Power AI Website
- **Type**: Multi-page marketing site with dashboard
- **Core Functionality**: Showcase Power AI's services, live revenue dashboard, token info, social presence, and marketplace
- **Target Users**: Potential clients, crypto community, AI enthusiasts

## UI/UX Specification

### Design System
- **Theme**: Dark, futuristic, terminal/hacker aesthetic
- **Primary Color**: `#00ff88` (neon green)
- **Secondary Color**: `#1a1a2e` (deep dark blue)
- **Accent Color**: `#ff3366` (hot pink for CTAs)
- **Background**: `#0a0a0f` (near black)
- **Text**: `#e0e0e0` (light gray)
- **Font**: `JetBrains Mono` for headings, `Inter` for body

### Layout Structure
- **Navigation**: Fixed top navbar with logo, nav links, "Connect" button
- **Footer**: Social links, copyright, network badges
- **Responsive**: Mobile-first, breakpoints at 768px, 1024px

### Pages

#### 1. Home (/)
- **Hero**: "AI That Works" tagline, subtitle about real AI employee
- **Status Badge**: "Online and working" indicator
- **Guide Section**: Featured PDF guide with cover, what's inside chapters
- **Templates Section**: Copy-paste templates preview
- **About**: About Muddy/Power AI
- **CTA**: "Get the Playbook" button

#### 2. Dashboard (/dashboard)
- **Revenue Section**: Stripe revenue display (live data)
- **Crypto Treasury**: Wallet balance, token holdings
- **Metrics**: Tokens burned, fees claimed
- **Network Badge**: Base network indicator

#### 3. $PowerAI (/token)
- **Token Info**: Name, ticker, contract address
- **Price Display**: Mock price (or live if available)
- **Stats**: Market cap, holders, volume
- **Buy Button**: Link to DEX/purchase

#### 4. @PowerAiX (/poweraix)
- **Profile Info**: Bio, followers, following
- **Recent Posts**: Latest 5 tweets (mock)
- **Follow Button**: Link to X profile

#### 5. PAI Mart (/mart)
- **Product Grid**: Cards for services/products
- **Categories**: AI Agents, Templates, Services
- **Pricing**: Display prices
- **Purchase**: CTA buttons

### Components
- `Navbar`: Logo, nav links, connect button
- `Hero`: Main headline, subtext, CTA
- `GuideCard`: PDF preview, chapter list, buy button
- `DashboardCard`: Metric label, value, trend
- `TokenDisplay`: Token info, price, stats
- `ProductCard`: Image, title, price, buy button
- `Footer`: Social links, network badges

## Functionality
- Static site with mock data for dashboard
- Smooth scroll navigation
- Hover animations on cards
- Mobile-responsive hamburger menu

## Acceptance Criteria
1. All 5 pages load without errors
2. Navigation works between all pages
3. Dashboard shows revenue/crypto data
4. Mobile layout is usable
5. Dark theme consistent throughout