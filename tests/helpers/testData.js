import faker from "faker";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const users = {
  dummyUser: {
    email: "luc.bayo@gmail.com",
    password: "password",
    username: faker.lorem.words(8)
  }
};

const tokenEmailVerication = {
  invalidToken:
    "eyJhbGciOiJIUzJpZCI6ImI5ZjZjN2JiLWM1NTItNDUyNS04MTUwLWI0NTI5NjNkMTZiZiIsImlhdCI6MTU1MDAwODA4Mn0.xCpwywFSzqHXbikot0SzS8fUpPKsqMVMtgmpf4OD_l8",
  wrongToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0MzM0YTA4LTMyMWEtNDdhYS1iMGVmLTQ5ODZmMWYyN2Q0OSIsImlhdCI6MTU1MDA1MzIzN30.O2QZO576DJ-iLc1ge7yU-jHdoAlQq9CK9Kc6QGqRuid",
  mutatedToken: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJZdmVzIiwibGFzdG5hbWUiOiJJcmFndWhhIiwiSWQiOiJhc3NhZGFmYWRhaGZhaGRhaGRhaCIsImlhdCI6MTU1MTE5NDI0NX0.
  BD3GY0JypL9E0B3kgh0ps3m2CJv_8UXMfz_-SI92nCE`,
  noUser: jwt.sign(
    {
      email: "yves.iraguha@gmail.com",
      id: "a934b3c4-9593-4455-b08e-c82de23ed165",
      username: "YvesIraguha"
    },
    process.env.SECRET_KEY
  )
};

const sendGridResponse = [
  {
    statusCode: 202,
    headers: {
      server: "nginx",
      date: "Mon, 18 Feb 2019 10:21:11 GMT",
      "content-type": "text/plain; charset=utf-8",
      "content-length": "0",
      connection: "close",
      "x-message-id": "IP2o4bUMSCafkr95SVicWg",
      "access-control-allow-origin": "https://sendgrid.api-docs.io",
      "access-control-allow-methods": "POST",
      "access-control-allow-headers":
        "Authorization, Content-Type, On-behalf-of, x-sg-elas-acl",
      "access-control-max-age": "600",
      "x-no-cors-reason": "https://sendgrid.com/docs/Classroom/Basics/API/cors.html"
    },
    request: {
      uri: {
        protocol: "https:",
        slashes: true,
        auth: null,
        host: "api.sendgrid.com",
        port: 443,
        hostname: "api.sendgrid.com",
        hash: null,
        search: null,
        query: null,
        pathname: "/v3/mail/send",
        path: "/v3/mail/send",
        href: "https://api.sendgrid.com/v3/mail/send"
      },
      method: "POST",
      headers: {
        Accept: "application/json",
        "User-agent": "sendgrid/6.3.0;nodejs",
        Authorization: process.env.SENDGRID_API_KEY,
        "content-type": "application/json",
        "content-length": 2500
      }
    }
  },
  null
];

export { users, tokenEmailVerication, sendGridResponse };
