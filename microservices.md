

Correct placement in Microservices Architecture
Logical view
┌──────────── Region: ap-south-1 ────────────┐
│                                            │
│  AZ-a        AZ-b         AZ-c              │
│ ┌──────┐    ┌──────┐     ┌──────┐           │
│ │MS-1  │    │MS-2  │     │MS-3  │           │
│ └──┬───┘    └──┬───┘     └──┬───┘           │
│    │            │           │               │
│ ┌──▼────────────────────────────────────┐ │
│ │   Kafka Cluster (3–5 brokers)          │ │
│ │   Redis Cluster (primary + replicas)  │ │
│ └────────────────────────────────────────┘ │
└────────────────────────────────────────────┘






Key principle

One Kafka cluster per region

One Redis cluster per region

Spread nodes across AZs

Microservices connect via private VPC networking

2️⃣ Kafka placement (Correct & Production-grade)
✅ Kafka is placed:

Inside a region

Across multiple AZs

Brokers are AZ-aware

Example (AWS)
Broker	AZ
broker-1	ap-south-1a
broker-2	ap-south-1b
broker-3	ap-south-1c
Why not multi-region Kafka?

❌ High latency
❌ Partition leader election becomes slow
❌ Cross-region sync is complex

Instead, use:

MirrorMaker 2

Confluent Replicator

Async replication between regions

Kafka (India)  ───►  Kafka (EU)


✔ Eventual consistency
✔ Disaster recovery
✔ Data sovereignty

3️⃣ Redis placement (Caching / Sessions / Rate limiting)
Redis should be:

Regional

Multi-AZ

Primary + replicas

Example
AZ-a: Redis Primary
AZ-b: Redis Replica
AZ-c: Redis Replica

Redis Cluster vs Replication
Use Case	Recommended
Cache	Redis Cluster
Sessions	Redis + replication
Rate limiting	Redis Cluster
Pub/Sub	Redis (regional only)
❌ Avoid global Redis writes

Redis is not designed for strong multi-region writes

Use read replicas only across regions

4️⃣ Multiple Regions – How things really work
Typical setup
Region A (India)
- Microservices
- Kafka
- Redis

Region B (EU)
- Microservices
- Kafka
- Redis

Cross-region communication
Component	Strategy
Kafka	MirrorMaker / Replicator
Redis	Cold standby / read-only
DB	Primary + async replicas
Auth	Stateless JWT
5️⃣ Why Kafka/Redis are NOT per-microservice

❌ Per-service Kafka:

Topic explosion

Operational nightmare

Resource waste

❌ Per-service Redis:

Cache fragmentation

Inconsistent state

Higher latency

✅ Shared platform approach:

Central observability

Controlled access (ACLs)

Cost efficient

Easier scaling

6️⃣ Availability & Failure scenarios
AZ failure

✔ Kafka leader moves to another AZ
✔ Redis replica promoted
✔ Microservices continue running

Region failure

✔ Traffic routed to another region
✔ Kafka data restored via replication
✔ Redis cache rebuilt

7️⃣ Summary (Interview-ready answer)

In a microservices architecture, Kafka and Redis are deployed as shared regional platform services.
Each cluster is spread across multiple availability zones to ensure high availability.
For multi-region setups, each region has its own Kafka and Redis, with asynchronous replication used for disaster recovery rather than active-active global clusters.

If you want, I can:

Draw AWS / GCP / Azure reference architecture

Compare MSK vs self-managed Kafka

Explain Kafka vs Redis responsibilities

Give a real fintech / e-commerce example

Just tell me which one 👌