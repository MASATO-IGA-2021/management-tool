@startuml
!define RECTANGLE class

' Define components
actor User
rectangle "CloudFront" as CF
rectangle "S3 (React App)" as S3
rectangle "Elastic Load Balancer (ELB)" as ELB
rectangle "ECS (Backend - FastAPI)" as ECS_BACKEND
rectangle "ECS (Frontend - React)" as ECS_FRONTEND
rectangle "RDS (PostgreSQL)" as RDS
rectangle "IAM" as IAM
rectangle "Route 53" as Route53
rectangle "CloudWatch" as CW
rectangle "S3 (Static Files)" as S3_FILES

' Define relationships
User --> CF : Requests Content
CF --> S3 : Serve Static Files
S3 --> ECS_FRONTEND : React App
ECS_BACKEND --> RDS : PostgreSQL
ECS_BACKEND --> ECS_FRONTEND : Communicates via API
ECS_FRONTEND --> ECS_BACKEND : Calls API via Axios
ECS_BACKEND --> CW : Logs and Metrics
ECS_FRONTEND --> CW : Logs and Metrics
Route53 --> CF : Domain Routing
IAM --> ECS_BACKEND : Access Control
IAM --> ECS_FRONTEND : Access Control
IAM --> RDS : Access Control
IAM --> S3 : Access Control

' Add CloudWatch monitoring for all components
CW -[hidden]-> ECS_BACKEND
CW -[hidden]-> ECS_FRONTEND
CW -[hidden]-> RDS
CW -[hidden]-> S3
CW -[hidden]-> S3_FILES
@enduml
