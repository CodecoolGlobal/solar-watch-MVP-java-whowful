<a id="readme-top"></a>
### Solar Watch Site

---

This project is a streamlined and user-friendly website that allows registered users to effortlessly access and view sunrise and sunset data for specific cities on any chosen date. The website also includes a convenient feature that automatically saves the cities checked by users, ensuring that this information remains readily available without the need to recheck the data on subsequent visits.

<img src='frontend/public/Screenshot 2024-08-21 at 11.07.01.png'>


### Built with

---

This application utilizes the following APIs and technologies:

- <strong>[Sunrise Sunset API](https://sunrise-sunset.org/api)</strong>: Provides solar data.
- <strong>[Geocode API](https://openweathermap.org/api/geocoding-api)</strong>: Used for location-based services. Requires an API key, which you can obtain by registering on their website.

### Technologies

* [![Java][java.com]][Java-url]
* [![Spring Boot][Spring.com]][Spring-boot-url]
* [![Spring Data JPA][Springdata]][Spring-data-url]
* [![Spring Boot][Springsecurity]][Spring-security-url]
* ![Javascript][javascript.com]
* [![ReactJS][React.js]][React-url]
* [![PostgreSQL][postgresql]][PostgreSQL-url]
* [![Tailwind][tailwind.com]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Implemented Features

---

- Landing page with navbar
- Authentication / Authorization
- Protected routes on frontend
- Query city's sunset/sunrise data
- Store data to database upon first API request to minimize requests
- Visible history of the searched cities

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

___

#### Prerequisites:
Java JDK 17 or newer: You can download it here. [https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

#### Steps

1. Get your FREE API key for Gocode API: [https://openweathermap.org/api/geocoding-api](https://openweathermap.org/api/geocoding-api)
   
2. Clone the repo
   ```sh
   git clone https://github.com/CodecoolGlobal/solar-watch-MVP-java-whowful.git
   ```
3. Install NPM packages in the frontend folder
   ```sh
   cd frontend
   npm install
   ```
4. Set up environmental variables. Either use the terminal [(Here is a guide)](https://www.twilio.com/en-us/blog/how-to-set-environment-variables-html) or the built-in feature of the IntelliJ:
   - Edit the configuration of the application:
  <img src='frontend/public/Screenshot 2024-08-21 at 13.28.43.png'>
   - Select the Modify options and then the environmental variables:
  <img src='frontend/public/Screenshot 2024-08-21 at 14.22.00.png'>
   - Now an input field of the environmental variables is visible where you can enter your variables.
   - Don't forget to add your API key as well.

<ins><strong>Please note that the name of the environmental variables have to be the same as in the application.properties file!</Strong></ins>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usage
____

1. Start the server:

   - Open the backend folder in your IDE (IntelliJ IDEA recommended).
   - Ensure it's opened as a Maven project.
   - Run the main method of the SolarWatchApplication class.
  
2. Start the frontend:

   - Navigate to the frontend folder.
   - Run the command:
   ```sh
   npm run dev
   ```
3. Access the website:
   - [http://localhost:5173/](http://localhost:5173/)
   - After registration and login you are able to use the solar data request feature.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[Spring-boot-url]: https://spring.io/projects/spring-boot
[Spring.com]: https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=Spring&logoColor=white
[Springdata]: https://img.shields.io/badge/Spring_data_jpa-6DB33F?style=for-the-badge&logo=SpringSecurity&logoColor=white
[Spring-data-url]: https://spring.io/projects/spring-data
[Springsecurity]: https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white
[Spring-security-url]: https://spring.io/projects/spring-security
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[postgresql]: https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[tailwind.com]:https://img.shields.io/badge/tailwindcss-0F172A?style=for-the-badge&logo=tailwindcss
[Tailwind-url]: https://tailwindcss.com/
[javascript.com]: https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=for-the-badge
[java.com]: https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white
[Java-url]: https://www.oracle.com/java/

