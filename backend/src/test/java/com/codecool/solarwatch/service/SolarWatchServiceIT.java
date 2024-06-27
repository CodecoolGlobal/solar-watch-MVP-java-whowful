package com.codecool.solarwatch.service;

import com.codecool.solarwatch.model.user.Role;
import com.codecool.solarwatch.model.user.UserEntity;
import com.codecool.solarwatch.model.user.UserRequest;
import com.codecool.solarwatch.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(properties = {
        "spring.datasource.url=jdbc:h2:mem:testdb",
        "spring.datasource.driverClassName=org.h2.Driver",
        "spring.datasource.username=sa",
        "spring.datasource.password=password",
        "spring.h2.console.enabled=true"
})
class SolarWatchServiceIT {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;

    public static String asJsonString(final Object obj) {
        try {
            final ObjectMapper mapper = new ObjectMapper();
            final String jsonContent = mapper.writeValueAsString(obj);
            return jsonContent;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    void checkIfDatabaseSavesTheUserToDb() throws Exception {
        mvc.perform(post("/api/user/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(new UserRequest("test1", "test1"))))
                .andExpect(status().is2xxSuccessful());

        assertEquals("test1", userRepository.findByUsername("test1").get().getUsername());
    }

    @Test
    void sendingRegisterRequestReturnsOkStatus() throws Exception {
        mvc.perform(post("/api/user/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(new UserRequest("test", "test"))))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    void sendingLogInRequestWillLoadCredentialsFromDbAndSendsOkStatus() throws Exception {
        UserEntity user = new UserEntity();
        user.setPassword(encoder.encode("test2"));
        user.setUsername("test2");
        user.setRole(Role.ROLE_USER);
        userRepository.save(user);
        mvc.perform(post("/api/user/signin")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(new UserRequest("test2", "test2"))))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    void sendingLogInRequestWithIncorrectPasswordReturnsUnauthorizedStatus() throws Exception {
        UserEntity user = new UserEntity();
        user.setPassword(encoder.encode("test"));
        user.setUsername("test");
        user.setRole(Role.ROLE_USER);
        userRepository.save(user);
        mvc.perform(post("/api/user/signin")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(new UserRequest("test", "wrongPassword"))))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void sendingGetRequestToEndpointReturnsOkStatus() throws Exception {
        mvc.perform(get("/api/solarwatch?city=London&date=2024-12-12")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    void sendingGetRequestToEndpointReturnsCorrectCity() throws Exception {
        mvc.perform(get("/api/solarwatch?city=London&date=2024-12-12")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("city", is("London")));
    }

    @Test
    void sendingGetRequestWithIncorrectDateToEndpointReturnsBadRequestStatus() throws Exception {
        mvc.perform(get("/api/solarwatch?city=London")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    void sendingGetRequestWithNoCityReturnsDefaultCity() throws Exception {
        mvc.perform(get("/api/solarwatch?date=2024-12-12")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("city", is("Budapest")));
    }
}
