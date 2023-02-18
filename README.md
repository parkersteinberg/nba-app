# Injury Insights 🏀

<br>

## Visit Injury Insights: https://injury-insights.vercel.app/

<br>

### Evaluate durability of NBA players and make data-driven decisions based on player injury history

<br>

### Search for any player in the league and get a look into their injury history.

<br>
Features include:

- Search functionality to find any NBA player
- A summary of injury history (with customizable date range)
- Tabular view of previous injuries and games missed due to injury
- Proprietary Durability Score for each player.

<br>

## Technologies Used:

- [TypeScript]()
- [React]()
- [NextJS]()
- [Material UI]()
- [PostreSQL]() & [CockroachDB]()
- Custom database scraped with [nba_inury_scraper](https://github.com/parkersteinberg/nba-injury-scraper) using [Python](), [BeautifulSoup](), and [Pandas](). [^1]
- Testing: [Jest](), [React Testing Library]()

<br>

### Connecting to PostgreSQL database

In a .env file, add `DATABASE_URL=<YOUR_DB_URL>`

<br>

Built by [Parker Steinberg](https://github.com/parkersteinberg)

<br>

[^1]: The data that this app uses is intentionally limited to a 10-season time span (2012-13 season through the 2021-22 season). Future iterations of this app would expand to real-time injury data (scraped data) and would go back to an earlier start date.
