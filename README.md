# Dockerized dog name registry

This DOCKERIZED application is a Node.js web server connected to DynamoDB for CRUD operations in the storage of dog names

Note: To run this application you must have a DDB table with name "dogNames", set up a .env with the below values and run `run docker-compose build` && `docker-compose up`:

```
AWS_ACCESS_KEY_ID={YOUR_KEY}
AWS_SECRET_ACCESS_KEY={YOUR_KEY}
AWS_REGION={YOUR_REGION}
AWS_ACCOUNT_ID={YOUR_ACCOUNT_ID}
```
