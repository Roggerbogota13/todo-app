package com.msc.todo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DefaultController {

	@RequestMapping(path="",method = RequestMethod.GET)
	public @ResponseBody String defaultMessege() {
		return "<h1>hola</h1>";
		
	}
}
