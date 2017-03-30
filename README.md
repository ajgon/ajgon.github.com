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
docker-compose run -e JEKYLL_ENV=production site bash -c "rm -rf /app/_site /app/.asset-cache /app/.deploy && bundle exec jekyll build && bundle exec octopress deploy"
```

**Be sure `docker-compose up` or any other instance of the stack is not running!**
