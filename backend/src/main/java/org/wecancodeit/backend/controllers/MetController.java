package org.wecancodeit.backend.controllers;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.backend.Services.MetService;

import jakarta.annotation.Resource;

/**
 * Controller for handling requests related to the Metropolitan Museum of Art.
 */
@RestController
@RequestMapping("/met")
public class MetController {
    @Resource
    MetService service;

    public MetController(MetService service) {
        this.service = service;
    }
    
    /**
     * Get a random art item from a specific year.
     * 
     * @param year The year to filter the art items.
     * @return ResponseEntity containing the art item or an error message.
     */
    @GetMapping("/random/{year}")
    public ResponseEntity<?> getRandomObject(@PathVariable String year) throws IOException, InterruptedException {
        return ResponseEntity.ok(service.getItemByYear(year));
    }
}
