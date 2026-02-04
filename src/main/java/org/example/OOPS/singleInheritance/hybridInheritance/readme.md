                 ┌────────────────┐
                 │    Shape       │
                 │  (Class)       │
                 │----------------│
                 │ - name         │
                 │ + display()    │
                 └────────┬───────┘
                          │
                    extends│
                          │
                 ┌────────▼────────┐
                 │     Cube         │
                 │   (Class)        │
                 │------------------│
                 │ - side           │
                 │ - color          │
                 │ + area()         │
                 │ + draw()         │
                 │ + setColor()     │
                 └───────┬────┬─────┘
                         │    │
              implements │    │ implements
                         │    │
        ┌────────────────▼┐  ┌▼────────────────┐
        │  Colorable      │  │   Drawable      │
        │ (Interface)    │  │  (Interface)    │
        │----------------│  │-----------------│
        │ + setColor()   │  │ + draw()        │
        └────────────────┘  └─────────────────┘
