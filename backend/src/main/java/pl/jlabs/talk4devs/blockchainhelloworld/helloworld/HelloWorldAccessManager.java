package pl.jlabs.talk4devs.blockchainhelloworld.helloworld;

import java.math.BigInteger;

import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.tx.RawTransactionManager;
import org.web3j.tx.TransactionManager;
import org.web3j.tx.gas.ContractGasProvider;
import org.web3j.tx.gas.StaticGasProvider;
import pl.jlabs.talk4devs.blockchainhelloworld.blockchain.BlockchainConfiguration;
import pl.jlabs.talk4devs.blockchainhelloworld.blockchain.BlockchainAccount;
import org.springframework.stereotype.Component;

@Component
class HelloWorldAccessManager {

    private final Web3j web3j;

    private final BlockchainAccount account;

    private final ContractGasProvider gasProvider;

    HelloWorldAccessManager(Web3j web3j, BlockchainConfiguration configuration) {
        this.web3j = web3j;
        this.account = configuration.getAccount();

        BigInteger gasPrice = new BigInteger(configuration.getSettings().getGasPrice());
        BigInteger gasLimit = new BigInteger(configuration.getSettings().getGasLimit());
        this.gasProvider = new StaticGasProvider(gasPrice, gasLimit);
    }

    HelloWorldContract getContract(String address) {
        TransactionManager transactionManager = getTransactionManager();
        return HelloWorldContract.load(address, web3j, transactionManager, gasProvider);
    }

    private TransactionManager getTransactionManager() {
        Credentials credentials = Credentials.create(account.getPrivateKey());
        return new RawTransactionManager(web3j, credentials, 200, 500);
    }
}
