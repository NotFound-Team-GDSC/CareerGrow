# CareerGrow
CareerGrow is an application to assist anyone who are now trying to improve they self or for you guys who seeking for job. This Application it self is made to fulfill our task in GDSC Hackathon 2024. We hope that after this event,
We are able to carry on this app project so we can realize it and help a lot of people who are wanted to dive into IT Sector Job.

## CareerGrow API
CareerGrow is using REST API to assist the android application through some endpoint that will be consumed by our Android Application in its process.
In Running our Backend Service, we are using Cloud Run by Google Cloud Platform (GCP) to help us running our service.
You can check our endpoint by clicking this link down below:

```
https://app-onaq3xz54a-et.a.run.app/
```

## CareerGrow Endpoints
Here some code that we served for the application to be used.

1. Register
To Register account to our service/application
```
https://app-onaq3xz54a-et.a.run.app/register
```
Header:
```
{
  "Content-Type":"application/json"
}
```
Body:
```
{
  "email":"<INSERT_YOUR_EMAIL_HERE@<EMAIL_DOMAIN>",
  "nama":"<INSERT_YOUR_NAME_HERE>",
  "password":"<INSERT_YOUR_PASSWORD_HERE>",
  "conf_password":"<INSER_AGAIN_YOUR_PASSWORD>"
}
```

2. Login
To Login into our service/application
```
https://app-onaq3xz54a-et.a.run.app/login
```
Header:
```
{
  "Content-Type":"application/json"
}
```
Body:
```
{
  "email":"<INSERT_YOUR_EMAIL_HERE@<EMAIL_DOMAIN>",
  "password":"<INSERT_YOUR_PASSWORD_HERE>",
}
```
**(This will be updated soon)

## Tech Stack
- Cloud Run
- Docker
- Node.JS
- MongoDB

**(Will be changed later)
