package pl.jlabs.talk4devs.blockchainhelloworld.helloworld;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
class HelloWorldService {

    private final HelloWorldAccessManager accessManager;

    String getMessage(String contractAddress) {
        try {
            return accessManager.getContract(contractAddress).message().send();
        } catch (Exception e) {
            return "";
            // TODO Logging and throwing specified exception
        }
    }

    void updateMessage(String contractAddress, String message) {
        try {
            accessManager.getContract(contractAddress).update(message).send();
        } catch (Exception e) {
            // TODO Logging and throwing specified exception
        }
    }
}
