# https://www.rzegocki.pl/

## Prepare

```
docker-compose build
```

## Fire up development server

```
docker-compose up
```

## Build `_site`

```
docker-compose run site jekyll build
```

## Deploy

```
docker-compose run -e JENKINS_ENV=production site bash -c "rm -rf /app/_site && bundle exec jekyll build && bundle exec octopress deploy"
```
