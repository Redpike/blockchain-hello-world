package pl.jlabs.talk4devs.blockchainhelloworld.configuration;

import lombok.Data;

@Data
public class BlockchainAccount {

    private String address;

    private String privateKey;
}
