React front-end with Vite + tRPC backend with Node.
Includes an optional PostgreSQL database.

- 💻 [Vite](https://vitejs.dev/)
- 💻 [tRPC](https://trpc.io/)
- 💿 [PostgreSQL](https://www.postgresql.org)

## Vite

Available at `/`.
Internal port `3000`.

See logs in terminal with `tail -f /var/log/vite.log`.
Restart process in terminal with `supervisorctl restart vite`.

## tRPC

Available at `/api/`.
Internal port `3001`.

See logs in terminal with `tail -f /var/log/node.log`.
Restart process in terminal with `supervisorctl restart node`.

## PostgreSQL

Available with a VSCode extension ([SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools)) or by CLI.

### Connect via SQLTools

1. Open VSCode remote connection to your deployment.
2. Install the [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools) and [SQLTools PostgreSQL/Redshift Driver](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-pg) extensions.
3. Open the "SQLTools" tab in the sidebar and click "Strapi".

### Connect via CLI

```bash
su postgres -c 'psql'
```
