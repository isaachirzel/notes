package dev.hirzel.notes.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotesController {
    @RequestMapping("/notes")
    @ResponseBody
    public String index() {
        return "Hello";
    }
}
