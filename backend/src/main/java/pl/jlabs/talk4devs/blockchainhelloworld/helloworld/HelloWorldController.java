package pl.jlabs.talk4devs.blockchainhelloworld.helloworld;

import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
class HelloWorldController {

    private final HelloWorldService service;

    @GetMapping("/api/t4d/v1/{contractAddress}/hello-world/message")
    public ResponseEntity<String> getMessage(@PathVariable String contractAddress) {
        String message = service.getMessage(contractAddress);
        return message.isBlank() ? ResponseEntity.internalServerError().build() : ResponseEntity.ok(message);
    }

    @PutMapping("/api/t4d/v1/{contractAddress}/hello-world/message")
    public ResponseEntity<String> updateMessage(@PathVariable String contractAddress,
                                                @RequestBody MessageRequest request) {
        service.updateMessage(contractAddress, request.getMessage());
        return ResponseEntity.ok(request.getMessage());
    }
}
