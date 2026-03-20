package org.example.Streams;

public class StudentDto {
    String studentName ;
    Integer classNumber ;
    String classSection ;
    String University ;

    public StudentDto(String studentName, Integer classNumber, String classSection, String university) {
        this.studentName = studentName;
        this.classNumber = classNumber;
        this.classSection = classSection;
        University = university;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Integer getClassNumber() {
        return classNumber;
    }

    public void setClassNumber(String classNumber) {
        this.classNumber = Integer.valueOf(classNumber);
    }

    public String getClassSection() {
        return classSection;
    }

    public void setClassSection(String classSection) {
        this.classSection = classSection;
    }

    public String getUniversity() {
        return University;
    }

    public void setUniversity(String university) {
        University = university;
    }
}
