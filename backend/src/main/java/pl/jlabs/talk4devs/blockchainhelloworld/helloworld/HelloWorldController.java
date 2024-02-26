package pl.jlabs.talk4devs.blockchainhelloworld.helloworld;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@Tag(name = "HelloWorldController", description = "HelloWorld Smart Contract Management")
class HelloWorldController {

    private final HelloWorldService service;

    @GetMapping("/api/t4d/v1/{contractAddress}/hello-world/message")
    @Operation(
            method = "GET",
            description = "Returns last message"
    )
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "Message value", content = @Content(schema = @Schema(hidden = true))),
                    @ApiResponse(responseCode = "500", description = "Error has been occurred", content = @Content(schema = @Schema(hidden = true)))
            }
    )
    public ResponseEntity<String> getMessage(@Parameter(name = "contractAddress", description = "Address of HelloWorld smart contract")
                                             @PathVariable String contractAddress) {
        String message = service.getMessage(contractAddress);
        return message.isBlank() ? ResponseEntity.internalServerError().build() : ResponseEntity.ok(message);
    }

    @PutMapping("/api/t4d/v1/{contractAddress}/hello-world/message")
    @Operation(
            method = "PUT",
            description = "Store new message in Blockchain"
    )
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "Stored message value", content = @Content(schema = @Schema(hidden = true))),
                    @ApiResponse(responseCode = "500", description = "Error has been occurred", content = @Content(schema = @Schema(hidden = true)))
            }
    )
    public ResponseEntity<String> updateMessage(@Parameter(name = "contractAddress", description = "Address of HelloWorld smart contract")
                                                @PathVariable String contractAddress,
                                                @Parameter(name = "request", description = "Value of new message")
                                                @RequestBody MessageRequest request) {
        service.updateMessage(contractAddress, request.getMessage());
        return ResponseEntity.ok(request.getMessage());
    }
}
