package pl.jlabs.blockchainhelloworld.blockchain;

import lombok.Data;

@Data
public class BlockchainAccount {

    private String address;

    private String privateKey;
}
