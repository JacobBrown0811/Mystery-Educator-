package org.wecancodeit.backend.controllers;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.backend.Services.MetService;

import jakarta.annotation.Resource;

@RestController
@RequestMapping("/met")
public class MetController {
    @Resource
    MetService service;

    public MetController(MetService service) {
        this.service = service;
    }

    @GetMapping("/random/{year}")
    public ResponseEntity<?> getRandomObject(@PathVariable String year) throws IOException, InterruptedException {
        return ResponseEntity.ok(service.getItemByYear(year));
    }
}
