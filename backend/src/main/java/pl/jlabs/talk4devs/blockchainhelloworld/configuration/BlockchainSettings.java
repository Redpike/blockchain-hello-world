package pl.jlabs.talk4devs.blockchainhelloworld.configuration;

import lombok.Data;

@Data
public class BlockchainSettings {

    private String gasPrice;

    private String gasLimit;
}
