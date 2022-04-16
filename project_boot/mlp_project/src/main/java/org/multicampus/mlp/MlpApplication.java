package org.multicampus.mlp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
@ServletComponentScan
@SpringBootApplication
public class MlpApplication {

	public static void main(String[] args) {
		SpringApplication.run(MlpApplication.class, args);
	}

}
