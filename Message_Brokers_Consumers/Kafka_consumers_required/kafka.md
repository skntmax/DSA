Basic Rule

For a consumer group:
    Maximum active consumers = Number of partitions

Example:
    Topic: CAB_BOOKED
    Partitions: 8

    Consumer Group:
    consumer-1
    consumer-2
    consumer-3
    consumer-4
    consumer-5
    consumer-6
    consumer-7
    consumer-8


All 8 consumers can work simultaneously.

If you start 10 consumers:
    8 consumers -> active
    2 consumers -> idle


2. How to Calculate Required Consumers

receives  1000 messages/sec

Time take to process single  job by a consumer  : 50 ms/message 


Now a single Consumer can process : 
    1000 ms / 50 ms

    = 20 messages/sec


then required consumers : 
1000/ 20   = 50 consumers 


Now check partitions:
Need 50 consumers
=> Need at least 50 partitions

Otherwise Kafka cannot utilize all consumers.