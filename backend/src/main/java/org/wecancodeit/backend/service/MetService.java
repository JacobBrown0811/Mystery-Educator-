package org.wecancodeit.backend.services;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.stereotype.Service;
import org.wecancodeit.backend.ArtItem;

import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class MetService {

    public ArtItem getItemByYear(String year) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        ObjectMapper objectMapper = new ObjectMapper();

        String url = String.format(
                "https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=%s&dateEnd=%s&hasImages=true&q=*",
                year, year);

        HttpRequest idRequest = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> idResponse = client.send(idRequest, HttpResponse.BodyHandlers.ofString());
        Map<String, Object> IDResponseMap = objectMapper.readValue(idResponse.body(), Map.class);
        List<Integer> ids = (List<Integer>) IDResponseMap.get("objectIDs");

        int randomIndex = new Random().nextInt(ids.size());
        int randomID = ids.get(randomIndex);

        HttpRequest objectRequest = HttpRequest.newBuilder()
                .uri(URI.create("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + randomID))
                .GET()
                .build();

        HttpResponse<String> objectResponse = client.send(objectRequest, HttpResponse.BodyHandlers.ofString());
        Map<String, Object> responseMap = objectMapper.readValue(objectResponse.body(), Map.class);

        String artist = (String) responseMap.get("artistDisplayName");
        String objectUrl = (String) responseMap.get("objectURL");
        String classification = (String) responseMap.get("classification");
        String objectYear = Integer.toString((int) responseMap.get("objectBeginDate"));

        return new ArtItem((long) randomID, artist, objectYear, objectUrl, classification);
    }
}
