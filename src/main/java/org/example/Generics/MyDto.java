package org.example.Generics;

public class MyDto {

    String name ;
    Integer age ;
    String qualifition;

    public MyDto(String name, Integer age, String qualifition) {
        this.name = name;
        this.age = age;
        this.qualifition = qualifition;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }

    public String getQualifition() {
        return qualifition;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public void setQualifition(String qualifition) {
        this.qualifition = qualifition;
    }
}
