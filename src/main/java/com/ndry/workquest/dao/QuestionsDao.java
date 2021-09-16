package com.ndry.workquest.dao;

import com.ndry.workquest.dto.Questions;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface QuestionsDao extends CrudRepository<Questions, Long> {

}
