package com.petersoboyejo.mtsdgradebook.models;

public class Course {

    private String name;
    private String teacher;
    private String grade;

    public Course(String name, String teacher, String grade) {
        this.name = name;
        this.teacher = teacher;
        this.grade = grade;
    }

    public String getCourseName() {
        return name;
    }

    public String getCourseTeacher() {
        return teacher;
    }

    public String getCourseGrade() {
        return grade;
    }

}

