# prep-lunch

> Preparation au lunch & learn

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Use full endpoints

List team : `http://stats.nba.com/stats/commonteamyears?LeagueID=00`
Team infos : `http://stats.nba.com/stats/teaminfocommon?TeamID={{TEAMID}}&LeagueID=00&SeasonType=Regular%20Season&Season=2015-16`
