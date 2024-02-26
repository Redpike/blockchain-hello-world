package pl.jlabs.talk4devs.blockchainhelloworld.openapi;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfiguration {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI().info(apiInfo());
    }

    private Info apiInfo() {
        return new Info()
                .title("Blockchain Hello World")
                .description("Provides integration between Spring Boot and Blockchain via Web3 Provider.")
                .version("1.0.0-SNAPSHOT")
                .contact(apiContact());
    }

    private Contact apiContact() {
        return new Contact()
                .name("Rafał Sokulski")
                .email("rafal.sokulski@outlook.com");
    }
}
