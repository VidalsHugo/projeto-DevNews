package com.devnews4.demo.controllers;

import com.devnews4.demo.services.ApiNYTService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("api-nyt")
public class ApiNYTController {

    @Autowired
    ApiNYTService apiNYTService;

    @GetMapping("/top-stories/{category}")
    public String getTopStoriesByCategory(@PathVariable String category) {
        return apiNYTService.getTopStories(category);
    }
}