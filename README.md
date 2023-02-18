# Injury Insights 🏀

### Evaluate durability of NBA players and make data-driven decisions based on player injury history

<br>

## [Injury Insights is live!](https://injury-insights.vercel.app/)

Features include:

- Search functionality to find any NBA player
- A summary of injury history (with customizable date range)
- Tabular view of previous injuries and games missed due to injury
- Proprietary Durability Score for each player

<br>

## Technologies used:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Material UI](https://mui.com/)
- Database: PostreSQL hosted with [Cockroach DB](https://www.cockroachlabs.com/)
- Custom dataset created with [nba_inury_scraper](https://github.com/parkersteinberg/nba-injury-scraper) [^1]
- Testing: [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)


<br>

Built by [Parker Steinberg](https://github.com/parkersteinberg)

<br>

[^1]: The data that this app uses is intentionally limited to a 10-season time span (2012-13 season through the 2021-22 season). Future versions of this app will expand data coverage to include real-time injury data (scraped data) and will date back to earlier start dates
