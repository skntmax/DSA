package org.example.Generics;

public class GenericBox<T> {

    private  T  value;

    public  T setValue(T value) {
          this.value = value;
          return  this.value;
    }

    public  T getValue() {
        return  this.value;
    }

}
