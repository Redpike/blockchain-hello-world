package pl.jlabs.talk4devs.blockchainhelloworld.blockchain;

import java.util.concurrent.TimeUnit;

import lombok.AllArgsConstructor;
import okhttp3.OkHttpClient;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@AllArgsConstructor
public class Web3Configuration {

    private final BlockchainConfiguration configuration;

    @Bean
    public Web3j web3j() {
        OkHttpClient.Builder httpClientBuilder = new OkHttpClient.Builder();
        OkHttpClient httpClient = httpClientBuilder
                .readTimeout(60, TimeUnit.SECONDS)
                .connectTimeout(30, TimeUnit.SECONDS)
                .build();
        String url = configuration.getWeb3().getUrl();

        return Web3j.build(new HttpService(url, httpClient));
    }
}
