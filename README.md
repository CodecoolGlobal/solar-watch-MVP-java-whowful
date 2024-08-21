<a id="readme-top"></a>
### Solar Watch Site

---

This project is a streamlined and user-friendly website that allows registered users to effortlessly access and view sunrise and sunset data for specific cities on any chosen date. The website also includes a convenient feature that automatically saves the cities checked by users, ensuring that this information remains readily available without the need to recheck the data on subsequent visits.

<img src='frontend/public/Screenshot 2024-08-21 at 11.07.01.png'>


### Built with

---

In this application <strong>[Sunrise Sunset API](https://sunrise-sunset.org/api)</strong> and <strong>[Geocode API](https://openweathermap.org/api/geocoding-api)</strong> are used to generate the solar data. <strong>[Geocode API](https://openweathermap.org/api/geocoding-api)</strong> requires an API key, so make sure to register on their website if you would like to use this application.

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

For the project Java JDK 21 or newer version is required. You can download it from here: [https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)

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
  <img src='frontend/public/Screenshot 2024-08-21 at 13.31.15.png'>
   - Now an input field of the environmental variables is visible where you can enter your variables.
   - Don't forget to add your API key as well.

<strong>Please note that the name of the environmental variables have to be the same as in the application.properties file!</Strong>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usage

1. To start the server, open the backend folder of the project in your IDE (IntelliJ IDEA recommended). Make sure to open it as a Maven project.
2. Run the main method of the SolarWatchApplication class.
3. Run the frontend from the terminal:
   - Navigate to the frontend folder.
   - Start it with 'npm run dev' command
4. Open localhost in your browser: [http://localhost:5173/](http://localhost:5173/)

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

