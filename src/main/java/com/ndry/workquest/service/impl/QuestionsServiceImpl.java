package com.ndry.workquest.service.impl;

import com.ndry.workquest.dao.QuestionsDao;
import com.ndry.workquest.dto.Questions;
import com.ndry.workquest.service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionsServiceImpl implements QuestionsService {

    @Autowired
    private QuestionsDao questionsDao;

    @Override
    public List<Questions> obtenerPreguntas() {
        return (List<Questions>) questionsDao.findAll();
    }
}
