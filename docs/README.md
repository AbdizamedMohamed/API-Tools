<img width="100%" title="API Tools" alt="API Tools" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=API-Tools&fontSize=60&fontColor=fff&animation=twinkling&fontAlignY=40"/>


Welcome to **API Tools**, a powerful and free collection of APIs for developers to build and integrate into their applications. We offer a range of endpoints with no user data tracking, no cookies, and unlimited usage. This repository contains the frontend and documentation for **API Tools**, as well as guidelines for using our Cloudflare Workers-based APIs.

## Table of Contents

- [About](#about)
- [Live Website](#live-website)
- [Features](#features)
- [Available APIs](#available-apis)
- [API Usage](#api-usage)
- [Contributing](#contributing)
- [License](#license)

---

## About

**API Tools** is designed to provide developers with free, unlimited API access. Whether you need counters, text-to-image generation, or other utility APIs, we've got you covered.

Our service emphasizes privacy:
- No tracking
- No data collection
- No cookies

We offer over 30+ API endpoints, with more being added regularly!

## Live Website

Visit the live site to explore and use all available APIs:
- Frontend: [API Tools](https://apitools.pages.dev)
- Workers API: [apitools.workers.dev](https://apitools.workers.dev)

## Features

- **Completely free and unlimited**: APIs are available to everyone with no rate limits.
- **No sign-up required**: You can use the APIs without logging in or sharing any personal data.
- **Simple and efficient**: APIs are easy to use and integrate into your applications.

## Available APIs

Here’s a list of some of the APIs you can use:

1. **Visitor Counter API**  
   - **Endpoint**: `/api/count`
   - **Description**: Retrieves the current number of visitors to your site.
   - **Method**: `GET`
   - **Parameters**: None

2. **Increment Counter API**  
   - **Endpoint**: `/api/increment`
   - **Description**: Increments the visitor count.
   - **Method**: `POST`
   - **Headers**: 
     - `x-api-key`: `your-api-key` (for authentication)

3. **Text-to-Image API**  
   - **Endpoint**: `/api/text-to-image`
   - **Description**: Generate an image based on a provided text prompt.
   - **Method**: `POST`
   - **Parameters**:
     - `prompt`: (string) The text to generate the image from.

4. **Namespace Management API**  
   - **Endpoint**: `/api/ns`
   - **Description**: Create and manage namespaces for custom counters or other services.
   - **Method**: `POST`
   - **Headers**:
     - `x-api-key`: `your-api-key`

*More APIs are available on the site, and we are constantly adding new ones.*

Error Handling

Each API returns appropriate HTTP status codes and error messages for troubleshooting. For example:

401 Unauthorized: Missing or invalid API key

400 Bad Request: Missing required parameters

500 Internal Server Error: Something went wrong on our end


## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork this repository.


2. Create a new branch (git checkout -b feature-branch).


3. Make your changes and commit them (git commit -m 'Add new feature').


4. Push to the branch (git push origin feature-branch).


5. Open a pull request, and we’ll review it!



Before contributing, please make sure to read our Code of Conduct.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

### Key Sections Explained:
1. **About**: Gives a brief introduction to what your project is about.
2. **Live Website**: Provides links to both the frontend and backend (API Workers).
3. **Features**: Highlights the key aspects of your service.
4. **Available APIs**: Lists the major APIs, their usage, and endpoint structure.
5. **API Usage**: Provides example `curl` commands to show how your APIs can be used.
6. **Contributing**: Instructions on how others can contribute to your project.
7. **License**: States the project license (MIT in this case).

You can add or remove sections depending on what suits your project best, but this template provides a solid foundation for your API Tools repository on GitHub.


