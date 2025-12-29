try:
    x = int("abc")
except ValueError:
    print("Invalid number")
finally:
    print("Done")