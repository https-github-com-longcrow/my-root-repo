alert("Hello, World!");
jobs:

  example-job:

      steps:

        - name: Connect to PostgreSQL

          run: node client.js

          env:

            POSTGRES_HOST: postgres

            POSTGRES_PORT: 5432
