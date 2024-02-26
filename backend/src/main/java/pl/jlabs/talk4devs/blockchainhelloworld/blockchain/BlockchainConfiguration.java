package pl.jlabs.talk4devs.blockchainhelloworld.blockchain;

import lombok.Data;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "application.blockchain")
public class BlockchainConfiguration {

    private BlockchainSettings settings;

    private BlockchainAccount account;

    private Web3Settings web3;
}
