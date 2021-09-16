package com.ndry.workquest.web;

import com.ndry.workquest.dto.Questions;
import com.ndry.workquest.service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*") // Todo revisar como funciona concretamente esta etiqueta.
public class QuestionsController {

    @Autowired
    private QuestionsService questionsService;

    @GetMapping("/")
    public List<Questions> prueba() {
        return questionsService.obtenerPreguntas();
    }
}
