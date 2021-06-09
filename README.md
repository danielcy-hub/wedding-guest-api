# wedding-guest-api
api for my wedding guest list

# Migrations
- Create migrations:
  ```Shell
  npm run typeorm -- migration:generate -n form -- migration:generate -n first-migration
  ```
- Run migrations:
  ```Shell
  npm run typeorm migration:run
  ```
- Revert migrations:
  ``Shell
  npm run typeorm migration:revert
  ```



